<template>
    <div class="carthelper">
        <div class="flexbox">
            <div class="box1">
                <img class="img" :src="product.image" :alt="[product.brand]">
            </div>
            <div class="box2">
                <p> <b>Product Name : </b> {{ product.brand }} </p>
                <p> <b>Category : </b> {{ product.category }} </p>
                <!-- <p> <b>Discount : </b> {{ product.discountPercentage }} % </p> -->
                <p> <b>Price : </b> ₹ {{ product.price }}.00 </p>
                <!-- <p> <b>Stock : </b> {{ product.stock }} </p> -->

                <!-- <span><button class="buynow"><i class="fa fa-shopping-cart"></i> Buy Now</button> </span>
                <span><button class="delete" @click="removeCart"><i class="fa fa-trash"></i> Remove</button> </span> -->
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
import { mapGetters } from 'vuex'
/* eslint-disable */ 
    export default{
        name:'CartHelper',
        data(){
            return{

            }
        },
        props:{
            product:{
                type:Object,
                default : ()=>{

                },
                required:false
            }
        },
        computed:{
            ...mapGetters(['getUser'])
        },  
        methods:{
            // removeCart(){
            //     // var cartItems=JSON.parse(localStorage.getItem("cartItems")||"[]")
            //     // cartItems=cartItems.filter((data)=>data.id!==this.product.id)
            //     // localStorage.setItem("cartItems",JSON.stringify(cartItems))
            //     console.log(this.product.id);
            //     axios.delete(`http://10.20.4.110:9090/cart/product/${this.product.id}/${this.getUser}`)
            //     .catch(err=>console.log(err))
            // }
        }

    }
</script>

<style>
    .buynow {
    padding: 10px;
    outline: none;
    width: 200px;
    background-color: #1F305E;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-size: 16px;
    color: white;
}
.buynow:hover{
    color: black;
    background-color: white;
    border: 2px solid rgb(74, 69, 69);
}
.delete:hover{
    background-color: rgb(221, 63, 63);
    color: rgb(255, 254, 254);
    border: 2px solid rgb(221, 63, 63);
}
.delete {
    padding: 10px;
    outline: none;
    width: 200px;
    background-color: rgb(255, 255, 255);
    border: 2px solid rgb(74, 69, 69);
    border-radius: 30px;
    cursor: pointer;
    font-size: 16px;
    color: rgb(74, 69, 69);
}

.img {
    width: 58%;
    height: 230px;
    /* object-fit: cover; */
    padding: 10px;
    border-radius: 15px;
}
@media screen and (max-width: 450px){
    .img {
        width: 170%;
        height: 180px;
    }
}

.carthelper {
    /* border: 2px solid gray; */
    padding: 20px;
    border-radius: 20px;
}

.flexbox {
    border: 2px solid rgb(224, 224, 224);
    border-radius: 15px;
    display: flex;
}

.box1 {
    width: 35%;
    height: 100%;
}

.box2 {
    margin-left: 100px;
    width: 65%;
    height: 100%;
}
</style>