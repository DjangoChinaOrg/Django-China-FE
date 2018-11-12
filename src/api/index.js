import request from '../utils/request'

export function getPostList (pageNumber) {
  return request({
    url: '/posts/' + '?page=' + pageNumber,
    method: 'get'
  })
}

export function getPostDetail (postId) {
  return request({
    url: '/posts/' + postId + '/',
    method: 'get'
  })
}

export function getPostReplies (postId) {
  return request({
    url: '/posts/' + postId + '/replies/',
    method: 'get'
  })
}

export function getPopularTags () {
  return request({
    url: '/tags/popular/',
    method: 'get'
  })
}

export function getTagList (pageNumber) {
  if (pageNumber === undefined) pageNumber = 1
  return request({
    url: '/tags/' + '?page=' + pageNumber,
    method: 'get'
  })
}

export function getTagPosts (tagId, pageNumber) {
  return request({
    url: '/posts/' + '?tags=' + tagId + '&' + 'page=' + pageNumber,
    method: 'get'
  })
}

export function getPopularPosts () {
  return request({
    url: '/posts/popular/',
    method: 'get'
  })
}

export function publishPost (data) {
  return request({
    url: '/posts/',
    method: 'post',
    data
  })
}
export function editPost () {
  return request({
    url: '/posts/',
    method: 'put'
  })
}
export function managePost (id, data) {
  return request({
    url: '/posts/' + id + '/',
    method: 'patch',
    data
  })
}

export function getNoticeList (params) {
  return request({
    url: '/notifications/',
    method: 'get',
    params: {
      ...params
    }
  })
}

export function deleteNotice (id) {
  return request({
    url: '/notifications/' + id + '/',
    method: 'delete'
  })
}

export function markSingleNoticeAsRead (id) {
  return request({
    url: '/notifications/' + id + '/',
    method: 'put'
  })
}

export function markAllNoticesAsRead () {
  return request({
    url: '/notifications/mark_all_as_read/',
    method: 'post'
  })
}

export function replies (data) {
  return request({
    url: '/replies/',
    method: 'post',
    data
  })
}

export function repliesLike (id) {
  return request({
    url: `/replies/${id}/like/`,
    method: 'post'
  })
}

export function getEmailList (params) {
  return request({
    url: '/users/email/',
    method: 'get',
    params: {
      ...params
    }
  })
}

export function addEmail (data) {
  return request({
    url: '/users/email/',
    method: 'post',
    data
  })
}

export function deleteEmail (id) {
  return request({
    url: '/users/email/' + id + '/',
    method: 'delete'
  })
}

export function reverifyEmail (id) {
  return request({
    url: '/users/email/' + id + '/reverify/',
    method: 'get'
  })
}

export function setPrimaryEmail (id) {
  return request({
    url: '/users/email/' + id + '/set_primary/',
    method: 'post'
  })
}
