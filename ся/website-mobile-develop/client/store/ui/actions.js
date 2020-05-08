function getDisplayWidth(width) {
  if (width <= 475) {
    return 'mobile'
  } else if (width <= 580) {
    return 'big-mobile';
  } else if (width <= 768) {
    return 'tablet'
  } else if (width <= 1024) {
    return 'netbook'
  } else if (width <= 1250) {
    return 'small-laptop'
  } else if (width <= 1366) {
    return 'laptop'
  } else if (width <= 1600) {
    return 'desktop'
  } else if (width >= 1601) {
    return 'big-desktop'
  }
}
  
const actions = {
  setCurrentDisplay: ({ commit }, width) => {
    const display = getDisplayWidth(width)
    commit('SET_CURRENT_DISPLAY', display)
  }
}

export default actions