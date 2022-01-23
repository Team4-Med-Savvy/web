import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Signup from '@/components/Signup'
import Cart from '@/components/Cart'
import ProductDescription from '@/components/ProductDescription'
import ProductList from '@/components/ProductList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'About',
      component: About
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
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/product',
      name: 'Product',
      component: ProductDescription
    },
    {
      path: '/productlist',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})
