export const capitalizeString = (string) => {
  return string.toLowerCase().split(' ').reduce((accumulator, item) => {
    return accumulator + ' ' + item.charAt(0).toUpperCase() + item.substring(1)
  }, '')
}