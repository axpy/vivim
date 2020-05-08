const sharp = require('sharp')
const fs = require('fs')

const vueComponentsPath = './components/icons'
const outputSvgPath = './assets/images/new_icons'
const vueComponentsOutputPath = './components/new_icons'

const createNewTemplate = (name, path) => {
  return (
`<template>
  <img src='${path}' />
</template>

<script>
  export default {
    name: '${name}'
  }
</script>`)
}

const createFile = (path, content) => {
  fs.writeFileSync(path, content)
}

const remakeSVG = () => {
  fs.readdirSync(vueComponentsPath).forEach(fileName => {
    const decodedFileContent = fs.readFileSync(`${vueComponentsPath}/${fileName}`, 'utf8')
    const svg = decodedFileContent.split('</i>')[0].split('<i class="icon">')[1]
    const newSvgName = `${fileName.split('.')[0]}.svg`
    const newSvgFullPath = `${outputSvgPath}/${newSvgName}`
    const vueComponentFullPath = `${vueComponentsOutputPath}/${fileName}`
    const headerSvgFile = '<?xml version="1.0" encoding="iso-8859-1"?>'
    const newSvgContent = `${headerSvgFile}${svg}`
    if (svg) {
      createFile(newSvgFullPath, newSvgContent)
      const vueComponentNewContent = createNewTemplate(fileName.split('.')[0], `${outputSvgPath}/${fileName.split('.')[0]}.svg`)
      createFile(vueComponentFullPath, vueComponentNewContent)
    }
  })
}

remakeSVG()
