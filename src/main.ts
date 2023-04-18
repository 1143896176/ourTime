import Vue, { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'animate.css';
// 2. 引入组件样式
import 'vant/lib/index.css';
import {router} from "./router";
import {Button, Icon} from "vant";
const app = createApp(App)
app.use(router)
app.use(Button);
app.use(Icon);

app.mount('#app')

