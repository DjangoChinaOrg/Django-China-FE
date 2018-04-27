import Vue from 'vue'
import Router from 'vue-router'
// components
import Home from '@/views/Home'
import Detail from '@/views/Detail'
import Profile from '@/views/Profile'
import Basic from '@/views/Profile/Basic'
import EmailSet from '@/views/Profile/EmailSet'
import Account from '@/views/Profile/AccountCombine'
import ChangePwd from '@/views/Profile/ChangePwd'
import User from '@/views/User'
import Publish from '@/views/Publish'
import Notification from '@/views/Notification'
import HomePage from '@/views/HomePage'
import GitHubLoginSuccess from '@/views/GitHubLoginSuccess'
import Login from '@/views/Login'
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
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
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
          component: Basic
        },
        {
          path: 'password',
          name: 'password',
          component: ChangePwd
        },
        {
          path: 'email',
          name: 'email',
          component: EmailSet
        },
        {
          path: 'account',
          name: 'account',
          component: Account
        }
      ]
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User
    },
    {
      path: '/add',
      name: 'add',
      component: Publish
    },
    {
      path: '/notification',
      name: 'notification',
      component: Notification
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/social-auth/github/loginsuccess',
      name: 'github login success',
      component: GitHubLoginSuccess
    }
  ]
})
