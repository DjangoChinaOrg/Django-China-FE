import axios from 'axios'
import auth from './auth'
import router from '../router'

var instance = axios.create({
  baseURL: '',
  timeout: 10000
})

instance.interceptors.request.use(function (config) {
  // config.headers['token'] = ''
  var jwtHeader = auth.getAuthHeader()
  if (jwtHeader) {
    config.headers['Authorization'] = jwtHeader
  }
  return config
}, function (error) {
// Do something with request error
  console.log(error)
  return Promise.reject(error)
})
instance.interceptors.response.use(function (response) {
// Do something with response data
  return response
}, function (error) {
  console.log(error.response)
  const code = error.response.status
  if (code === 400 || code === 401 || code === 403) {
    alert(error.response.data.detail)
    router.push({
      path: '/login'
    })
  } else {
    return Promise.reject(error)
  }
})
export default instance
