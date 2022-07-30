<template>
  <div class="header-component">
    <router-link to="/"><span class="logo"><img src="../assets/logo.jpg" alt="" class="logo-image"></span></router-link>
    <!-- <input type="text" class="search-section" placeholder="search here....."> -->
    <div class="header-nav">
      <router-link to="/" class="a-link">Logout</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="/mlogin" class="a-link">Merchant</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="/cart" class="a-link">Cart<sup class="cartcount">{{this.cartCount}}</sup></router-link>&nbsp;&nbsp;&nbsp;
    </div>
  </div>
</template>

<script>
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
            var cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
            this.cartCount = cartItems.length;
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
    height: 40px;
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
  .a-link:hover {
    background-color: white;
    color: #1F305E;
    border: 1px solid black;
    border-top-left-radius: 6px;
  }
  .cartcount{
    background-color: red;
    padding: 2px 6px;
    border-radius:49px ;
}
</style>