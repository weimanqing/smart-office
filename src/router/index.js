import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

let Router1 = new Router({
    linkActiveClass: 'active',
    routes: [{
        path: '/',
        redirect: '/Dashboard', //重定向
        name: 'Dashboard',
        meta: {
            title: '首页'
        },
        component: Dashboard,
        beforeEnter: (to, from, next) => {
            // window.document.title = to.meta.title;
            next();
        }
    }, {
        path: '/Dashboard',
        name: 'Dashboard',
        meta: {
            title: 'index'
        },
        component: Dashboard,
        beforeEnter: (to, from, next) => {
            //alert('Dashboard');
            window.document.title = to.meta.title;
            next();
        }
    }, {
        path: '/Elements',
        name: 'Elements',
        meta: {
            title: 'Elements'
        },
        component: Dashboard,
        beforeEnter: (to, from, next) => {
            //alert(1);
            // window.document.title = to.meta.title;
            // next();
        }
    }, {
        path: '/buttons',
        name: 'buttons',
        meta: {
            title: 'buttons'
        },
        component: Dashboard,
        beforeEnter: (to, from, next) => {
            //alert(1);
            // window.document.title = to.meta.title;
            next();
        }
    }]
});
Router1.beforeEach((to, from, next) => { //全局路由守卫
    //window.document.title = to.meta.title;
    console.log('beforeEach');
    console.log(to);
    window.document.title = to.meta.title;
    next()
});
Router1.afterEach((to, from) => {
    console.log('afterEach');
    console.log(to, from);
});
export default Router1


// Router.beforeEach((to, from, next) => {
//     window.document.title = to.meta.title;
//     next()
// })

// Router.afterEach((to, from, next) => {
//     document.title = to.name;
// });
// Router.afterEach((to, from, next) => {
//     document.title = to.name;
// });

// Router.beforeRouteEnter((to, from, next) => {
//     console.log(to, from, next);
//     document.title = to.name;
// });
// Router.afterEach((to, from, next) => {
//     console.log(from, to, next);
//     document.title = to.name;
// });