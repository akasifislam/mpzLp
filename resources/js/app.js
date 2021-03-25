require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Myheader from './components/Myheader.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Post from './components/Post.vue';

const routes = [
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/post', component: Post },
  ]

const router = new VueRouter({
    mode: 'history',
    routes
})


const app = new Vue({
    el: '#app',
    router,
    components:{
        Myheader,
    }
});
