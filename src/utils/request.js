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
  const code = error.response.status
  const errMsg = error.response
  switch (code) {
    case 400:
      alert(errMsg.data.detail)
      return Promise.reject(error)
    case 401:
      router.push('/login')
      return Promise.reject(error)
    case 403:
      alert(errMsg.data.detail)
      return Promise.reject(error)
    default:
      return Promise.reject(error)
  }
})
export default instance
