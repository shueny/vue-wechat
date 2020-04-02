import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
// import Login from '../views/Login.vue'
// import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Index',
        component: Index,
        children: [{
                path: '',
                redirect: '/chats' //預設開啟為 chats 畫面
            },
            {
                path: '/contacts',
                name: 'contacts',
                component: () =>
                    import ('../views/Contacts.vue')
            }, {
                path: '/chats',
                name: 'chats',
                component: () =>
                    import ('../views/Chats.vue')
            },
            {
                path: '/discover',
                name: 'discover',
                component: () =>
                    import ('../views/Discover.vue')
            },
            {
                path: '/me',
                name: 'me',
                component: () =>
                    import ('../views/Me.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/Login.vue') //當要使用時(點擊Login時)才引入，不會一開始就載入
    }, {
        path: '/register',
        name: 'register',
        component: () =>
            import ('../views/Register.vue')
    }
    // ,
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import ( /* webpackChunkName: "about" */ '../views/About.vue')
    // }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    const isLogin = localStorage.friendsToken ? true : false;
    if (to.path === '/login' || to.path === '/register') {
        next();
    } else {
        isLogin ? next() : next('/login');
    }
})
export default router