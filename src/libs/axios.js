import axios from 'axios'
import config from '@/config'
import store from '@/store'
import router from '@/router'
import {
  getToken
} from '@/libs/util'

// const addErrorLog = errorInfo => {
//   const { statusText, status, request: { responseURL } } = errorInfo
//   let info = {
//     type: 'ajax',
//     code: status,
//     mes: statusText,
//     url: responseURL
//   }
//   if (!responseURL.includes('save-error-logger')) store.dispatch('addErrorLog', info)
// }

// axios 配置
const baseUrl =
  process.env.NODE_ENV === 'development' ?
  config.baseUrl.dev :
  config.baseUrl.pro
axios.defaults.timeout = 60000
axios.defaults.baseURL = baseUrl

// http request 拦截器
axios.interceptors.request.use(
  (config) => {
    var bearerToken = getToken()
    bearerToken && (config.headers.token =  bearerToken)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  (response) => {
    if (response.data.code === 401) {
      store.dispatch('removeToken')
      router.replace({
        name: 'userLogin',
        query: {
          redirect: router.currentRoute.fullPath
        }
      })
    }

    if (response.data.code === 500) {
      // const { request: { statusText, status }, config } = JSON.parse(JSON.stringify(error))
      //   errorInfo = {
      //     statusText,
      //     status,
      //     request: { responseURL: config.url }
      //   }

      // addErrorLog(response.data.data)
    }

    return response.data
  },
  (error) => {
    console.log(error)
    // this.destroy(url)
    // let errorInfo = error.response
    // if (!errorInfo) {
    //   const { request: { statusText, status }, config } = JSON.parse(JSON.stringify(error))
    //   errorInfo = {
    //     statusText,
    //     status,
    //     request: { responseURL: config.url }
    //   }
    // }
    // addErrorLog(errorInfo)
    var data = {
      code: 500,
      message: '网络错误 请重试..'
    }
    return data
    // return Promise.reject(error)
  }
)

export default axios