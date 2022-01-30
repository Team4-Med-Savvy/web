import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Signup from '@/components/Signup'
import Cart from '@/components/Cart'
import ProductList from '@/components/ProductList'
import Home from '@/components/Home'
import Login from '@/components/Login'
import ProductDescription from '@/components/ProductDescription'
import Profile from '@/components/Profile'
import ProductHistory from '@/components/ProductHistory'
import Test from '@/components/test'
import ProductTrial from '@/components/ProductTrial'
import EmptyCart from '@/components/EmptyCart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/cart/email/:email',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/product/findlist/:category',
      name: 'ProductList',
      component: ProductList,
      props: true
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: true
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/product/:id',
      name: 'ProductDescription',
      component: ProductDescription,
      props: true
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/producthistory/:id',
      name: 'ProductHistory',
      component: ProductHistory
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/trail',
      name: 'ProductTrial',
      component: ProductTrial
    },
    {
      path: '/empty',
      name: 'EmptyCart',
      component: EmptyCart
    }
  ]
})
