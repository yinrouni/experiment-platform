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
  }, 
  nextEnabled: true,
  currentIndex: "1"

}

const mutations = {
  // payload: {partName, score}
  addScore: (state, payload) => {
    console.log(payload)
    state.scores[payload.partName] += payload.score
  },
  changePlantMachine: (state, payload) => {
    state.plantMachine = payload
  },
  changeNextStatus: (state, payload) => {
    console.log('next', payload)
    state.nextEnabled = payload
  },

  next:(state)=>{
    if (state.index === '2' && state.subIndex < 4) {
      state.subIndex++
      return
    }
    if (state.index === '3' && state.subIndex < 2) {
      state.subIndex++
      return
    }
    if (state.index === '6' && state.subIndex < 5) {
      state.subIndex++
      return
    }

    if (state.index === '7' && state.subIndex < 10) {
      state.subIndex++
      return
    }
    if (state.index === '8' && state.subIndex < 1) {
      state.subIndex++
      return
    }
    if (state.index === '9') {
      state.$router.push('/')
      state.$store.commit('reset')
      return
    }
    state.subIndex = 0
    state.index = '' + (parseInt(state.index) + 1)
  },
  goNext: (state, payload) => {
    if (payload){
      state.currentIndex = payload
    }
    else {
      state.currentIndex = '' +  (parseInt(state.currentIndex) + 1)
    }

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

    state.nextEnabled = true
  }

}
export default new Vuex.Store({
  state,
  mutations
})
