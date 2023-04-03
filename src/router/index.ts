import {createRouter, createWebHashHistory} from 'vue-router'
// @ts-ignore
import routes from '~pages'
export const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        ...routes,
        {
            path:'/:catchAll(.*)',
            redirect:'/home'
        }
    ]
})