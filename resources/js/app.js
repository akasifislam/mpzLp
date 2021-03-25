require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Myheader from './components/Myheader.vue';
import routes from './router';

const router = new VueRouter({
    mode: 'hash',
    routes
})


const app = new Vue({
    el: '#app',
    router,
    components:{
        Myheader,
    }
});
