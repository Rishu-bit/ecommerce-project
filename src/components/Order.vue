<template>
    <div>
        <LogoutHeader></LogoutHeader>
            <h1>Welcome to Order history</h1>
            <div
            v-for="(data,index) in productList"
            :key="index"
            :class="['cart']"
            v-if="productList.length!=0"
            >
                <OrderHelper :product="data"></OrderHelper>
            </div>
            <div class="cartempty" v-if="productList.length==0">
                    <h3 class="textcart"> <i class="fa fa-info-circle"></i> You have not ordered anything yet!</h3>
            </div>
        <Footer></Footer>
    </div>
</template>

<script>
/* eslint-disable */ 
    import LogoutHeader from './LogoutHeader.vue'
    import Footer from './Footer.vue'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
import { mapGetters } from 'vuex'
import OrderHelper from './OrderHelper.vue'
    export default{
        name:'Cart',
         
        data(){
            return{
                products:[],
                cartCount:0,
                cartItems:[],
                productId:[],
                index:0,
                productList:[]
            }
        },
        computed:{
            ...mapGetters(['actionToGetProductList','getProductList'])
        },
        components:{
    LogoutHeader,
    Footer,
    OrderHelper
},
        methods:{

        },
        beforeMount: function(){
            // var cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
            // this.cartCount = cartItems.length;
            axios.get(`http://10.20.4.110:9094/order/user/${this.getUser}`)
            .then(response=>{
                //this.products=response.data;
                console.log(response);
                this.productId=response.data[0].productId 
                //console.log(this.products[0].productId,"productsssss");
                // console.log(this.products.length);
                // for(let i=0;i<this.products.length;i++){
                //     this.productId.push(this.products[i].productId)
                // }
                 console.log(this.productId);

            })
            .catch(err=>console.log(err))


            

            // this.productList=this.getProductList
            // for(let i=0;i<this.productList.data.length;i++){
            //     if(this.productId.includes(this.productList.data[i].id)){
            //         this.cartItems.push(this.productList.data[i])
            //     }
            // }

            // this.$store.dispatch('actionToGetProductList',{
            //     success: (res)=>{
            //         // console.log("respioinse",res);
            //         //this.productList = res.products
            //         this.productList= res.data;
            //         for(let i=0;i<res.data.length;i++){
            //             if(this.productId.includes(res.data[i].id)){
            //                 this.cartItems.push(res.data[i])
            //             }
            //         }

            //     }
            // })

            // axios.get(`http://10.20.4.110:8080/product`)
            // .then(response=>{
            //     console.log(response)
            //     console.log(response.data.length)
            //     for(let i=0;i<response.data.length;i++){
            //         //this.index=this.getProductList.filter((data)=>data.brand.toLowerCase().indexOf(val.toLowerCase())>-1)
            //         if(this.productId.includes(response.data[i].id)){
            //             console.log(response.data[i].id);
            //             this.cartItems.push(response.data[i])
            //         }
            //     }
            // })
            

        },
        mounted:function(){
                this.$store.dispatch('actionToGetProductList',{
                success: (res)=>{
                    // console.log("respioinse",res);
                    //this.productList = res.products
                    for(let i=0;i<res.data.length;i++){
                        if(this.productId.includes(res.data[i].id)){
                            this.productList.push(res.data[i])
                        }
                    }
                    //this.productList= res.data;
                    console.log(this.productList);
                }
            })


            // axios.get(`http://10.20.4.110:8080/product`)
            // .then(response=>{
            //     console.log(response)
            //     console.log(response.data.length)
            //     for(let i=0;i<response.data.length;i++){
            //         //this.index=this.getProductList.filter((data)=>data.brand.toLowerCase().indexOf(val.toLowerCase())>-1)
            //         if(this.productId.includes(response.data[i].id)){
            //             console.log(response.data[i].id);
            //             this.cartItems.push(response.data[i])
            //         }
            //     }
            // })
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
    margin-right: 25px;
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