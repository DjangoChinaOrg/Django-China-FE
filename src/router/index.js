import Vue from 'vue'
import Router from 'vue-router'
// components
import Home from '@/views/Home'
import Profile from '@/views/Profile'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
    },
    {
      path: '/detail',
      name: 'detail',
      component: Home
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      redirect: '/profile/basic',
      children: [
        {
          path: 'basic',
          name: 'basic',
          component: Home
        }
      ]
    }
  ]
})
