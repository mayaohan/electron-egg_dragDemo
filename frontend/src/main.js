import './assets/main.scss'

import './assets/var.scss'
import * as echarts from 'echarts'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import { ipc } from '@/utils/ipcRenderer'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './permission'
import i18n from './lang'
const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
// mount axios to `Vue.$http` and `this.$http`

// 全局注入IPC通信
app.config.globalProperties.$ipc = ipc
app.config.globalProperties.$echarts = echarts
app.use(VueAwesomeSwiper)
// app.config.globalProperties.productionTip = false
// app.use(ipc)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
