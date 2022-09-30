import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//rem
// 移动端适配
import 'lib-flexible/flexible.js'

import wx from "weixin-js-sdk"; //引入微信jssdk


const app = createApp(App)

app.config.globalProperties.$wx = wx;

app.use(store).use(router).mount('#app')