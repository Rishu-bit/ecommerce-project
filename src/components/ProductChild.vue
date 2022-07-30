<template>
  <div class="productchild" @click="clickChildHandler">
    <!-- <ul
      v-for="data in productsList"
      :key="data.id"
      :class="['list-wrapper']"
    >
    </ul> -->
    <img :src="listImage" alt="image"><br>
    {{listTitle}}<br>
    <span>Price: Rs</span>
    {{listPrice}}<br>
    <button @click="addtocart">Add to Cart</button>

  </div>
</template>

<script>
export default {
  name: 'ProductChild',
  props: {
    listTitle: {
      type: String,
      required: false,
      default: ''
    },
    listPrice: {
      type: Number,
      required: false,
      default: 0
    },
    listImage: {
      type: String,
      required: false,
      default: ''
    }
  },
  methods: {
    addtocart () {
      console.log('added')
    },
    clickChildHandler () {
      this.$emit('child-clicked', this.$props.listName)
    }
  },
  beforeMount: function () {
    this.$emit('comp-mounted', this.$props.listName)
  }
}
</script>

<style scoped>
.productchild{
  height: 34vh;
  width: 18vw;
  margin: 18px;
  /* border: 1px solid black; */
  margin-left: 27px;
}
img {
  height: 160px;
  width: 210px;
  border-top-left-radius: 15px;
}
</style>
