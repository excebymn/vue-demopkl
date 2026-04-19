import { createRouter, createWebHistory } from 'vue-router'

//? import pages
import HomeView from '../views/pages/homeView.vue'
import AboutView from '../views/pages/aboutView.vue'
import ContactView from '../views/pages/contactView.vue'
import ServicesView from '../views/pages/servicesView.vue'

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
  ],
})

//? export route page
export default router
