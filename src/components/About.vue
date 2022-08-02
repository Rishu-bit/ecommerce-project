<template>
  <div class="account">
    <Header></Header>
    <h1>Electrobay</h1>
    <p>Founded in October 2007, we are one of India’s leading e-commerce marketplaces, with headquarters in Bengaluru. Founded by Sachin Bansal and Binny Bansal and the company initially started as an online mobile store. Later, as the company’s popularity grew, it also started selling other items such as headphones, tv, watches. As the e-commerce revolution gained momentum in India, we grew at an accelerated pace and added several new product ranges in its portfolio. As of now, the company offers more than 80 million products.</p>
    <p>We 100 million registered users and more than 100 thousand sellers on its e-commerce platform. We have invested in 21 state-of-the-art warehouses to ensure prompt delivery to its customers. Our website attracts 10 million page hits every day and around 8 million shipments are processed every month. We have also introduced our mobile app,(both for android and ios) which has become quite popular, with more than 50 million app users.</p>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
export default {
  name: 'About',
  data () {
    return {
      msg: 'This is about page'
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>