import { createRouter, createWebHistory } from 'vue-router'

import Homepage from '../components/Homepage.vue'
import Contact from '../components/Contact.vue'
import Placeholder from '../components/Placeholder.vue'

const routes = [
  { path: '/', component: Homepage },
  { path: '/kontak', component: Contact },
  { path: '/armada', component: Placeholder },
  { path: '/tentang', component: Placeholder },
  { path: '/bantuan', component: Placeholder },
  { path: '/sewa', component: Placeholder },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router