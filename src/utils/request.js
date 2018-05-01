import axios from 'axios'
import auth from '@/utils/auth'

var instance = axios.create({
  baseURL: '',
  timeout: 10000,
  headers: auth.getAuthHeader()
})

instance.interceptors.request.use(function (config) {
  // config.headers['token'] = ''
  return config
}, function (error) {
// Do something with request error
  return Promise.reject(error)
})
instance.interceptors.response.use(function (response) {
// Do something with response data
  return response
}, function (error) {
// Do something with response error
  return Promise.reject(error)
})
export default instance
