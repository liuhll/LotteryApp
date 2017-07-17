import Vue from 'vue';
import Router from 'vue-router';
import Main from 'components/main/Main';
import Login from 'components/login/Login';
import Register from 'components/register/Register';
import UserNameRegister from 'components/register/UserNameRegister';
import PhoneRegister from 'components/register/PhoneRegister';
import Plan from 'components/plan/Plan';
import IntegralMall from 'components/integralmall/IntegralMall';
import Me from 'components/me/Me';
import ChoicePlan from 'components/choiceplan/ChoicePlan';
import LotteryHistory from 'components/lotteryhistory/LotteryHistory';

Vue.use(Router);

const routes = [{
    path: '/',
    redirect: '/main'
}, {
    path: '/login',
    name: 'login',
    component: Login
}, {
    path: '/main',
    name: 'main',
    component: Main,
    redirect: '/main/plan',
    children: [{
        path: 'plan',
        name: 'plan',
        component: Plan
    }, {
        path: 'integralmall',
        name: 'integralmall',
        component: IntegralMall
    }, {
        path: 'me',
        name: 'me',
        component: Me
    }]
}, {
    path: '/register',
    name: 'register',
    redirect: '/register/username',
    component: Register,
    children: [{
        path: 'username',
        name: 'userNameRegister',
        component: UserNameRegister
    }, {
        path: 'phone',
        name: 'phoneRegister',
        component: PhoneRegister
    }]
}, {
    path: '/plan/choice',
    name: 'choice',
    component: ChoicePlan
}, {
    path: '/lottery/history',
    name: 'history',
    component: LotteryHistory
}];

export default new Router({
    linkActiveClass: 'active',
    routes
});