import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  scores: {
    historyCollect: 0,
    planDiscuss: 0,
    preparation: 0,
    remove: 0,
    plantTest: 0,
    plantExp: 0,
    warnings: 0
  }
}

const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

const mutations = {
  // payload: {partName, score}
  addScore: (state, payload) => {
    console.log(payload)
    state.scores[payload.partName] += payload.score
  }
}
export default new Vuex.Store({
  state,
  mutations
})
