<template>
    <div>
        <LogoutHeader></LogoutHeader>
        <div id="root">
            <div class="sidebar">
                <div class="side">
                    <div class="brand">
                        <h3 style="text-decoration: underline;">Brand</h3>
                        <input type="checkbox" name="checkbox" value="samsung" v-model="checkBoxes"/>
                        <label for="checkbox">Samsung</label><br>
                        <input type="checkbox" value="apple" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Apple</label><br>
                        <input  type="checkbox" value="redmi" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Redmi</label><br>
                        <input  type="checkbox" value="oppo" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Oppo</label><br>
                        <input type="checkbox" value="fog" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Fog</label><br>
                        <input type="checkbox" value="huawei" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Huawei</label><br>
                        <input type="checkbox" value="infinix" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Infinix</label><br>
                        <input type="checkbox" value="oneplus" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">One plus</label><br>
                    </div>
                        <div class="strap">
                        <h3 style="text-decoration: underline;">Screen Size</h3>
                        <input type="checkbox" value="fabric" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">24 inch Below</label><br>
                        <input type="checkbox" value="gold" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">28-32 inch</label><br>
                        <input type="checkbox" value="jewel" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">39-43 inch</label><br>
                        <input type="checkbox" value="metal" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">48-55 inch</label><br>
                        <input type="checkbox" value="plastic" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">60 inch above</label><br>
                    </div>
                    <div class="dial">
                        <h3 style="text-decoration: underline;">Screen Type</h3>
                        <input type="checkbox" value="LCD" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">LCD</label><br>
                        <input type="checkbox" value="LED" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">LED</label><br>
                        <input type="checkbox" value="OLED" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">OLED</label><br>
                        <input type="checkbox" value="QLED" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">QLED</label><br>
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
                            <div v-if="data.category==='television'">
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
                this.productList=this.getProductList.filter((data)=>data.brand.toLowerCase().indexOf(val.toLowerCase())>-1)
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
.dial{
    margin-left: 50px;
    /* font-weight: bolder; */
    color: whitesmoke;
}
.dial input,label{
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
    margin-top: -4px;
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
    .brand,.dial,.strap,.price {
        margin-left: -2px;
    }
}
</style>