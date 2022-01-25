import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Signup from '@/components/Signup'
import Cart from '@/components/Cart'
import ProductList from '@/components/ProductList'
import Home from '@/components/Home'
import Login from '@/components/Login'
import ProductDescription from '@/components/ProductDescription'
import Dummy from '@/components/Dummy'

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
      name: 'ProductDescription',
      component: ProductDescription
    },
    {
      path: '/dummy',
      name: 'Dummy',
      component: Dummy
    }
  ]
})
