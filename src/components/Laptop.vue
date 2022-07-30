<template>
    <div>
        <LogoutHeader></LogoutHeader>
        <div id="root">
            <div class="sidebar">
                <div class="side">
                    <div class="brand">
                        <h3 style="text-decoration: underline;">Brand</h3>
                        <input type="checkbox" name="checkbox" value="lenovo" v-model="checkBoxes"/>
                        <label for="checkbox">Lenovo</label><br>
                        <input type="checkbox" value="dell" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Dell</label><br>
                        <input  type="checkbox" value="hp" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">HP</label><br>
                        <input  type="checkbox" value="mi" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Mi</label><br>
                        <input type="checkbox" value="apple" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Apple</label><br>
                        <input type="checkbox" value="asus" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Asus</label><br>
                        <input type="checkbox" value="acer" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Acer</label><br>
                        <input type="checkbox" value="razer" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Razer</label><br>
                    </div>

                    <div class="ram">
                        <h3 style="text-decoration: underline;">RAM Capacity</h3>
                        <input type="checkbox" value="2" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">2GB</label><br>
                        <input type="checkbox" value="4" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">4GB</label><br>
                        <input type="checkbox" value="8" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">8GB</label><br>
                        <input type="checkbox" value="12" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">12GB</label><br>
                        <input type="checkbox" value="16" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">16GB</label><br>
                        <input type="checkbox" value="32" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">32GB</label><br>

                    </div>

                    <div class="processor">
                        <h3 style="text-decoration: underline;">Processor</h3>
                        <input type="checkbox" value="corei5" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Core i5</label><br>
                        <input type="checkbox" value="corei3" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Core i3</label><br>
                        <input type="checkbox" value="corei7" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Core i7</label><br>
                        <input type="checkbox" value="ryzen7quadcore" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Ryzen 7 Quad Core</label><br>
                        <input type="checkbox" value="ryzen5quadcore" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Ryzen 5 Quad Core</label><br>
                        <input type="checkbox" value="corei9" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Core i9</label><br>

                    </div>

                    <div class="price">
                        <h3 style="text-decoration: underline;">Price</h3>
                        <input type="checkbox" name="checkbox" value="40000" v-model="checkBoxes"/>
                        <label for="checkbox">Under ₹40,000</label><br>
                        <input type="checkbox" name="checkbox" value="40000to60000" v-model="checkBoxes"/>
                        <label for="checkbox">₹40,000 - ₹60,000</label><br>
                        <input type="checkbox" name="checkbox" value="60000to80000" v-model="checkBoxes"/>
                        <label for="checkbox">₹60,000 - ₹80,000</label><br>
                        <input type="checkbox" name="checkbox" value="over80000" v-model="checkBoxes"/>
                        <label for="checkbox">Over ₹80,000</label><br>
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
                            <div v-if="data.category==='laptop'">
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
.processor{
    margin-left: 50px;
    /* font-weight: bolder; */
    color: whitesmoke;
}
.processor input,label{
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
</style>