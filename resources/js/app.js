require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'

// sweetalert2 
import Swal from 'sweetalert2'
window.Swal=Swal
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
window.Toast=Toast

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
