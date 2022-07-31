<template>
  <div class="header-component">
    <span class="logo"><router-link to="/">ElectroBay</router-link></span>
    <!-- <input type="text" class="search-section" placeholder="search here....."> -->
    <div class="header-nav">
      <router-link to="/login" class="a-link">Login</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="/mlogin" class="a-link">Merchant</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="/beforecarth" class="a-link">Cart</router-link>&nbsp;&nbsp;&nbsp;
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'This is header Component'
    }
  }
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
    margin-left: 10px;
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
    /* border-top-left-radius: 6px; */
  }
</style>
