import Vue from 'vue'
import Router from 'vue-router'
// components
import Home from '@/views/Home'
import HomeChild from '@/views/Home/Home'
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
import Login from '@/views/Login'
import Signup from '@/views/Signup'
import GitHubLoginSuccess from '@/views/GitHubLoginSuccess'
import Team from '@/views/Team'
import Tags from '@/views/Tags'
import TagPosts from '@/views/TagPosts'
// 认证相关
import auth from '../utils/auth'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          name: 'index',
          component: HomeChild
        },
        {
          path: 'detail/:id',
          name: 'detail',
          component: Detail
        },
        {
          path: 'tags/:id',
          name: 'tag-posts',
          component: TagPosts
        }
      ]
    },
    {
      path: '/profile',
      name: 'profile',
      beforeEnter: (to, from, next) => {
        auth.checkAuth()
        console.log(this)
        if (!auth.authenticated) {
          next({path: '/login'})
        }
      },
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
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/social-auth/github/loginsuccess',
      name: 'github login success',
      component: GitHubLoginSuccess
    },
    {
      path: '/tags',
      name: 'tags',
      component: Tags
    }
  ]
})
