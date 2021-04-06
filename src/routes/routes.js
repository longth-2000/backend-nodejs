import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../component/Login.vue'
import Register from "../component/Register.vue"
import Home from "../component/Home.vue"
Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {path: '/', component: Login},
        {path: '/register', component:Register },
        {path:'/home', component:Home}
    ]
})