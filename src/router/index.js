import Vue from 'vue'
import Router from 'vue-router'
// components
import Home from '@/views/Home'
import Detail from '@/views/Detail'
import Profile from '@/views/Profile'
import Login from '@/views/Login'
import Register from '@/views/Register'
import User from '@/views/User'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
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
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User
    }
  ]
})
