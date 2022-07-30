<template>
  <div class="footer-component">
    <span class="copyright">&copy;2022 ElectronicBay. &nbsp;&nbsp;&nbsp;&nbsp;All rights reserved </span>
    <div class="footer-nav">
      <router-link to="/about" class="a-link">About</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="/contact" class="a-link">Contact-Us</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="/faq" class="a-link">FAQ</router-link>&nbsp;&nbsp;&nbsp;
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
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
  .footer-component {
    position: absolute;
    margin-bottom: 0;
    left: 0;
    right: 0;
    border: 1px solid black;
    height: 25px;
    padding-top: 5px;
    background-color: #1F305E;
    color: white;
  }
  .search-section {
    width: 600px;
    margin-right: 20px;
    color: black;
    height: 25px;
    padding-top: 4px;
    border: none;
    border-radius: 5px;
  }
  .footer-nav {
    display: flex;
    flex-direction: row;
    float: right;
    padding-right: 30px;
  }
</style>
