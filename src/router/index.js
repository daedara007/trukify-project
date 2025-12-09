import { createRouter, createWebHistory } from 'vue-router'

import PageHome from '../pages/PageHome.vue'
import PageAbout from '../pages/PageAbout.vue'
import PageHelp from '../pages/PageHelp.vue'
import PageTC from '../pages/PageTC.vue'
import PagePrivacy from '../pages/PagePrivacy.vue'
import PageSewa from '../pages/PageSewa.vue'
import Placeholder from '../components/Placeholder.vue'
import PageArmada from '../pages/PageArmada.vue'

const routes = [
  { path: '/', component: PageHome },
  { path: '/tentang', component: PageAbout },
  { path: '/bantuan', component: PageHelp },
  { path: '/sewa', component: Placeholder },
  { path: '/sewa/', component: PageSewa },
  { path: '/syarat-dan-ketentuan', component: PageTC },
  { path: '/pemberitahuan-privasi', component: PagePrivacy },
  { path: '/armada', component: PageArmada },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: Placeholder },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router