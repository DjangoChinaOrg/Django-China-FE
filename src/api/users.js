import request from '../utils/request'
import axios from 'axios'

export function getBalance (userId) {
  return request({
    url: '/users/' + userId + '/balance/',
    method: 'get'
  })
}

export function getUserDetails (userId) {
  return request({
    url: '/users/' + userId + '/',
    method: 'get'
  })
}

export function changeNickname (id, data) {
  return request({
    url: '/users/' + id + '/',
    method: 'patch',
    data
  })
}

export function changeMugShot (formData, userId) {
  // return request({
  //   url: '/proxy/users/' + userId,
  //   method: 'patch',
  //   formData
  // })
  // Todo: 使用封装的 request 方法，但我目前不会
  return axios.patch('/users/' + userId + '/', // Patch 方法时尾斜号是必须的
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
  )
}

export function changePassword (data) {
  return request({
    url: '/rest-auth/password/change/',
    method: 'post',
    data
  })
}

export function getUserPosts (userId, pageNumber) {
  return request({
    url: '/users/' + userId + '/posts/' + '?page=' + pageNumber,
    method: 'get'
  })
}

export function getUserReplies (userId, pageNumber) {
  return request({
    url: '/users/' + userId + '/replies/' + '?page=' + pageNumber,
    method: 'get'
  })
}

export function isChecked (userId) {
  return request({
    url: '/users/' + userId + '/checked/',
    method: 'get'
  })
}

export function checkin (userId) {
  return request({
    url: '/users/' + userId + '/checkin/',
    method: 'post'
  })
}

export function getSocialAccounts () {
  return request({
    url: '/rest-auth/socialaccounts/',
    method: 'get'
  })
}

export function disconnectSocialAccount (socialAccountId) {
  return request({
    url: '/rest-auth/socialaccounts/' + socialAccountId + '/disconnect/',
    method: 'post'
  })
}
