export default {
  state: {
    showSideBar: false
  },
  mutations: {
    showSideBar(state){
      state.showSideBar = true
    },
    hideSideBar(state){
      state.showSideBar = false
    },
    toggleSideBar(state){
      if(state.showSideBar){
        state.showSideBar = false
      }else{
        state.showSideBar = true
      }
    }
  }
}
