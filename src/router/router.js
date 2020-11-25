import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "@/components/PageMain";
import Async from "@/components/PageAsync";
import Form from "@/components/PageForm";
import Popup from "@/components/PageWithPopup";

Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main
        },
        {
            path: '/async',
            name: 'async',
            component: Async
        },
        {
            path: '/form',
            name: 'form',
            component: Form
        },
        {
            path: '/popup',
            name: 'popup',
            component: Popup
        }
    ]
})
