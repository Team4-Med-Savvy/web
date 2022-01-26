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
import UserProfile from '@/components/UserProfile'

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
<<<<<<< HEAD
      path: '/product/:id',
      name: 'ProductDescription',
      component: ProductDescription,
      props: true
    },
    {
=======
      path: '/product',
      name: 'ProductDescription',
      component: ProductDescription
    }, {
>>>>>>> b3e64ed67dabf559f417d33bf6b95d43e70be925
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
    },
    {
      path: '/userprofile',
      name: 'UserProfile',
      component: UserProfile
    }
  ]
})
