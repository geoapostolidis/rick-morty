import { createStore } from 'vuex'
import { axios } from './main'

const state = {
  list: [],
  count: 0,
  current: 1,
  pageSize: 20,
  loading: false,
  gender: undefined,
  name: undefined
}

const mutations = {
  setLoading (state, loading){
    state.loading = loading
  },
  setGender (state, gender){
    state.gender = gender
  },
  setName (state, name){
    state.name = name
  },
  setCurrent (state, current){
    state.current = current
  },
  setRecords (state, { items, count }) {
    state.list = items
    state.count = count
  }
}

const actions = {
  setCurrent ({ commit, dispatch }, value) {
    commit('setCurrent', value)
    dispatch('loadRecords')
  },
  setGender ({ commit, dispatch }, value) {
    commit('setCurrent', 1)
    commit('setGender', value)
    dispatch('loadRecords')
  },
  setName ({ commit, dispatch }, value) {
    commit('setCurrent', 1)
    commit('setName', value)
    dispatch('loadRecords')
  },
  loadRecords ({ commit, state }) {
    return new Promise((resolve, reject) => {
      commit('setLoading', true)

      var query = {}
      if (state.current) query.page = state.current
      if (state.gender) query.gender = state.gender
      if (state.name) query.name = state.name
      axios.get('character', {
        params: query
      })
      .then(res => {
        const { info, results } = res.data
        commit('setRecords', {
          items: results,
          count: info.count
        })
        resolve()
      })
      .catch(error => {
        commit('setRecords', {
          items: [],
          count: 0
        })
        resolve()
      })
      .finally(() =>  commit('setLoading', false));
      
    })
  }
}

export default createStore({
  state,
  actions,
  mutations
})