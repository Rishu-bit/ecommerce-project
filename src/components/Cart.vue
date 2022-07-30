<template>
    <div>
        <LogoutHeader></LogoutHeader>
            <h1>Welcome to cart</h1>
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
        <Footer></Footer>
    </div>
</template>

<script>
/* eslint-disable */ 
    import CartHelperVue from './CartHelper.vue'
    import LogoutHeader from './LogoutHeader.vue'
    import Footer from './Footer.vue'

    export default{
        name:'Cart',
         
        data(){
            return{
                cartItems:[],
                cartCount:0
            }
        },
        components:{
            CartHelperVue,
            LogoutHeader,
            Footer
        },
        methods:{

        },
        beforeMount: function(){
            var cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
            this.cartCount = cartItems.length;
        },
        mounted:function(){
            var cartItems=JSON.parse(localStorage.getItem("cartItems")||"[]")
            this.cartItems=cartItems
        }
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