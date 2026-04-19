import { createRouter, createWebHistory } from 'vue-router'

//? import pages
import HomeView from '../views/pages/HomeView.vue'
import AboutView from '../views/pages/AboutView.vue'
import ContactView from '../views/pages/ContactView.vue'
import ServicesView from '../views/pages/ServicesView.vue'
import PortofolioView from '@/views/pages/PortofolioView.vue'

//? add route pages
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView,
    },
    {
      path: '/portofolio',
      name: 'portofolio',
      component: PortofolioView,
    },
  ],
})

//? export route page
export default router
