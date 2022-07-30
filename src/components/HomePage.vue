<template>
  <div class="hello">
    <Header></Header>
    <FilterComp></FilterComp>
    <Slider></Slider>
    <div class="products"></div>
    <ProductsComp></ProductsComp>
    <Footer></Footer>
  </div>
</template>
/* eslint-disable */
<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import FilterComp from './FilterComp.vue'
import ProductsComp from './ProductsComp.vue'
import Slider from './Slider.vue'
export default {
  name: 'HomePage',
  data () {
    return {
      msg: 'Welcome to HomePage'
    }
  },
  components: { Header, Footer, FilterComp, ProductsComp, Slider }
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
