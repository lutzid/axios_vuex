import Vue from 'vue'
import Vuex from 'vuex'
import username from './username'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        username
    }
})