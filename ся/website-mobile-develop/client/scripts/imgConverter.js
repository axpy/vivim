const fs = require('fs')
const jimp = require('jimp')

const imagemin = require('imagemin');
// const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

const config = {
  inputPath: '../static/images',
  outputPath: '../static/images-optimized',
  temporaryPath: '../static/tmp',
  minSize: 350,
  maxSize: 1400,
  resizeInterval: 200,
  // convertQuality: 50,
  compressQuality: [0.6, 0.8],
  resizeQuality: 70,
}

async function makeDirectoriesForOptimizedImages() {
  const {inputPath, outputPath} = config
  const optimizedImagesFolderMap = new Set(fs.readdirSync(outputPath))
  const imagesFolder = fs.readdirSync(inputPath)

  imagesFolder.forEach(async (file) => {
    let [fileName, extension] = file.split('.')

    // if (fileName.includes('-jpg')) {
    //   [fileName] = fileName.split('-jpg')
    //   await convertPngToJpg(filename, `${inputPath}/${file}`)
    // }

    if (!optimizedImagesFolderMap.has(fileName) && extension !== 'svg') {
      fs.mkdirSync(`${outputPath}/${fileName}`)
    }
  })
}

async function makeDirectoriesForOptimizedImagesStrict() {
  const {inputPath, outputPath} = config
  cleanUpFolders()
  const imagesFolder = fs.readdirSync(inputPath)

  await Promise.all(imagesFolder.map(async file => {
    let [fileName] = file.split('.')

    // if (fileName.includes('-jpg')) {
    //   [fileName] = fileName.split('-jpg')
    //   await convertPngToJpg(fileName, `${inputPath}/${file}`)
    // }
    
    fs.mkdirSync(`${outputPath}/${fileName}`)
  }))
}

function cleanUpFolders() {
  const {outputPath, temporaryPath} = config
  if (fs.existsSync(outputPath)) {
    const optimizedImagesFolder = fs.readdirSync(outputPath)
    optimizedImagesFolder.forEach(dirname => {
      deleteFolder(`${outputPath}/${dirname}`)
    })
  } else {
    fs.mkdirSync(outputPath)
  }
  deleteFolder(temporaryPath)
}

// async function convertPngToJpg(fileName, fileInputPath) {
//   const {inputPath, convertQuality} = config
//   const buffer = fs.readFileSync(fileInputPath)
//   fs.unlinkSync(fileInputPath)
//   const output = await pngToJpeg({quality: convertQuality})(buffer)
//   fs.writeFileSync(`${inputPath}/${fileName}.jpg`, output)
// }

async function compress() {
  const {inputPath, compressQuality} = config
  const outputPath = makeTempDirectory(inputPath)
  const resizeConfig = {quality: compressQuality}
  try {
    await imagemin([`${inputPath}/*.{jpg,jpeg,png}`], {
      destination: outputPath,
      plugins: [
        imageminJpegtran(),
        imageminPngquant(resizeConfig)
      ]
    });
  } catch (error) {
    console.error(error)
  }

  return outputPath
}

function makeTempDirectory(inputPath, name = 'tmp') {
  const splittedInputPath = inputPath.split('/')
  splittedInputPath.pop()
  const tempPath = `${splittedInputPath.join('/')}/${name}`
  fs.mkdirSync(tempPath, {recursive: true})

  return tempPath
}

// Due to inability to fallback image size and static generation:
// make duplicates of original sized images with fake size postfixes
//
// input: a.jpg 1555x100. maxSize = 1400, minSize = 350, interval = 200
// ouput: a-1400.jpg, a-1200.jpg, a-1000.jpg...
//
// input: a.jpg 550x100. maxSize = 1400, minSize = 350, interval = 200
// ouput: a-1400.jpg (with actual 550x100), a-1200.jpg (with actual 550x100)...

async function resize(inputPath, outputPath, fileName, extension) {
  const {minSize, maxSize, resizeQuality, resizeInterval} = config
  const image = await jimp.read(`${inputPath}/${fileName}.${extension}`)
  const imageOriginalSize = image.bitmap.width
  copyImage(inputPath, outputPath, fileName, extension)

  for (let currentSize = maxSize; currentSize >= minSize; currentSize -= resizeInterval) {
    if (currentSize < imageOriginalSize) {
      image
        .resize(currentSize, jimp.AUTO)
        .quality(resizeQuality)
        .write(`${outputPath}/${fileName}-${currentSize}.${extension}`)
    } else {
      copyImage(inputPath, outputPath, fileName, extension, currentSize)
    }
  }
}

function copyImage(inputPath, outputPath, fileName, extension, postfix = 'default') {
  fs.copyFileSync(
    `${inputPath}/${fileName}.${extension}`,
    `${outputPath}/${fileName}-${postfix}.${extension}`
  )
}

async function resizeAll(inputPath) {
  const {outputPath} = config
  const imagesFolder = fs.readdirSync(inputPath)
  const resizePromises = []
  imagesFolder.forEach(image => {
    const [fileName, extension] = image.split('.')
    resizePromises.push(
      resize(inputPath, `${outputPath}/${fileName}`, fileName, extension)
    )
  })
  await Promise.all(resizePromises)
  deleteFolder(inputPath)
}

function deleteFolder(path) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach((file) => {
      const curPath = path + "/" + file
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolder(curPath)
      } else {
        fs.unlinkSync(curPath)
      }
    })
    fs.rmdirSync(path);
  }
}

async function timeProfile(task) {
  const start = Date.now()
  await task()
  const end = Date.now()
  console.log('Compressed and resized in: ' + ((end - start) / 1000) + 's');
}

async function resizeAndCompressAll() {
  // makeDirectoriesForOptimizedImages()
  await makeDirectoriesForOptimizedImagesStrict()
  const compressedImagesPath = await compress()
  await resizeAll(compressedImagesPath)
}

timeProfile(resizeAndCompressAll)
