require('./bootstrap');

window.Vue = require('vue');
// import Vue from 'vue'
// import Header from './components/Header.vue';
import Myheader from './components/Myheader.vue';

const app = new Vue({
    el: '#app',
    components:{
        Myheader
    }
});
