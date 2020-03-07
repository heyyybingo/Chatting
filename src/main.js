// webpack程序入口
import Vue from 'vue'
import app from './App.vue'
import router from './router.js'
import {
    Header
} from 'mint-ui'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueAxios, axios)
// 表情、更多、语音、加号
import "./lib/font/font_5t72js5db3t/iconfont.css"
Vue.component(Header.name, Header);
const vm = new Vue({
    router,
    el: '#app',
    render: c => c(app)
})