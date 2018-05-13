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

export function getTagList () {
  return request({
    url: '/proxy/tags/',
    method: 'get'
  })
}

export function getTagPosts (tagId, pageNumber) {
  return request({
    url: '/proxy/posts/' + '?tags=' + tagId + '&' + 'page=' + pageNumber,
    method: 'get'
  })
}

export function getPopularPosts () {
  return request({
    url: '/proxy/posts/popular/',
    method: 'get'
  })
}

export function publishPost (data) {
  return request({
    url: '/proxy/posts/',
    method: 'post',
    data
  })
}
export function editPost () {
  return request({
    url: '/proxy/posts/',
    method: 'put'
  })
}

export function getNoticeList (params) {
  return request({
    url: '/proxy/notifications/',
    method: 'get',
    params: {
      ...params
    }
  })
}

export function deleteNotice (id) {
  return request({
    url: '/proxy/notifications/' + id + '/',
    method: 'delete'
  })
}

export function makeSingleNoticeAsRead (id) {
  return request({
    url: '/proxy/notifications/' + id + '/',
    method: 'put'
  })
}

export function makeAllNoticesAsRead () {
  return request({
    url: '/proxy/notifications/make_all_as_read',
    method: 'post'
  })
}

export function replies (data) {
  return request({
    url: '/proxy/replies/',
    method: 'post',
    data
  })
}

export function getEmailList (params) {
  return request({
    url: '/proxy/users/email/',
    method: 'get',
    params: {
      ...params
    }
  })
}

export function addEmail (data) {
  return request({
    url: '/proxy/users/email/',
    method: 'post',
    data
  })
}

export function deleteEmail (id) {
  return request({
    url: '/proxy/users/email/' + id + '/',
    method: 'delete'
  })
}

export function reverifyEmail (id) {
  return request({
    url: '/proxy/users/email/' + id + '/reverify/',
    method: 'get'
  })
}

export function setPrimaryEmail (id) {
  return request({
    url: '/proxy/users/email/' + id + '/set_primary/',
    method: 'post'
  })
}

export function changeNickname (id, data) {
  return request({
    url: '/proxy/users/' + id + '/',
    method: 'patch',
    data
  })
}
