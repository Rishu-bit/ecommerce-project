<template>
    <div class="singleProduct">
        <div>
            <p @click="passToDetails">
                <img id="image" :src="[product.image]" :alt="[product.brand]"/>

            </p>
            <div class="offerdiv">
                <span class="offer">Rs {{ Math.ceil(product.price)}}</span><br>
                <span style="font-weight: bolder;">Stock: {{ product.stock }}</span><br/>
                <span style="font-weight: bolder;">{{ product.brand }}</span><br/>

                <button class="edit" @click="editdetails">EDIT</button>
                <button class="delete" @click="deleteproduct">DELETE</button>
                
                <!-- <button class="add_to_cart" @click="addToCartHandler(product.id)"><i class="fa fa-shopping-cart"></i> -->
                    <!-- <span class="cartText">{{ isAddToCart ? 'Add to Cart' : 'Remove Cart' }}</span></button> -->
            </div>
        </div>
    </div>
</template>

<script>
import ProductDetailsVue from './ProductDetails.vue'
import { mapGetters } from 'vuex'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
/* eslint-disable */
    export default{
        name:'SingleProduct',
        props: {
        product: {
            type: Object,
            default: () => { },
            required: false
        }
    },
    data() {
        return {
            count:0,
            posts:{
                productId:this.product.id,
                userId:this.getUser,
                quantity:0,
                merchantId:0
            },
            addToCart: [],
            isAddToCart: true,
            id: 0
        }
    },
    computed:{
            ...mapGetters(['getUser'])
    },
    methods: {
        editdetails() {
            this.$router.push('/edit1')
            window.location.reload()
        },
        // addToCartHandler(val) {
        //     console.log("first")
        //     if(1)
        //     {
        //         console.log("in the get")
        //       axios.get('http://10.20.4.110:8080/product/'+this.posts.productId,{
        //         'Content-Type': 'application/json; charset=UTF-8'
        //     } )
        //     .then((response )=> 
        //         {this.posts.merchantId=response.data.merchantId
        //         console.log(this.posts.merchantId,"inside")
        //         })
        //         .catch(err=>console.log(err))

        //     }
        //         // console.log(this.getUser,"asdasda");
        //         // console.log(response.data.merchantId,"asdasdadasda");
        //         this.posts.userId=this.getUser
        //         console.log(this.posts.merchantId,"posts");

        //         axios.post("http://10.20.4.110:9090/cart", this.posts, {
        //             "Content-Type": "application/json; charset-UTF-8"
        //         })
        //             .then(response => {
        //             console.log("response: " + response);
        //             // if (response.data) {
        //             //     alert("successfully registered");
        //             //     this.$router.push("/home");
        //             // }
        //             // else {
        //             //     alert("user already exists");
        //             //     //return
        //             // }
        //         })
        //             .catch(function (error) {
        //             console.log(error);
        //         });
        //         console.log(this.posts);
        //     // var cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
        //     // if (this.isAddToCart) {
        //     //     cartItems.push(this.product);
        //     //     localStorage.setItem("cartItems", JSON.stringify(cartItems));
        //     //     console.log('addtocart')
        //     // }
        //     // else {
        //     //     cartItems = cartItems.filter(element => element.id !== this.product.id);
        //     //     localStorage.setItem("cartItems", JSON.stringify(cartItems));
        //     //     console.log('removefrom cart');
        //     // }
        //     this.isAddToCart = !this.isAddToCart
        // },
        passToDetails() {
             this.$router.push('/products/'+this.product.id)
            
        },
        deleteproduct(id){
            console.log("delete");
            console.log(this.posts.productId);
            axios.delete('http://10.20.4.110:8080/product/'+this.posts.productId)
            .catch(err=>console.log(err))
            window.location.reload();
        }
    },
    components:{
        ProductDetailsVue
    }
    }
</script>
<style scoped>
    .singleProduct{
        padding: 5px;
        /* margin-right: 10px; */
    }
    .title{
        width:250px;
        /* font-size: 15px; */
    }
    
    .add_to_cart{
        background-color: #1F305E;
    }

</style>