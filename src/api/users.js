import request from '../utils/request'

export function getBalance (userId) {
  return request({
    url: '/proxy/users/' + userId + '/balance/',
    method: 'get'
  })
}
