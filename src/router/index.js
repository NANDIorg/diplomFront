import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Auth from '../components/authorization'
import Reg from '../components/registration'
import DisputeCreate from '../components/disputeCreate'
import Pushmoney from '../components/pushmoney'
import DisputeBase from '../components/dispute'
import DisputeDetail from '../components/disputeDetail'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/reg',
    name: 'Reg',
    component: Reg
  },
  {
    path: '/disputeCreate/:id', 
    props: true,
    name: 'DisputeDetail',
    component: DisputeDetail
  },
  {
    path: '/disputeCreate',
    name: 'DisputeCreate',
    component: DisputeCreate
  },
  {
    path: '/pushmoney',
    name: 'Pushmoney',
    component: Pushmoney
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
