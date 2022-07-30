<template>
  <div class="hello">
    <LogoutHeader></LogoutHeader>
    <FilterComp></FilterComp>
    <Slider></Slider>
    <div class="products"></div>
    <ProductsComp></ProductsComp>
    <Footer></Footer>
  </div>
</template>
/* eslint-disable */
<script>
import Footer from './Footer.vue'
import FilterComp from './FilterComp.vue'
import ProductsComp from './ProductsComp.vue'
import Slider from './Slider.vue'
import LogoutHeader from './LogoutHeader.vue'
export default {
  name: 'HomePage',
  data () {
    return {
      msg: 'Welcome to HomePage'
    }
  },
  components: { Footer, FilterComp, ProductsComp, Slider, LogoutHeader }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
Header {
  height: 60px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
