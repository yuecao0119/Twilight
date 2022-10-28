import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 初始化css样式
import 'normalize.css'
// common css
import '@/assets/common.css'
// 各种主题样式
import '@/styles/themes.less'

createApp(App).mount('#app')
