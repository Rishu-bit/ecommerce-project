import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/components/HomePage";
import HomepageM from "@/components/HomepageM";
import Header from "@/components/Header";
import HeaderM from "@/components/HeaderM";
import Footer from "@/components/Footer";
import FilterComp from "@/components/FilterComp";
import ProductsComp from "@/components/ProductsComp";
import Login from "@/components/login";
import Mobile from "@/components/Mobile";
import Laptop from "@/components/Laptop";
import Headphone from "@/components/Headphone";
import Watch from "@/components/Watch";
import Tv from "@/components/Tv";
import Slider from "@/components/Slider";
import MerchantLogin from "@/components/MerchantLogin";
import LoggedInHomePage from "@/components/LoggedInHomePage";
import Cart from "@/components/Cart";
import ProductDetails from "@/components/ProductDetails";
import AddNewProduct from "@/components/AddNewProduct"
import Order from '@/components/Order'
import Account from '@/components/Account'
import BeforeLoginCartH from '@/components/BeforeLoginCartH'
import ContactUs from '@/components/ContactUs'
import FilterComponentBeforeLogin from '@/components/FilterComponentBeforeLogin'
import UpdateAddNP from '@/components/UpdateAddNP'

Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage
    },
    {
      path: "/homepagem",
      name: "HomepageM",
      component: HomepageM
    },
    {
      path: "/homel",
      name: "LoggedInHomePage",
      component: LoggedInHomePage
    },
    // {
    //   path: '/product',
    //   name: 'Product',
    //   component: Product
    // },
    {
      path: "/header",
      name: "Header",
      component: Header
    },
    {
      path: "/headerm",
      name: "HeaderM",
      component: HeaderM
    },
    {
      path: "/slider",
      name: "Slider",
      component: Slider
    },
    {
      path: "/footer",
      name: "Footer",
      component: Footer
    },
    {
      path: "/filter",
      name: "FilterComp",
      component: FilterComp
    },
    {
      path: "filterbefore",
      name: "FilterComponentBeforeLogin",
      component: FilterComponentBeforeLogin
    },
    {
      path: "/product-comp-home",
      name: "ProductsComp",
      component: ProductsComp
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/mlogin",
      name: "MerchantLogin",
      component: MerchantLogin
    },
    {
      path: "/mobile",
      name: "Mobile",
      component: Mobile
    },
    {
      path: "/laptop",
      name: "Laptop",
      component: Laptop
    },
    {
      path: "/watch",
      name: "Watch",
      component: Watch
    },
    {
      path: "/headphone",
      name: "Headphone",
      component: Headphone
    },
    {
      path: "/tv",
      name: "Tv",
      component: Tv
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart
    },
    {
      path: "/products/:id",
      name: "ProductDetails",
      component: ProductDetails
    },
    {
      path: "/add",
      name: "AddNewProduct",
      component: AddNewProduct
    },
    {
      path: "/edit",
      name: "UpdateAddNP",
      component: UpdateAddNP
    },
    {
      path: "/order",
      name: "Order",
      component: Order
    },
    {
      path: "/account",
      name: "Account",
      component: Account
    },
    {
      path: "/beforecarth",
      name: "BeforeLoginCartH",
      component: BeforeLoginCartH
    },
    {
      path: "/contact",
      name: "ContactUs",
      component: ContactUs
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
});

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
