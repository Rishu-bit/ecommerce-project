<template>
    <div>
        <body>
        <header>
            <nav>
                <router-link to="/" style="color: white;font-size:x-large;font-weight: bolder;margin-right: 25px;">Home</router-link>
                <router-link to="/product" style="color: white;font-size:x-large;font-weight: bolder;margin-right: 25px;">Product</router-link>
                <router-link to="/cart" style="color: white;font-size:x-large;font-weight: bolder;margin-right: 25px;">Cart<sup class="cartcount">{{cartCount}}</sup></router-link>
            </nav>
        </header>
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
                    </div>

                    <div class="category">
                        <h3 style="text-decoration: underline;">Category</h3>
                        <input type="checkbox" value="smartphones" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Smart Phones</label><br>
                        <input type="checkbox" value="laptops" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Laptops</label><br>
                        <input type="checkbox" value="fragrances" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Fragnances</label><br>
                        <input type="checkbox" value="skincare" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Skincare</label><br>
                        <input type="checkbox" value="groceries" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Groceries</label><br>
                        <input type="checkbox" value="home-decoration" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Home decoration</label><br>

                    </div>
                    <div class="price">
                        <h3 style="text-decoration: underline;">Price</h3>
                        <input type="checkbox" name="checkbox" value="under500" v-model="checkBoxes"/>
                        <label for="checkbox">Under ₹500</label><br>
                        <input type="checkbox" name="checkbox" value="500to1000" v-model="checkBoxes"/>
                        <label for="checkbox">₹500 - ₹1,000</label><br>
                        <input type="checkbox" name="checkbox" value="1000to5000" v-model="checkBoxes"/>
                        <label for="checkbox">₹1,000 - ₹5,000</label><br>
                        <input type="checkbox" name="checkbox" value="over5000" v-model="checkBoxes"/>
                        <label for="checkbox">Over ₹5,0000</label><br>
            
                    </div>
                </div>

            </div>

            <div class="myitems">
                <div class="searchbox">
                    <input id="sear" v-model="searchText" type="search" name="search" placeholder="Search here"/>
                    <button id="button">Search</button>
                </div>
                <div class="flex">
                     <div class="grid">
                        <div v-for="(data, index) in productList" :key="index" :class="['card']">
                            <single-product-vue :product="data"></single-product-vue>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </body>
    <footer>
        Have a nice day!😀
    </footer>
    </div>
</template>


<script>
import {mapGetters} from 'vuex';
import SingleProductVue from './SingleProduct.vue';
    export default{
        name:'Product',
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
            SingleProductVue
        },
        beforeMount:function(){
            var cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
            this.cartCount = cartItems.length;
            this.$store.dispatch('actionToGetProductList',{
                success: (res)=>{
                    //this.productList = res.products
                    this.productList= res.products;
                }
            })
        },
        methods:{

        },
        watch:{
            searchText:function(val){
                this.productList=this.getProductList.filter((data)=>data.title.toLowerCase().indexOf(val.toLowerCase())>-1)
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

    header{
    top: 0px;
    z-index: 1;
    position: fixed;
    background-color: rgb(0, 119, 255);
    padding: 0px 2px 22px 12px ;
    width: 100%;
    text-align: end;
    font-weight: bold;
}
.logo{
    float: left;
    width: 100px;
    height: 80px;
    margin-top: 0px !important;
}
body{
    
    margin: 0;
    height: 800px;
    overflow:auto;

    /* background: url("https://i0.wp.com/www.csscodelab.com/wp-content/uploads/2020/02/pure-html-css-hexagon-gradient-background.png?fit=981%2C651&ssl=1"); */
}
nav{
    justify-content: center;
    align-items: center;
    margin-top: 6px;
}
a{
    justify-content: center;
    text-align: center;
    text-decoration: solid;
    font-size:x-large;
    margin-right: 25px;
    margin-top: 10px;
}
.cartcount{
    background-color: red;
    padding: 2px 6px;
    border-radius:49px ;
}
#root{
    display: flex;
}
.brand{
    margin-left: 50px;
    font-weight: bolder;
    color: whitesmoke;
    
}
.brand input,label{
    margin-left:10px;
    float: left;
}
.category{
    margin-left: 50px;
    font-weight: bolder;
    color: whitesmoke;
}
.category input,label{
    margin-left:10px;
    float: left;
}
.price{
    margin-left: 50px;
    font-weight: bolder;
    color: whitesmoke;
}
.price input,label{
    margin-left:10px;
    float: left;
}

.sidebar{
    overflow: scroll;
    width: 20vw;
    height: 1000px;
    font-size: larger;
    margin-left: 0px;
    margin-top: 0px;
    border-right: 3px solid whitesmoke;
    /* position: fixed; */
    background-color:rgb(50, 104, 152);
}
.myitems{
    margin-left: 100px;
    width: 80vw;
    max-height: 700px;
    padding: 10px;
    /* margin-bottom: 1000px ; */
}
#sear{
    margin-top: 40px;
    margin-left:2vw;
    padding: 11px;
    width: 40vw;
    font-weight: bold;
}

#button{
    padding: 10px 20px;
    font-weight: bold;
    border-radius: 25px;
    margin-right: 20px;
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
       height: 500px;
    overflow: scroll;
}
#image{
    height: 290px;
    width: 200px;
}
.card{
    padding: 10px;
    margin: 12px;
}
footer{
    border-radius: 15px;
    position: absolute;
    padding: 15px;
    position:fixed;
    background-color:rgb(0, 119, 255);
    bottom: 0;
    width: 100%;
    text-align: center;
    left: 0;
    right: 0;
}
</style>