<template>
    <div class="carthelper">
        <div class="flexbox">
            <div class="box1">
                <img class="img" :src="[product.image]" :alt="[product.brand]">
            </div>
            <div class="box2">
                <p> <b>Product Name : </b> {{ product.brand }} </p>
                <p> <b>Category : </b> {{ product.category }} </p>
                <!-- <p> <b>Discount : </b> {{ product.discountPercentage }} % </p> -->
                <p> <b>Price : </b> ₹ {{ product.price }}.00 </p>
                <!-- <p> <b>Stock : </b> {{ product.stock }} </p> -->

                <span><input type="number" name="quantity" v-model="posts.quantity"></span>
                <span><button class="delete" @click="removeCart"><i class="fa fa-trash"></i> - </button> </span>
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
                posts:{
                    userId:this.getUser,
                    productId:this.product.id,
                    quantity:1,
                    merchantId:this.getMerchant,
                    cartId:[]
                }
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
            ...mapGetters(['getUser','getMerchant'])
        },  
        methods:{
            removeCart(){
                // var cartItems=JSON.parse(localStorage.getItem("cartItems")||"[]")
                // cartItems=cartItems.filter((data)=>data.id!==this.product.id)
                // localStorage.setItem("cartItems",JSON.stringify(cartItems))
                console.log(this.product.id);
                axios.delete(`http://10.20.4.110:9090/cart/product/${this.product.id}/${this.getUser}`)
                .catch(err=>console.log(err))
            },
            pushtoorderdb(){
                console.log(this.posts+"db");
                console.log(this.posts.merchantId);
                axios.post("http://10.20.4.110:9094/order", this.posts, {
                    "Content-Type": "application/json; charset-UTF-8",
                    mode:'no-cors'
                })
                // axios.post("http://10.20.4.110:9094/order",this.posts,{
                //     mode:'no-cors'
                // })
                .then(response=>console.log(response))
                .catch(err=>console.log(err))
                window.location.reload()
            }

        },
        beforeMount:function(){
            this.posts.userId=this.getUser,
            console.log(this.posts.userId);
            axios.get(`http://10.20.4.110:9090/cart/user/${this.getUser}`)
            .then(response=>{
                for(let i=0;i<response.data.length;i++){
                    console.log(response.data[i].id);
                    this.posts.cartId.push(response.data[i].id)
                }
            })

            axios.get(`http://10.20.4.110:8080/product/${this.posts.productId}`)
            .then(response=>this.posts.merchantId=response.data.merchantId)

        }

    }
</script>

<style>
    .buynow {
        height: 43px;
        margin-bottom: 15px;
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
    background-color: #1F305E;
    color: rgb(255, 254, 254);
    border: 2px solid #1F305E;
}
.delete {
    height: 28px;
    padding: 3px;
    padding-left: 19px;
    padding-right: 25px;
    outline: none;
    width: 20px;
    background-color: rgb(255, 255, 255);
    border: 2px solid rgb(74, 69, 69);
    border-radius: 30px;
    cursor: pointer;
    font-size: 16px;
    color: rgb(74, 69, 69);
}

.img {
    width: 61%;
    height: 190px;
    /* object-fit: cover; */
    padding: 10px;
    border-radius: 15px;
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