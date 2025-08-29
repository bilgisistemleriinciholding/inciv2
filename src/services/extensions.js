import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 1000 * 30 // request timeout
})
//console.log(service);

service.interceptors.request.use(
  config => {
    // do something before request is sent
    if (!config.baseURL) {
      config.baseURL = "https://api.inciholding.com";
    }
    //if (store.getters.token) {
    //  // let each request carry token
    //  // ['X-Token'] is a custom headers key
    //  // please modify it according to the actual situation
    //  //config.headers['Authorization'] = "Bearer " + getToken()
    //}
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

    // if the custom code is not 20000, it is judged as an error.
    if (res.success !== true) {

      return Promise.reject(new Error(res.message || 'Error'))
    } else {

      if (res.message) {
        //console.log(res.message);
      }

      return res
    }
  },
  error => {
    //console.log('err' + error) // for debug

    return Promise.reject(error)
  }
)

export default service

