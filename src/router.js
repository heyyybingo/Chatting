// 路由模块
import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: resolve => require(['./components/Login/Login.vue'], resolve)
        },
        {
            path: '/register',
            component: resolve => require(['./components/Register/Register.vue'], resolve)
        },
        {
            path: '/chat',
            component: resolve => require(['./components/Chat/Chat.vue'], resolve)
        },
    ]
})

export default router