import { get, post } from '@/libs/request'

const create = (that, open, data) => {
  that.modal.create = open
  data && that.items.unshift(data)
}

const update = (that, open, data, success = false, fields = []) => {
  that.modal.update = open
  if (data && success === false) {
    that.update = JSON.parse(JSON.stringify(data))
  }

  if (data && success === true) {
    fields.forEach(item => {
      that.items[that.update._index][item] = data[item]
    })
  }
}

const remove = (api, that, data) => {
  var con = confirm('确认删除吗？删除后将无法恢复')
  if (con !== true) return false
  that.loading = true
  post(api, data, false).then(response => {
    that.loading = false
    if (response.code !== 200) {
      return that.$Message.warning(response.message)
    }
    that.$Message.success(response.message)
    that.items.splice(data._index, 1)
  })
}

const index = (api, that, page = 1, query = {}) => {
  var params = {}
  params.page = page
  Object.assign(params, query)
  that.loading = true
  get(api, params, false).then(res => {
    if (res.code !== 200) {
      return (that.loading = res.message)
    }
    that.loading = false
    that.items = res.data.items
    that.page = res.data.page
  })
}

export default {
  create,
  update,
  remove,
  index
}
