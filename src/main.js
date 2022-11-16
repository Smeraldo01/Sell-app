import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入初始化样式和字体图标
import './assets/css/normalize.css'
import './assets/fonts/iconfont.css'
import './assets/css/index.less'

// 按需引入vantUI
import './plugins/vant.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
