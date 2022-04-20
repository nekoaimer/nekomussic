import Vue from "vue";
import Vuex from 'vuex'
import plugins from "./plugins"
import state from './state'
import mutations from './mutations/mutations'
import actions from './actions/actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins,
  state,
  mutations,
  actions
})

export default store