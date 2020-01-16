import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default {
    state: {
        username: ''
    },
    actions,
    mutations
}