import request from '../utils/request'

export function getPostList() {
  return request({
    url: '/post',
    method: 'get'
  })
}