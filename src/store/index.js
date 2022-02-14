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
  },
  plantMachine: {
    rotationSpeed: 0,
    flowSpeed: 0,
    torque: 0
  }

}

const mutations = {
  // payload: {partName, score}
  addScore: (state, payload) => {
    state.scores[payload.partName] += payload.score
  },
  changePlantMachine: (state, payload) => {
    state.plantMachine = payload
  },
  reset: (state) => {
    state.scores = {
      historyCollect: 0,
      planDiscuss: 0,
      preparation: 0,
      remove: 0,
      plantTest: 0,
      plantExp: 0,
      warnings: 0
    }

    state.plantMachine = {
      rotationSpeed: 0,
      flowSpeed: 0,
      torque: 0
    }
  }

}
export default new Vuex.Store({
  state,
  mutations
})
