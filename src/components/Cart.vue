<template>
    <div>
        <LogoutHeader></LogoutHeader>
            <h1>Welcome to cart  {{this.getUser}}</h1>
            <div
            v-for="(data,index) in cartItems"
            :key="index"
            :class="['cart']"
            v-if="cartItems.length!=0"
            >
                <cart-helper-vue :product="data"></cart-helper-vue>
            </div>
            <div class="cartempty" v-if="cartItems.length==0">
                    <h3 class="textcart"> <i class="fa fa-info-circle"></i> Your Cart is Empty!</h3>
            </div>

            <div v-if="cartItems.length!=0"><button class="buynow" @click="pushtoorderdb"><i class="fa fa-shopping-cart"></i> Buy Now</button> </div>

            <button @click="orderpage">Order history</button>
        <Footer></Footer>
    </div>
</template>

<script>
/* eslint-disable */ 
    import CartHelperVue from './CartHelper.vue'
    import LogoutHeader from './LogoutHeader.vue'
    import Footer from './Footer.vue'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
import { mapGetters } from 'vuex'
    export default{
        name:'Cart',
         
        data(){
            return{
                posts:{
                    userId:this.getUser,
                    productId:[],
                    quantity:[],
                    merchantId:[],
                    cartId:[]
                },
             
                cartCount:0,
                cartItems:[],
            }
        },
        components:{
            CartHelperVue,
            LogoutHeader,
            Footer
        },
        methods:{
            orderpage(){
                this.$router.push('/order')
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


                axios.delete(`http://10.20.4.110:9090/cart/user/${this.posts.userId}`)
                .catch(err=>console.log(err))
                window.location.reload()
            }
        },
        beforeMount: function(){
            // var cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
            // this.cartCount = cartItems.length;
            this.posts.userId=this.getUser
            axios.get(`http://10.20.4.110:9090/cart/user/${this.getUser}`)
            .then(response=>{
                // this.products=response.data;
                //console.log(this.products[0].productId,"productsssss");
                // console.log(this.products.length);
                // for(let i=0;i<this.products.length;i++){
                //     this.productId.push(this.products[i].productId)
                // }
                // console.log(this.productId);
                    for(let i=0;i<response.data.length;i++){
                        this.posts.cartId.push(response.data[i].id)
                        this.posts.productId.push(response.data[i].productId)
                        this.posts.quantity.push(response.data[i].quantity)
                        this.posts.merchantId.push(response.data[i].merchantId)
                    }
                    console.log(this.cartId);
            })
            .catch(err=>console.log(err))

            // for(let i=0;i<this.products.length;i++){
            //     console.log(this.products[i].productId,"productId");
            //     axios.get(`http://10.20.4.110:8080/product/${this.products[i].productId}`)
            //     .then(response=>console.log(response,"product data"))
            // }
            axios.get(`http://10.20.4.110:8080/product`)
            .then(response=>{
                console.log(response)
                console.log(response.data.length)
                for(let i=0;i<response.data.length;i++){
                    //this.index=this.getProductList.filter((data)=>data.brand.toLowerCase().indexOf(val.toLowerCase())>-1)
                    if(this.posts.productId.includes(response.data[i].id)){
                        console.log(response.data[i].id);
                        this.cartItems.push(response.data[i])
                    }
                }
            })
            

        },
        mounted:function(){
            // var cartItems=JSON.parse(localStorage.getItem("cartItems")||"[]")
            // this.cartItems=cartItems
        },
        computed:{
            ...mapGetters(['getUser'])
    },
    }

</script>

<style>
    header{
    top: 0px;
    z-index: 1;
    position: fixed;
    background-color: rgb(0, 119, 255);
    padding: 15px 2px 20px 12px ;
    width: 100%;
    text-align: end;
}
body{
    margin: 0;
}
a{
    text-decoration: solid;
    font-size: larger;
    margin-right: -2px;
}

footer{
    padding: 15px;
    position:fixed;
    background-color:rgb(0, 119, 255);
    bottom: 0;
    width: 100%;
    text-align: center;
    left: 0;
    right: 0;
}
h1{
    text-align: center;
    margin-top: 15vh;
}
</style>