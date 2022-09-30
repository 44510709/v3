import { createRouter, createWebHashHistory } from 'vue-router'
import index from '../views/index.vue'
import store from "../store"

import { getParams, getCodeState } from '../utils/utils.js'

const routes = [{
        path: '/',
        name: 'home',
        component: index
    },
    {
        path: '/detail',
        name: 'detail',
        component: () => import( /* webpackChunkName: "about" */ '../views/detail.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


router.beforeEach(async (to, from, next) => {
    //微信授权登录
    if(store.state.openid){
        next()
        return false;
    }
    const href = window.location.href;
    //判断code
    if (href.indexOf('/?code') > -1) { //微信授权登录
        //授权获取code
        let { queryObj } = await getCodeState(href);
        //更新授权用户
        await store.dispatch('set_openid', queryObj.code)
    } else {
        let uri = btoa(encodeURIComponent(href));
        // let uri = codeURI(window.location.href);
        var url = `https://www.ichelaba.com/wx_oauth.php?backurl=${uri}`;
        // window.location.href = url;
    }
    next()
})

export default router