import axios from '@/libs/axios'
import store from '@/store'

function loading(url, params, scope = 'default') {
  store.state.loading[scope] = true
  store.state.loading.message = ''
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(
      (res) => {
        if (res.status !==1 ) return (store.state.loading.message = res.message)
        store.state.loading[scope] = false
        resolve(res)
      },
      (err) => {
        reject(err)
      }
    )
  })
}

function silent(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, params).then(
      (res) => {
        resolve(res)
      },
      (err) => {
        reject(err)
      }
    )
  })
}

export default {
  loading,
  silent
}