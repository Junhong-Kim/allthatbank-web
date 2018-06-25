import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/menu/Main'
import SavingProduct from '@/components/menu/SavingProduct'
import DepositProduct from '@/components/menu/DepositProduct'
import Community from '@/components/menu/Community'
import Login from '@/components/menu/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/savingProduct',
      name: 'SavingProduct',
      component: SavingProduct
    },
    {
      path: '/depositProduct',
      name: 'DepositProduct',
      component: DepositProduct
    },
    {
      path: '/community',
      name: 'Community',
      component: Community
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
