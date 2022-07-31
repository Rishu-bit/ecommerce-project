<template>
  <div class="hello">
    <HeaderM></HeaderM>
    <!-- <Products></Products> -->
      
    <Footer></Footer>
  </div>
</template>
<script>
import HeaderM from './HeaderM.vue'
// import Products from './Products.vue'
import Footer from './Footer.vue'
import HeaderAfterLogin from './HeaderAfterLogin.vue'
export default {
  name: 'Homepage',
  data () {
    return {
      msg: 'Welcome to HomePage'
    }
  },
  components: {
    HeaderM,
    Footer,
    HeaderAfterLogin
  }
}
</script>
<style scoped>

</style>
