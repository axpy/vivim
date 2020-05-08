const getters = {
  getCurrentDisplay: (state) => {
    return state.currentDisplay
  },
  isDesktopSize(state) {
    return state.currentDisplay === 'small-laptop' || 
      state.currentDisplay === 'laptop' || 
      state.currentDisplay === 'desktop' || 
      state.currentDisplay === 'big-desktop'
  }
}
export default getters