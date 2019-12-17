import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import config from '@/config'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import {
  post,
  get
} from './libs/request'
import '@/my-theme/index.less'
import '@/assets/reset.less'
import {
  locale,
  Page
} from 'view-design';
import lang from 'view-design/dist/locale/en-US';
import BaiduMap from 'vue-baidu-map'

locale(lang);

Vue.use(ViewUI);

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'vw4d2ZziQimMkwAON1Z1wTTRriEYukId'
})

Vue.component('Page', Page);

Vue.config.productionTip = false

Vue.prototype.$config = config
Vue.prototype.$post = post
Vue.prototype.$get = get

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')