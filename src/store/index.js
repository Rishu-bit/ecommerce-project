import Vue from 'vue'
import Vuex from 'vuex'
import ProductModules from '../modules/ProductModules'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ProductModules
  }
})
