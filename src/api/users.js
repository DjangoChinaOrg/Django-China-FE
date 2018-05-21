import request from '../utils/request'

export function getBalance (userId) {
  return request({
    url: '/proxy/users/' + userId + '/balance/',
    method: 'get'
  })
}

export function getUserDetails (userId) {
  return request({
    url: '/proxy/users/' + userId + '/',
    method: 'get'
  })
}

export function changeNickname (id, data) {
  return request({
    url: '/proxy/users/' + id + '/',
    method: 'patch',
    data
  })
}

export function changePassword (data) {
  return request({
    url: '/proxy/rest-auth/password/change/',
    method: 'post',
    data
  })
}

export function getUserPosts (userId, pageNumber) {
  return request({
    url: '/proxy/users/' + userId + '/posts/' + '?page=' + pageNumber,
    method: 'get'
  })
}

export function getUserReplies (userId, pageNumber) {
  return request({
    url: '/proxy/users/' + userId + '/replies/' + '?page=' + pageNumber,
    method: 'get'
  })
}
