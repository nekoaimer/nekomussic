import Vue from "vue"
import VueRouter from 'vue-router'
import HomeVideo from '../components/home-video/home-video.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/HomeVideo',
    component: HomeVideo
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
