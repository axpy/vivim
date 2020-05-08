const sharp = require('sharp')
const jimp = require('jimp')
const compressImages = require('compress-images')
const fs = require('fs')
const path = './static/images/beta'
const outputPath = './static/optimizedImages'
const config = {
  formats: {
    jpg: ['jpeg', 'webp'],
    png: ['png']
  },
  sizes: {
    min: 400,
    max: 1450
  },
  interval: 150,
  quality: 70,
  engines: {
    jpg: [
      {engine: 'mozjpeg', command: ['-quality', '70']},
      {engine: 'jpegRecompress', command: ['--quality', 'high', '--min', '70']},
      {engine: 'jpegtran', command: ['-trim', '-progressive', '-copy', 'none', '-optimize']},
      {engine: 'jpegoptim', command: ['--all-progressive', '-d']},
    ],
    png: [
      {engine: 'pngquant', command: ['--quality=20-50']},
      {engine: 'optipng', command: false},
      {engine: 'pngout', command: false},
      {engine: 'pngcrush', command: false},
    ],
    webp: {engine : 'webp', command: ['-q', '70']},
  }
}

async function resize (optimizedPath, newFolder, fileName, config, extention) {
  const image = extention === 'png' ? await jimp.read(optimizedPath) : await sharp(optimizedPath)
  const width = extention === 'png' ? await image.bitmap.width : await image.metadata()
  let size = null
  if (width < config.sizes.max) {
    size = config.sizes.max - (config.interval * Math.ceil((config.sizes.max - width) / config.interval))
  } else {
    size = config.sizes.max
  }
  if (extention === 'png') {
    await Promise.all(
      config.formats[extention].map(async format => {
        let cloneSize = size
        fs.rename(optimizedPath, `${newFolder}/${fileName}-default.${format}`, function (err) {
          if (err) throw err
        })
        while(cloneSize >= config.sizes.min) {
          await image
          .resize(cloneSize, jimp.AUTO)
          .quality(config.quality)
          .write(`${newFolder}/${fileName}-${cloneSize}.${format}`)
          cloneSize -= config.interval
        }
      })
    )
  } else {
    await Promise.all(
      config.formats[extention].map(async format => {
        let cloneSize = size
        if (format !== 'webp') {
          await image
            .toFile(`${newFolder}/${fileName}-default.${format}`)
        }
        while(cloneSize >= config.sizes.min) {
          await image
            .toFormat(format, {quality: config.quality})
            .resize(cloneSize, cloneSize, {
              fit: sharp.fit.inside,
              withoutEnlargement: true
            })
            .toFile(`${newFolder}/${fileName}-${cloneSize}.${format}`)
          cloneSize -= config.interval
        }
      })
    )
    fs.unlinkSync(optimizedPath)
  }
  let oldFileName = `${path}/${fileName}.${extention}`
  fs.unlinkSync(oldFileName)
}

const compress = ({engineJPG, enginePNG, inputPathToImages}) => {
  let outputPathToImages = `${outputPath}/`
  compressImages(inputPathToImages, outputPathToImages, {compress_force: false, statistic: true, autoupdate: true}, false,
    engineJPG ? {jpg: engineJPG} : {jpg: config.engines.jpg[0]},
    enginePNG ? {png: enginePNG} : {png: config.engines.png[0]},
    {svg: {engine: 'svgo', command: '--multipass'}},
    {gif: {engine: 'gifsicle', command: ['--colors', '64', '--use-col=web']}},
    (error, completed, statistic) => {
      const file = statistic.path_out_new.slice(statistic.path_out_new.lastIndexOf('/') + 1)
      const [fileName, extention] = file.split('.')
      const newFolder = `${outputPathToImages}${fileName}`
      if (error !== null || statistic.percent < 0){
        const engineName = statistic.algorithm.engine ? statistic.algorithm.engine : statistic.algorithm
        const engineIndex = config.engines[extention].findIndex(item => item.engine === engineName)
        if (config.engines[extention][engineIndex + 1]) {
          if (statistic.percent !== null) {
            fs.unlinkSync(statistic.path_out_new)
          }
          const fieldName = 'engine' + extention.toUpperCase()
          compress({[fieldName]: config.engines[extention][engineIndex + 1], inputPathToImages: statistic.input})
        } else { 
          resize(statistic.path_out_new, newFolder, fileName, config, extention)
        }
      } else {
        resize(statistic.path_out_new, newFolder, fileName, config, extention)
      }
    })
}

const resizeAll = (path, config, outputPath) => {
  const [imagesFolder, optimazedImagesFolder] = [fs.readdirSync(path), fs.readdirSync(outputPath)]
  imagesFolder.forEach(file => {
    const [fileName, extention] = file.split('.')
    if (optimazedImagesFolder.some(file => file === fileName)) {
      const filePath = `${path}/${file}`
      fs.unlinkSync(filePath)
    } else {
      fs.mkdirSync(`${outputPath}/${fileName}`, { recursive: true })
    }
  })
  compress({
    engineJPG: config.engines.jpg[0],
    enginePNG: config.engines.png[0],
    inputPathToImages: `${path}/*`,
  })
}

resizeAll(path, config, outputPath)