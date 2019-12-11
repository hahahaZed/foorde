import axios from '@/libs/axios'
import store from '@/store'
import { Message } from 'iview'

function loading (url, params, scope = 'default') {
  store.state.loading[scope] = true
  return new Promise((resolve, reject) => {
    axios.post(url, params).then(
      (res) => {
        store.state.loading[scope] = false
        if (res.code !== 200) return Message.warning(res.message)
        Message.success(res.message)
        resolve(res)
      },
      (err) => {
        reject(err)
      }
    )
  })
}

function silent (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then(
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
