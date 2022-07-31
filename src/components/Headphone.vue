<template>
    <div>
        <LogoutHeader></LogoutHeader>
        <div id="root">
            <div class="sidebar">
                <div class="side">
                    <div class="brand">
                        <h3 style="text-decoration: underline;">Brand</h3>
                        <input type="checkbox" name="checkbox" value="allensolly" v-model="checkBoxes"/>
                        <label for="checkbox">Boat</label><br>
                        <input type="checkbox" value="casio" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Oneplus</label><br>
                        <input  type="checkbox" value="fastrack" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Realme</label><br>
                        <input  type="checkbox" value="fossil" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Sony</label><br>
                        <input type="checkbox" value="sonata" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Oppo</label><br>
                        <input type="checkbox" value="titan" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">TechFire</label><br>
                        <input type="checkbox" value="rolex" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Boult</label><br>
                        <input type="checkbox" value="quartz" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Mivi</label><br>
                    </div>

                    <div class="headphonetype">
                        <h3 style="text-decoration: underline;">Type</h3>
                        <input type="checkbox" value="oval" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">In the ear</label><br>
                        <input type="checkbox" value="rectangle" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">on the ear</label><br>
                        <input type="checkbox" value="round" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">True wireless</label><br>
                        <input type="checkbox" value="tonneau" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Wireless in the ear</label><br>
                    </div>

                    <div class="strap">
                        <h3 style="text-decoration: underline;">Color</h3>
                        <input type="checkbox" value="Beige" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Beige</label><br>
                        <input type="checkbox" value="Black" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Black</label><br>
                        <input type="checkbox" value="Blue" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Blue</label><br>
                        <input type="checkbox" value="Brown" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Brown</label><br>
                        <input type="checkbox" value="Clear" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Clear</label><br>
                        <input type="checkbox" value="Gold" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Gold</label><br>

                    </div>

                    <div class="price">
                        <h3 style="text-decoration: underline;">Price</h3>
                        <input type="checkbox" name="checkbox" value="5000" v-model="checkBoxes"/>
                        <label for="checkbox">Under ₹5000</label><br>
                        <input type="checkbox" name="checkbox" value="5000to10000" v-model="checkBoxes"/>
                        <label for="checkbox">₹5000 - ₹10,000</label><br>
                        <input type="checkbox" name="checkbox" value="10000to50000" v-model="checkBoxes"/>
                        <label for="checkbox">₹10,000 - ₹50,000</label><br>
                        <input type="checkbox" name="checkbox" value="over50000" v-model="checkBoxes"/>
                        <label for="checkbox">Over ₹50,000</label><br>
                    </div>
                </div>

            </div>

            <!-- {{getProductList}} -->

            <div class="myitems">
                <div class="searchbox">
                    <!-- <input type="text" class="search-section" placeholder="search here.....">
                    <button id="buttonsearch">Search</button> -->
                    <input id="sear" v-model="searchText" type="text" name="search" placeholder="Search here...."/>
                    <!-- <button id="buttonsearch">Search</button> -->
                </div>
                <div class="flex">
                     <div class="grid">
                        <div v-for="(data, index) in productList" :key="index">
                            <div v-if="data.category==='headphone'">
                            <div class="card">
                                <single-product-vue :product="data"></single-product-vue>
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
import SingleProductVue from './SingleProduct.vue'
import LogoutHeader from './LogoutHeader.vue'
import Footer from './Footer.vue'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

/* eslint-disable */
    export default{
        name:'Mobile',
        data(){
            return{
                productList:[],
                searchText:'',
                checkBoxes:[],
                cartCount:0,
            }
        },
        computed:{
            ...mapGetters(['actionToGetProductList','getProductList'])
        },
        components:{
        SingleProductVue,
        LogoutHeader,
        Footer
},
        beforeMount:function(){
            console.log("aygdjk");
            // var cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
            // this.cartCount = cartItems.length;
            this.$store.dispatch('actionToGetProductList',{
                success: (res)=>{
                    console.log(res);
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
            checkBoxes:function(val){
                console.log(val);
                let y;
                this.productList=this.getProductList.filter((x) => {
                    for(y of val){
                        if(y==="under500" && Number(x.price)<=500){
                            return x;
                        }
                        if(y==="500to1000" && Number(x.price)>=500 && Number(x.price)<=1000){
                            return x;
                        }
                        if(y==="1000to5000" && Number(x.price)>=1000 && Number(x.price)<=5000){
                            return x;
                        }
                        if(y==="over5000" && Number(x.price)>=5000){
                            return x;
                        }
                        if(x.brand.toLowerCase().includes(y.toLowerCase())){
                            return x;
                        }
                        if(x.category.toLowerCase().includes(y.toLowerCase())){
                            return x;
                        }
                        
                    } 
                });
                if(this.productList.length==0){
                    this.productList=this.getProductList;
                }
            }
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
.headphonetype{
    margin-left: 50px;
    /* font-weight: bolder; */
    color: whitesmoke;
}
.headphonetype input,label{
    margin-left:10px;
    float: left;
}
.strap{
    margin-left: 50px;
    /* font-weight: bolder; */
    color: whitesmoke;
}
.strap input,label{
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
    border-right: 3px solid whitesmoke;
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
    .brand,.headphonetype,.strap,.price {
        margin-left: -2px;
    }
}
</style>