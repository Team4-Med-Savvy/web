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
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/productlist',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/product',
      name: 'Product',
      component: ProductDescription
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/producthistory',
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
    }
  ]
})
