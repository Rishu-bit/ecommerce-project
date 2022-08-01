<template>
    <div>
        <Header></Header>
        <div style="margin-top:100px">
            <img id="image" :src="[cartItems.image]" alt="[cartItems.title]"/>
        </div>
        <div>
            <h2 style="font-weight: bolder;"> {{cartItems.brand}}</h2>
            <h3 style="font-weight: bolder;">Category: {{cartItems.category}}</h3>
            <h3 style="font-weight: bolder;">Price: Rs {{cartItems.price}}</h3>
            <!-- <h3 style="font-weight: bolder;">Rating: {{cartItems.rating}}</h3> -->
        </div>
    </div>
</template>

<script>
import SingleProductVue from './SingleProduct.vue'
import {mapGetters} from 'vuex'
import Header from './Header.vue'
/* eslint-disable */
  export default{
        name:'ProductDetails',
        data(){
            return{
                id:0,
                cartItems:[],

            }
        },
        methods:{

        },
        components:{
    SingleProductVue,
    Header
},
        computed:{
            ...mapGetters(['getProductList','actionToGetProductList'])
        },
        created(){
            this.id=Number(this.$route.params.id)
        },
        beforeMount : function () {
            this.cartItems=this.getProductList.filter((ele)=>ele.id===this.id)[0];
            console.log(this.cartItems);

        }

    }
</script>

<style>
    .image{
        width: 350px;
        height: 350px;
    }
    .navbar {
        border: 1px solid black;
        background-color: #1F305E;
        color: white;
    }
</style>
