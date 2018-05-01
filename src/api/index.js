import request from '../utils/request'

export function getPostList (pageNumber) {
  return request({
    url: '/proxy/posts/' + '?page=' + pageNumber,
    method: 'get'
  })
}

export function getPostDetail (postId) {
  return request({
    url: '/proxy/posts/' + postId + '/',
    method: 'get'
  })
}

export function getPostReplies (postId) {
  return request({
    url: '/proxy/posts/' + postId + '/replies/',
    method: 'get'
  })
}

export function getPopularTags () {
  return request({
    url: '/proxy/tags/popular/',
    method: 'get'
  })
}

export function getPopularPosts () {
  return request({
    url: '/proxy/posts/popular/',
    method: 'get'
  })
}
