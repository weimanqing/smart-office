// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import './assets/bootstrap-3.3.7-dist/css/bootstrap.min.css'
import './assets/bootstrap-3.3.7-dist/js/bootstrap.min'
import './assets/fontawesome-4.2.0/4.2.0/css/font-awesome.min.css'
import './common/header.css'
Vue.config.productionTip = false;
Vue.config.debug = true;
Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})