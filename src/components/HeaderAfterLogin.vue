<template>
  <div class="header-component">
    <router-link to="/"><span class="logo">logo</span></router-link>
    <div class="header-nav">
      <!-- <router-link to="/add-new-product" class="a-link">Add New Product</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->
      <router-link to="/mlogin" class="a-link">Logout</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <!-- <router-link to="/mlogin" class="a-link">Merchant</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->
      <router-link to="/account" class="a-link">Account</router-link>&nbsp;&nbsp;&nbsp;
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      
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
  }
  @media screen and (max-width: 280px){
    .logo {
      margin-left: 2px;
    }
    .header-nav {
      padding-right: 0px;
    }
  }
</style>
