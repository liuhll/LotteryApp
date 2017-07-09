// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.prototype.setCookie = (cname, value, expiredays) => {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = cname + '=' + escape(value) + ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString());
}

function getCookie(name) {
    var arr = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    var reg = arr;
    if (arr = document.cookie.match(reg)) {
        return (arr[2]);
    } else {
        return null;
    }
}
Vue.prototype.getCookie = getCookie;

Vue.prototype.delCookie = (name) => {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null) {
        document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
    }

}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    data: {},
    render: h => h(App)

});