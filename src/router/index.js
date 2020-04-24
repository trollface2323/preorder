import Vue from 'vue'
import Router from 'vue-router'

import Albums from "@/components/Albums";
import Photos from "@/components/Photos";
import MainPage from "@/components/MainPage";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/photos',
            name: 'Photo',
            component: Photos,
        },
        {
            path: '/albums',
            name: 'Albums',
            component: Albums,
        },
        {
            path: '/main',
            name: 'Main',
            component: MainPage,
        }
    ]
})
