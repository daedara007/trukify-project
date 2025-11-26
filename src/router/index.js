import { createRouter, createWebHistory } from 'vue-router'

import Homepage from '../components/Homepage.vue'
import AboutPage from '../components/AboutPage.vue'
import HelpPage from '../components/HelpPage.vue'
import Placeholder from '../components/Placeholder.vue'

const routes = [
  { path: '/', component: Homepage },
  { path: '/armada', component: Placeholder },
  { path: '/tentang', component: AboutPage },
  { path: '/bantuan', component: HelpPage },
  { path: '/sewa', component: Placeholder },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router