import request from '../utils/request'
import auth from '../utils/auth'

export function getPostList () {
  return request({
    url: '/proxy/posts/',
    method: 'get',
    headers: auth.getAuthHeader()
  })
}

export function getPopularTags () {
  return request({
    url: '/proxy/tags/popular/',
    method: 'get',
    headers: auth.getAuthHeader()
  })
}

export function getPopularPosts () {
  return request({
    url: '/proxy/posts/popular/',
    method: 'get',
    headers: auth.getAuthHeader()
  })
}
