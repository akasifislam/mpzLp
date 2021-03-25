import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Post from './components/Post.vue';

const routes = [
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/post', component: Post },
  ]

export default routes