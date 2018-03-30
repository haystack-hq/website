import Vue from 'vue'
import Router from 'vue-router'

// Components
import Home from '@/components/Home'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', component: Home},
    {path: '*', component: NotFound}
  ]
})
