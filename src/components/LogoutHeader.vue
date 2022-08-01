<template>
  <div class="header-component">
    <span class="logo"><router-link to="/homel" class="a-link">ElectroBay</router-link></span>
    <!-- <input type="text" class="search-section" placeholder="search here....."> -->
    <div class="header-nav">
      <!-- <router-link to="/homel" class="a-link">Home</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->
      <router-link to="/" class="a-link">Logout</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="/mlogin" class="a-link">Merchant</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="/cart" class="cart-link">Cart<sup class="cartcount">{{this.cartCount}}</sup></router-link>&nbsp;&nbsp;&nbsp;
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
/* eslint-disable */
export default {
  name: 'Header',
  data () {
    return {
      cartItems:[],
      cartCount:0
    }
  },
  components :{

  },
    beforeMount: function(){
      console.log(this.getUser)
            axios.get(`http://10.20.4.110:9090/cart/user/${this.getUser}`)
          .then(response=>this.cartCount=response.data.length)
     },
     computed:{
            ...mapGetters(['getUser','getMerchant'])
        },
    // mounted:function(){
    //     var cartItems=JSON.parse(localStorage.getItem("cartItems")||"[]")
    //     this.cartItems=cartItems
    // }
}
</script>

<style scoped>
  * {
    text-decoration: none;
    color: white;
  }
  .header-component {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    border: 1px solid black;
    height: 34px;
    padding-top: 15px;
    background-color: #1F305E;
    color: white;
  }
  button {
    background-color: #1F305E;
    color: white;
  }
  .logo {
    float: left;
    margin-left: 30px;
    height: 30px;
    width: 30px;
  }
  .logo-image {
    height: 35px;
    width: 50px;
    border-radius: 8px;
    margin-top: -4px
  }
  .search-section {
    width: 600px;
    margin-left: 120px;
    margin-right: 20px;
    color: black;
    height: 25px;
    padding-top: 4px;
    border: none;
    border-radius: 5px;
  }
  .header-nav {
    display: flex;
    flex-direction: row;
    float: right;
    padding-right: 30px;
  }
  @media screen and (max-width: 450px){
    .header-nav {
      padding-right: 0px;
    }
  }
  .a-link {
    color: white;
    font-size: 16px;
  }
  .a-link:hover {
    background-color: white;
    color: #1F305E;
    border: 1px solid black;
    /* border-top-left-radius: 6px; */
  }
  .cart-link {
    margin-top: -4px;
    font-size: 16px;
  }
  .cartcount{
    color: #1F305E;
    background-color: white;
    padding: 2px 6px;
    border-radius:49px ;
}
</style>