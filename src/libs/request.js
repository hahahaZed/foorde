import axios from '@/libs/axios'

export function get (url, params = {}, loading = true) {
  if (loading === true) {
    var that = this
    that.loading = true
  }

  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        if (loading === true) {
          that.loading = false
          if (response.code !== 200) {
            return (that.loading = response.message)
          }
        }
        resolve(response)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export function post (url, data = {}, loading = true) {
  if (loading === true) {
    var that = this
    that.loading = true
  }
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        if (loading === true) {
          that.loading = false
          if (response.code !== 200) {
            return that.$Message.warning(response.message)
          }
          that.$Message.success(response.message)
        }
        resolve(response)
      }, err => {
        reject(err)
      })
  })
}
