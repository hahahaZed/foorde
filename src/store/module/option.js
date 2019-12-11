import { get } from '@/libs/request'

export default {
  state: {
    category: [],
    language: {
      en: 'engilsh',
      cn: '中文',
      ar: 'عربي ،'
    },
    auto: {},
    permissions: {},
    mappings: {},
    focus: {
      scope: {
        app_home: 'Mobile home',
        app_find: 'Search home',
        app_pc: 'PC home'
        // wap_home: '移动端首页',
        // wap_find: '移动端搜索主页'
      }
    }
  },

  actions: {

    getCategory ({ state, commit }, that) {
      if (state.category.length > 0) {
        return new Promise(resolve => resolve(state.category))
      }

      that.loading = true
      return get('/article/cat/index', {}, false).then(res => {
        if (res.code !== 200) {
          return (that.loading = res.message)
        }
        that.loading = false
        state.category = res.data.items
        return res.data.items
      })
    },

    getMapping ({ state, commit }) {
      if (state.mappings.length > 0) {
        return new Promise(resolve => resolve(state.mappings))
      }

      return get('/option/mapping', {}, false).then(res => {
        state.mappings = res.data.items
        return res.data.items
      })
    },

    getPermission ({ state, commit }) {
      if (state.permissions.length > 0) {
        return new Promise(resolve => resolve(state.permissions))
      }

      var params = { limit: 1000 }
      return get('/permission/index', params, false).then(res => {
        state.permissions = res.data.items
        return res.data.items
      })
    },

    getAutoOption ({ state, commit }) {
      if (Object.keys(state.auto).length > 0) {
        return new Promise(resolve => resolve(state.auto))
      }
      return get('/auto/option/model', {}, false).then(res => {
        state.auto = res.data
        var brand_cascader = []
        res.data.brand.forEach(item => {
          var temp = {
            value: item.id,
            label: item.name_lang.en
          }

          var children = []
          item.series.forEach(series => {
            children.push({
              value: series.id,
              label: series.name_lang.en
            })
          })

          temp.children = children
          brand_cascader.push(temp)
          state.auto.brand_cascader = brand_cascader
        })
      })
    }
  }
}
