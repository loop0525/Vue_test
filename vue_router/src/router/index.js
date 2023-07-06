import Home from '../components/Home.vue'
import About from '../components/About.vue'

import { createRouter,createWebHashHistory } from 'vue-router'

const routes = [
    {path:'/', component:Home},
    {path:'/about',component:About}
]

const router = createRouter({
    routes,
    history:createWebHashHistory()
})

export default router