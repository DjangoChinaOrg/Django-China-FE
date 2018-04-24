import axios from 'axios';

var instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

instance.interceptors.request.use(function (config) {
  config.headers['token'] = ""
  return config;
}, function (error) {
// Do something with request error
  return Promise.reject(error);
});
instance.interceptors.response.use(function (response) {
// Do something with response data
  return response;
}, function (error) {
// Do something with response error
  return Promise.reject(error);
});

export default instance