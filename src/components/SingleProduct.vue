<template>
    <div class="singleProduct">
        <div>
            <p @click="passToDetails">
                <img id="image" :src="[product.thumbnail]" :alt="[product.brand]"/>

            </p>
            <div class="offerdiv">
                <button class="offer">{{Math.ceil(product.discountPercentage)}} % offer</button>&nbsp; &nbsp;
                <button class="add_to_cart" @click="addToCartHandler(product.id)"><i class="fa fa-shopping-cart"></i>
                    <span class="cartText">{{ isAddToCart ? 'Add to Cart' : 'Remove Cart' }}</span></button>
            </div>
            <div class="title">
                <p style="font-weight: bolder;">{{ product.title }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import ProductDetailsVue from './ProductDetails.vue'
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

            addToCart: [],
            isAddToCart: true,
        }
    },
    methods: {
        addToCartHandler(val) {
            var cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
            if (this.isAddToCart) {
                cartItems.push(this.product);
                localStorage.setItem("cartItems", JSON.stringify(cartItems));
                console.log('addtocart')
            }
            else {
                cartItems = cartItems.filter(element => element.id !== this.product.id);
                localStorage.setItem("cartItems", JSON.stringify(cartItems));
                console.log('removefrom cart');
            }
            this.isAddToCart = !this.isAddToCart
        },
        passToDetails() {
             this.$router.push('/products/'+this.product.id)
            
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
    .offer{
        background-color: rgb(189, 53, 76);
    }
    .add_to_cart{
        background-color: rgb(189, 53, 76);
    }

</style>