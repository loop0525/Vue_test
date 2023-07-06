
import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import axios from 'axios'

axios.defaults.baseURL = "http://127.0.0.1:8080" //设置axios基地址

const app = createApp(App)

app.use(ElementPlus)  //在挂载前引用，否则无法解析组件

app.config.globalProperties.$axios=axios;  //配置axios的全局引用

app.mount('#app')


