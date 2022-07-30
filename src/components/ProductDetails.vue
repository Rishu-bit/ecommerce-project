<template>
    <div>
            <header>
                <nav>
                    <router-link to="/" style="color: white;font-size:x-large;font-weight: bolder;margin-right: 25px;">Home</router-link>
                    <router-link to="/product" style="color: white;font-size:x-large;font-weight: bolder;margin-right: 25px;">Product</router-link>
                    <router-link to="/cart" style="color: white;font-size:x-large;font-weight: bolder;margin-right: 25px;">Cart</router-link>
                </nav>
            </header>
        <div style="margin-top:100px">
            <img id="image" :src="[cartItems.images[0]]" alt="[cartItems.title]"/>
        </div>
        <div>
            <h2 style="font-weight: bolder;"> {{cartItems.title}}</h2>
            <h3 style="font-weight: bolder;">Description: {{cartItems.description}}</h3>
            <h3 style="font-weight: bolder;">Price: {{cartItems.price}}</h3>
            <h3 style="font-weight: bolder;">Rating: {{cartItems.rating}}</h3>
        </div>
    </div>
</template>

<script>
import SingleProductVue from './SingleProduct.vue'
import {mapGetters} from 'vuex'
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
            SingleProductVue
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
</style>
