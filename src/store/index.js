import Vue from 'vue'
import Vuex from 'vuex'

import {state} from './state/all-state'
import {actions} from './actions/all-actions'
import {mutations} from './mutations/all-mutations'

// Import modules
import convertToStringModule from './modules/convert_to_string_module/convert-to-string-module'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules: {
    convertToStringModule
  }
})
