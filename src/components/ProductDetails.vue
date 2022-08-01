<template>
    <div>
        <Header></Header>
        <div style="margin-top:100px" class="main-div">
            <img id="image" :src="[cartItems.image]" alt="[cartItems.title]"/>
        <div>
            <div v-if="cartItems.category==='mobile'">
            <h2 style="font-weight: bolder;"> {{cartItems.brand}}</h2>
            <h3 style="font-weight: bolder;">Category: {{cartItems.category}}</h3>
            <h3 style="font-weight: bolder;">Camera: {{cartItems.camera}}MP</h3>
            <h3 style="font-weight: bolder;">RAM: {{cartItems.ram}}GB</h3>
            <h3 style="font-weight: bolder;">Price: Rs {{cartItems.price}}</h3>
            </div>
            <div v-if="cartItems.category==='laptop'">
            <h2 style="font-weight: bolder;"> {{cartItems.brand}}</h2>
            <h3 style="font-weight: bolder;">Category: {{cartItems.category}}</h3>
            <h3 style="font-weight: bolder;">RAM: {{cartItems.ram}}GB</h3>
            <h3 style="font-weight: bolder;">Processor: {{cartItems.processor}}</h3>
            <h3 style="font-weight: bolder;">Price: Rs {{cartItems.price}}</h3>
            </div>
            <div v-if="cartItems.category==='watch'">
            <h2 style="font-weight: bolder;"> {{cartItems.brand}}</h2>
            <h3 style="font-weight: bolder;">Category: {{cartItems.category}}</h3>
            <h3 style="font-weight: bolder;">Dial Shape: {{cartItems.dialShape}}</h3>
            <h3 style="font-weight: bolder;">StrapMaterial: {{cartItems.strapMaterial}}</h3>
            <h3 style="font-weight: bolder;">Price: Rs {{cartItems.price}}</h3>
            </div>
            <div v-if="cartItems.category==='headphone'">
            <h2 style="font-weight: bolder;"> {{cartItems.brand}}</h2>
            <h3 style="font-weight: bolder;">Category: {{cartItems.category}}</h3>
            <h3 style="font-weight: bolder;">Type: {{cartItems.headphoneType}}</h3>
            <h3 style="font-weight: bolder;">Color: {{cartItems.color}}</h3>
            <h3 style="font-weight: bolder;">Price: Rs {{cartItems.price}}</h3>
            </div>
            <div v-if="cartItems.category==='television'">
            <h2 style="font-weight: bolder;"> {{cartItems.brand}}</h2>
            <h3 style="font-weight: bolder;">Category: {{cartItems.category}}</h3>
            <h3 style="font-weight: bolder;">Screen Size: {{cartItems.screenSize}}inch</h3>
            <h3 style="font-weight: bolder;">Screen Type: {{cartItems.screenType}}</h3>
            <h3 style="font-weight: bolder;">Price: Rs {{cartItems.price}}</h3>
            </div>
            <!-- <h3 style="font-weight: bolder;">Rating: {{cartItems.rating}}</h3> -->
        </div>
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
    .main-div {
        border: 1px solid black;
        width: 50%;
        margin-left: 350px;
    }
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
