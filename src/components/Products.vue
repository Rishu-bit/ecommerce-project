<template>
<div id="product-main">
<input class="searchin" type="text" placeholder="search here..." v-model="searchText"><br/>
  <div class="both">
        
    <ProductChild v-for="data in list" :key="data.id" :listTitle="data.title" :listPrice="data.price" :listImage="data.thumbnail"></ProductChild>
  </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductChild from './ProductChild.vue'
// import Cart from './Cart.vue'
export default {
  computed: {
    ...mapGetters(['getProductList', 'getCheckList'])
  },
  name: 'Products',
  data () {
    return {
      searchText: '',
      list: [],
      newCategory: [],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  beforeMount: function () {
    this.$store.dispatch('actiongetProductList', {
      success: (res) => {
        console.log(res)
        this.list = this.getProductList && this.getProductList.products
        for (let i = 0; i < this.list.length; i++) {
          this.newCategory.push(this.getProductList.products[i].category)
        }
        this.newCategory = [...new Set(this.newCategory)]
      }
    })
  },
  methods: {
    childEmittedSome (value) {
      console.log(value)
    }
  },
  components: {
    ProductChild,
    // Cart
  },
  watch: {
    searchText: function (newVal) {
      this.list = this.getProductList.products.filter((data) => data.title.indexOf(newVal) > -1)
    },
    // getProductList: function (value) {
    //   console.log(value)
    //   this.list = this.getProductList
    // }
    getCheckList: function (val) {
      console.log('from watch', val)
      this.list = this.getProductList.products.filter((item) => val.indexOf(item.category) > -1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  hr {
    color: black;
  }
  .both {
    height: 80vh;
    width: 90vw;
    padding: 40px;
    /* border: 1px solid black; */
    margin-top: 60px;
    margin-left: 60px;
    margin-right: 8%;
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
  }
  .searchin {
    margin-top: 20px;
    width: 50%;
    margin-right: 50px;
    height: 30px;
    border-radius: 5px;
    margin-left: 48px;
    position: fixed;
    text-align: left;
    margin-left: -393px;
}
@media screen and (max-width: 1190px){
  .searchin{
    margin-left: -288px;
  }
  .both {
    width: 88vw;
  }
  #product-main {
    margin-left: -42px;
  }
}
</style>
