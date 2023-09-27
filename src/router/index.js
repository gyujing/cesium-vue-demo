import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes'

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

Vue.use(VueRouter)

export default router;
