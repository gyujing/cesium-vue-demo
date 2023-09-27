import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'cesium/Source/Widgets/widgets.css'

import Cesium from 'cesium'

Vue.config.productionTip = false
Vue.prototype.Cesium = Cesium

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
