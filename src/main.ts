import Vue, { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'animate.css';
// 2. 引入组件样式
import 'vant/lib/index.css';
import {router} from "./router";
const app = createApp(App)
app.use(router)
app.mount('#app')

