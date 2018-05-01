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
