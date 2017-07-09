import Vue from 'vue';
import Router from 'vue-router';
import Main from 'components/main/Main';
import Login from 'components/login/Login';
import Register from 'components/register/Register';

Vue.use(Router);

const routes = [{
    path: '/',
    redirect: '/main'
}, {
    path: '/login',
    component: Login
}, {
    path: '/main',
    component: Main
}, {
    path: '/register',
    name: 'register',
    component: Register
}];

export default new Router({
    linkActiveClass: 'active',
    routes
});