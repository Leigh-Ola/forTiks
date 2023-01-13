export const state = () => ({
  joinPageMode: 'login',
  testx: '',
})

export const mutations = {
  changeJoinPageMode(state, mode) {
    state.joinPageMode = mode
  },
  changeTestx(state, val) {
    state.testx = val
  },
}

export const getters = {
  getjoinPageMode(state) {
    return state.joinPageMode
  },
}
