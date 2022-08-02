<template>
    <div>
        <Header></Header>
        <div style="margin-top:100px" class="image-class">
            <img :src="[cartItems.image]" alt="[cartItems.title]" width="350px" height="350px"/>
        </div>
        <div class="desc">
            <div v-if="cartItems.category==='mobile'">
            <h2 style="font-weight: bolder;"> {{cartItems.brand}}</h2>
            <h3 style="font-weight: bolder;">Category: {{cartItems.category}}</h3>
            <h3 style="font-weight: bolder;">Camera: {{cartItems.camera}}MP</h3>
            <h3 style="font-weight: bolder;">RAM: {{cartItems.ram}}GB</h3>
            <h3 style="font-weight: bolder;">Price: Rs {{cartItems.price}}</h3>
            </div>
            <div v-if="cartItems.category==='laptop'">
            <h2 style="font-weight: bolder;"> {{cartItems.brand}}</h2>
            <h3 style="font-weight: bolder;">Category: {{cartItems.category}}</h3>
            <h3 style="font-weight: bolder;">RAM: {{cartItems.ram}}GB</h3>
            <h3 style="font-weight: bolder;">Processor: {{cartItems.processor}}</h3>
            <h3 style="font-weight: bolder;">Price: Rs {{cartItems.price}}</h3>
            </div>
            <div v-if="cartItems.category==='watch'">
            <h2 style="font-weight: bolder;"> {{cartItems.brand}}</h2>
            <h3 style="font-weight: bolder;">Category: {{cartItems.category}}</h3>
            <h3 style="font-weight: bolder;">Dial Shape: {{cartItems.dialShape}}</h3>
            <h3 style="font-weight: bolder;">StrapMaterial: {{cartItems.strapMaterial}}</h3>
            <h3 style="font-weight: bolder;">Price: Rs {{cartItems.price}}</h3>
            </div>
            <div v-if="cartItems.category==='headphone'">
            <h2 style="font-weight: bolder;"> {{cartItems.brand}}</h2>
            <h3 style="font-weight: bolder;">Category: {{cartItems.category}}</h3>
            <h3 style="font-weight: bolder;">Type: {{cartItems.headphoneType}}</h3>
            <h3 style="font-weight: bolder;">Color: {{cartItems.color}}</h3>
            <h3 style="font-weight: bolder;">Price: Rs {{cartItems.price}}</h3>
            </div>
            <div v-if="cartItems.category==='television'">
            <h2 style="font-weight: bolder;"> {{cartItems.brand}}</h2>
            <h3 style="font-weight: bolder;">Category: {{cartItems.category}}</h3>
            <h3 style="font-weight: bolder;">Screen Size: {{cartItems.screenSize}}inch</h3>
            <h3 style="font-weight: bolder;">Screen Type: {{cartItems.screenType}}</h3>
            <h3 style="font-weight: bolder;">Price: Rs {{cartItems.price}}</h3>
            </div>
            <div v-if="cartItems.length!=0"><button class="buynow" @click="pushtoorderdb"><i class="fa fa-shopping-cart"></i> Buy Now </button> </div>
            
            <!-- <h3 style="font-weight: bolder;">Rating: {{cartItems.rating}}</h3> -->
        </div>
    </div>
</template>

<script>
import SingleProductVue from './SingleProduct.vue'
import {mapGetters} from 'vuex'
import Header from './Header.vue'
/* eslint-disable */
  export default{
        name:'ProductDetails',
        data(){
            return{
                id:0,
                cartItems:[],

            }
        },
        methods:{

        },
        components:{
    SingleProductVue,
    Header
},
        computed:{
            ...mapGetters(['getProductList','actionToGetProductList'])
        },
        created(){
            this.id=Number(this.$route.params.id)
        },
        methods:{
            // orderpage(){
            //     this.$router.push('/order')
            // },
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
                .then(response)
                .catch(err=>console.log(err))
                // window.location.reload()


                axios.delete(`http://10.20.4.110:9090/cart/user/${this.posts.userId}`)
                .catch(err=>console.log(err))
                // window.location.reload()
            }
        },
        beforeMount : function () {
            this.cartItems=this.getProductList.filter((ele)=>ele.id===this.id)[0];
            console.log(this.cartItems);

        }

    }
</script>

<style>
    .main-div {
        border: 1px solid black;
        width: 50%;
        margin-left: 350px;
    }
    .image-class {
    margin-left: 100px;
    width: 350px;
    height: 350px;
    border: 1px solid black;    
    }
    .navbar {
        border: 1px solid black;
        background-color: #1F305E;
        color: white;
    }
    .desc {
        border: 1px solid black;
    margin-left: 500px;
    margin-top: -300px;
    width: 500px;
    }
</style>
