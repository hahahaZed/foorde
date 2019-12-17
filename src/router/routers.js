import userlist from './router-userlist'
import shop from './router-shop'
import foordearea from './router-foordeArea'
const routersArr = [
    userlist,
    shop,
    foordearea
]
  
  const RouterConfig = []
  
  // 循环路由配置 组装成 VueRouter 需要的格式
  routersArr.forEach((arr) => {
    for (var i in arr) {
      RouterConfig.push(arr[i])
    }
  })
  
  export default RouterConfig