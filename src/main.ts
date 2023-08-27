import { createApp } from 'vue'
// 引入清除默认样式
import '@/style/reset.scss'
// 引入全局组件--顶部和底部都是全局组件
import HospitalTop from '@/components/hospital_top/index.vue'
// 引入全局组件--底部组件
import HospitalBottom from '@/components/hospital_botton/index.vue'
// 引入vue-router核心插件并安装
import router from '@/router/index'
// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//国际化文件
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import App from './App.vue'

const app = createApp(App);

app.component('HospitalTop',HospitalTop);
app.component('HospitalBottom',HospitalBottom);
app.use(router)
app.use(ElementPlus,{
    locale: zhCn,
  })



app.mount('#app')
