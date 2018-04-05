import Vue from 'vue'
import Router from 'vue-router'

// Components
import Home from '@/components/Home'
import NotFound from '@/components/NotFound'
import ContactUs from '@/components/Contactus'
import EarlyAccess from '@/components/EarlyAccess'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', component: Home},
    {path: '/contact-us', component: ContactUs},
    {path: '/early-access', component: EarlyAccess},
    {path: '*', component: NotFound}
  ]
})
