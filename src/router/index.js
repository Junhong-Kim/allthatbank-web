import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/menu/Main'
import SavingProduct from '@/components/menu/SavingProduct'
import DepositProduct from '@/components/menu/DepositProduct'
import Community from '@/components/menu/Community'
import Login from '@/components/menu/Login'
import SavingBankName from '@/components/saving/BankName'
import SavingProductName from '@/components/saving/ProductName'
import SavingProductOption from '@/components/saving/ProductOption'
import SavingProductDetail from '@/components/saving/ProductDetail'
import DepositBankName from '@/components/deposit/BankName'
import DepositProductName from '@/components/deposit/ProductName'
import DepositProductOption from '@/components/deposit/ProductOption'
import Notice from '@/components/community/Notice'
import FreeBoard from '@/components/community/FreeBoard'
import QnA from '@/components/community/QnA'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/saving',
      name: 'SavingProduct',
      component: SavingProduct,
      redirect: {
        name: 'SavingBankName'
      },
      children: [
        {
          path: 'bankName',
          name: 'SavingBankName',
          component: SavingBankName
        },
        {
          path: 'productName',
          name: 'SavingProductName',
          component: SavingProductName
        },
        {
          path: 'productOption',
          name: 'SavingProductOption',
          component: SavingProductOption
        },
        {
          path: 'productDetail/:id',
          name: 'SavingProductDetail',
          component: SavingProductDetail
        }
      ]
    },
    {
      path: '/deposit',
      name: 'DepositProduct',
      component: DepositProduct,
      redirect: {
        name: 'DepositBankName'
      },
      children: [
        {
          path: 'bankName',
          name: 'DepositBankName',
          component: DepositBankName
        },
        {
          path: 'productName',
          name: 'DepositProductName',
          component: DepositProductName
        },
        {
          path: 'productOption',
          name: 'DepositProductOption',
          component: DepositProductOption
        }
      ]
    },
    {
      path: '/community',
      name: 'Community',
      component: Community,
      redirect: {
        name: 'Notice'
      },
      children: [
        {
          path: 'notice',
          name: 'Notice',
          component: Notice
        },
        {
          path: 'freeBoard',
          name: 'FreeBoard',
          component: FreeBoard
        },
        {
          path: 'question',
          name: 'QnA',
          component: QnA
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
