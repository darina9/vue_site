import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/pages/HomePage'
import BlogPage from '@/pages/BlogPage'
import ProjectPage from '@/pages/ProjectPage'
import NotFound from '@/pages/NotFound';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/Project',
    name: 'Project',
    component: ProjectPage
  },
  {
    path: '/Blog',
    name: 'Blog',
    component: BlogPage
  },
  {
    path: '*',
    component: NotFound
}
]


const router = new VueRouter({
  routes
})

export default router
