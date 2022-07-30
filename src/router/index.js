import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FilterComp from '@/components/FilterComp'
import ProductsComp from '@/components/ProductsComp'
import Login from '@/components/Login'
import Mobile from '@/components/Mobile'
import Laptop from '@/components/Laptop'
import Headphone from '@/components/headphone'
import Watch from '@/components/Watch'
import Tv from '@/components/TV'
import Slider from '@/components/Slider'
import MerchantLogin from '@/components/MerchantLogin'
import LoggedInHomePage from '@/components/LoggedInHomePage'
import Cart from '@/components/Cart'
import ProductDetails from '@/components/ProductDetails'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/home',
      name: 'LoggedInHomePage',
      component: LoggedInHomePage
    },
    // {
    //   path: '/product',
    //   name: 'Product',
    //   component: Product
    // },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/slider',
      name: 'Slider',
      component: Slider
    },
    {
      path: '/footer',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/filter',
      name: 'FilterComp',
      component: FilterComp
    },
    {
      path: '/product-comp-home',
      name: 'ProductsComp',
      component: ProductsComp
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/mlogin',
      name: 'MerchantLogin',
      component: MerchantLogin
    },
    {
      path: '/mobile',
      name: 'Mobile',
      component: Mobile
    },
    {
      path: '/laptop',
      name: 'Laptop',
      component: Laptop
    },
    {
      path: '/watch',
      name: 'Watch',
      component: Watch
    },
    {
      path: '/headphone',
      name: 'Headphone',
      component: Headphone
    },
    {
      path: '/tv',
      name: 'Tv',
      component: Tv
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path:'/products/:id',
      name:'ProductDetails',
      component: ProductDetails
     }
    // {
    //   path: '/products',
    //   name: 'Products',
    //   component: Products
    // }
    // {
    //   path: '/cart',
    //   name: '/Cart',
    //   component: Cart
    // }
  ]
})



// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
