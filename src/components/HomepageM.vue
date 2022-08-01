<template>
    <div>
        <HeaderM></HeaderM>
        <input class="searchin" v-model="searchText" type="text" name="search" placeholder="Search here...."/>

        <!-- <h1>{{merchantId}}</h1> -->
        <div id="root">
            <div class="myitems">
                <div class="flex">
                     <div class="grid">
                        <div v-for="(data, index) in productList" :key="index">
                              <!-- <h1>{{data}}</h1> -->
                              <!-- {{data.merchantId}} -->
                            <div v-if="data.merchantId == merchantId">
                              <!-- <p>{{this.merchantId}}</p> -->
                            <div class="card">
                                <SingleProductM :product="data"></SingleProductM>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <Footer></Footer>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
// import SingleProductVue from './SingleProduct.vue'
import HeaderM from './HeaderM.vue'
import Footer from './Footer.vue'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import SingleProductM from './SingleProductM.vue'
Vue.use(VueAxios,axios)
/* eslint-disable */
    export default{
        name:'Mobile',
        data(){
            return{
                productList:[],
                searchText:'',
                checkBoxes:[],
                cartCount:0,
                merchantId:this.getMerchant
            }
        },
        computed:{
            ...mapGetters(['actionToGetProductList','getProductList','getMerchant'])
        },
        components:{
    // SingleProductVue,
    HeaderM,
    Footer,
    SingleProductM
},
        beforeMount:function(){
            console.log("aygdjk");
            // var cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
            // this.cartCount = cartItems.length;
            this.merchantId=this.getMerchant
            console.log(this.merchantId,"merchantid");
            this.$store.dispatch('actionToGetProductList',{
                success: (res)=>{
                    // console.log("respioinse",res);
                    //this.productList = res.products
                    this.productList= res.data;
                }
            })
        },
        methods:{

        },
        watch:{
            searchText:function(val){
                //this.productList=this.getProductList.filter((data)=>data.brand.toLowerCase().indexOf(val.toLowerCase())>-1)
                console.log(val,"search");
                axios.get('http://10.20.4.166:8081/findBySearch/'+val)
                .then((res)=>{
                    this.productList=res.data
                    // console.log("hello",res)
                })
                .catch(err=>console.log(err))
            },
        }
    }
</script>
<style>
body{
  margin-left: 0px;
}
#root{
    display: flex;
    /* border: 1px solid black; */
}
.brand{
    margin-left: 50px;
    /* font-weight: bold; */
    color: whitesmoke;
    
}
.brand input,label{
    margin-left:10px;
    float: left;
}
.camera{
    margin-left: 50px;
    /* font-weight: bolder; */
    color: whitesmoke;
}
.camera input,label{
    margin-left:10px;
    float: left;
}
.ram{
    margin-left: 50px;
    /* font-weight: bolder; */
    color: whitesmoke;
}
.ram input,label{
    margin-left:10px;
    float: left;
}
.price{
    margin-left: 50px;
    /* font-weight: bolder; */
    color: whitesmoke;
}
.price input,label{
    margin-left:10px;
    float: left;
}
.side{
  margin-left: 0px !important;
}
.sidebar{
    overflow: scroll;
    width: 20vw;
    height: 1000px;
    font-size: large; 
    left: 0px !important;
    margin-left: 0px !important;
    margin-top: -9px;
    /* border-right: 3px solid whitesmoke; */
    padding-left: 0px;
    background-color: #1F305E;
}
.myitems{
    margin-left: 100px;
    width: 80vw;
    max-height: 700px;
    padding: 10px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
}
.flex{
    margin-left: 50px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    justify-content: center;
    /* margin-bottom: 600px !important; */
}
.grid{
    margin-top: 60px;
    padding: 18px;
    display: flex;
    flex-wrap: wrap;
    height: 863px;
    overflow: scroll;
    border: 1px solid black;
    padding-right: 10px;
    padding-bottom: 36px;
    margin-left: -135px;
    padding-left: 60px;
}
#image{
    height: 200px;
    width: 167px;
}
.card{
    border: 1px solid black;
    padding: 10px; 
    margin: 12px;
    margin-left: 30px;  
}
.searchbox {
    height: 50px;
    width: 100%;
    margin-top: 10px;
}
#sear {
    width: 600px;
    margin-left: 45px;
    margin-right: -4px;
    color: black;
    height: 25px;
    padding-top: 4px;
    border: 1px solid black;
    border-radius: 5px;
  }
#buttonsearch {
    height: 29px;
    padding-bottom: 4px;
    padding-top: 6px;
}
.searchin {
    color: black;
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
@media screen and (max-width: 960px){
  .searchin{
  margin-left: -278px;
  }
}
@media screen and (max-width: 1328px){
    .grid {
        padding-left: 28px;
    }
}
@media screen and (max-width: 1289px){
    .grid {
        width: 87%;
    }
    #sear {
        margin-left: -73px;
    }
}
@media screen and (max-width: 1125px){
    .grid {
        padding-left: 70px;
        width: 100%;
    }
}
@media screen and (max-width: 1005px){
    .grid {
        padding-left: 59px;
        width: 121%;
    }
    #sear {
        width: 468px;
    }
}
@media screen and (max-width: 924px){
    .grid {
        padding-left: 0px;
    }
}
@media screen and (max-width: 1000px){
    .brand,.camera,.ram,.price {
        margin-left: -2px;
    }
}
@media screen and (max-width: 863px){

}
</style>