import { createRouter, createWebHistory } from 'vue-router'

import PageHome from '../components/PageHome.vue'
import PageAbout from '../components/PageAbout.vue'
import PageHelp from '../components/PageHelp.vue'
import Placeholder from '../components/Placeholder.vue'

const routes = [
  { path: '/', component: PageHome },
  { path: '/armada', component: Placeholder },
  { path: '/tentang', component: PageAbout },
  { path: '/bantuan', component: PageHelp },
  { path: '/sewa', component: Placeholder },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router