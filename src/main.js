// webpack程序入口
import Vue from 'vue'
import store from './store/index.js'
import app from './App.vue'
import router from './router.js'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSocketIO from 'vue-socket.io'

Vue.use(VueAxios, axios)

Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://127.0.0.1:3000/',
    options: {
        autoConnect: false
    }
}))

// 表情、更多、语音、加号
import "./lib/font/font_5t72js5db3t/iconfont.css"
// 路由前检测
router.beforeEach((to, from, next) => {
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