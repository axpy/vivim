export function contentFromConfig(componentsList, idenficator, type = 'default') {
  return componentsList.map((item, index) => {
    return {
      name: `${item.type === 'picture' || item.type === 'videoModalInvoker' || type === 'default' ? 'Base' : 'Blog'}${item.type.charAt(0).toUpperCase()}${item.type.slice(1)}`,
      config: item.value,
      index: `${idenficator}-${index}`
    }
  })
}