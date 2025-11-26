import { createRouter, createWebHistory } from 'vue-router'

import PageHome from '../components/PageHome.vue'
import PageAbout from '../components/PageAbout.vue'
import PageHelp from '../components/PageHelp.vue'
import PageTC from '../components/PageTC.vue'
import PagePrivacy from '../components/PagePrivacy.vue'
import Placeholder from '../components/Placeholder.vue'

const routes = [
  { path: '/', component: PageHome },
  { path: '/armada', component: Placeholder },
  { path: '/tentang', component: PageAbout },
  { path: '/bantuan', component: PageHelp },
  { path: '/sewa', component: Placeholder },
  { path: '/syarat-dan-ketentuan', component: PageTC },
  { path: '/pemberitahuan-privasi', component: PagePrivacy },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router