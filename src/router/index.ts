import {createRouter, createWebHashHistory} from 'vue-router'
// @ts-ignore
import routes from '~pages'

console.log(routes)
export const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        ...routes,
        {
            path:'/:catchAll(.*)',
            redirect:'/game'
        }
    ]
})