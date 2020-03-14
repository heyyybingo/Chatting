// webpack程序入口
import Vue from 'vue'
import store from './store/index.js'
import app from './App.vue'
import router from './router.js'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSocketIO from 'vue-socket.io'
import VueTouch from 'vue-touch'

import {
    MessageBox,
    Toast,
    Indicator
} from "mint-ui";

// vue触摸

Vue.use(VueAxios, axios)

Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://www.heyyybingo.site:3000/',
    options: {
        autoConnect: false
    }
}))
Vue.use(VueTouch, {
    name: 'v-touch'
})
Vue.prototype.$messagebox = MessageBox
Vue.prototype.$toast = Toast
Vue.prototype.$indicator = Indicator

// 表情、更多、语音、加号
import "./lib/font/font_xpmyn2gz23g/iconfont.css"
import "./lib/image/1.jpg"
// 路由前检测
router.beforeEach((to, from, next) => {
    // 由于messagebox有一个bug，当不点击到区域内时，框会消失，但仍然存在，
    MessageBox.close();
    let isLogin = store.state.isLogin
    console.log(isLogin)
    if (to.meta.isLogin === isLogin) {
        next();
    } else {
        if (to.meta.isLogin) {
            // 如果没登录，进入登录页面
            console.log('1')
            next({
                path: 'login'
            })
        } else {

            // 如果已经登录了，但是进入的位置需要登录状态为false
            console.log('2')
            store.commit('Logout')
            next();
        }
    }

})
const vm = new Vue({
    sockets: {

        reconnect: function () {
            console.log('helloword')
        }
    },
    router,
    store,
    el: '#app',
    render: c => c(app)
})