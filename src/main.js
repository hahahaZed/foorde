import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import config from '@/config'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import { post, get } from './libs/request'
import '@/my-theme/index.less'
// import '@/index.less';



Vue.use(ViewUI);

Vue.config.productionTip = false

Vue.prototype.$config = config
Vue.prototype.$post = post
Vue.prototype.$get = get

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
