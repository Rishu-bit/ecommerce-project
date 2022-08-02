<template>
<div>

<HeaderAfterLogin></HeaderAfterLogin>
<div class="LaptopCategory">
            <br />
            <h1>Laptop</h1><br>
            <div class="form">
                <form>    
                    <label for="merchantId">MerchantId:</label>
                    <br />
                    <input type="number" class="box" id="common-id" name="merchantId" v-model="merch.merchantId"><br>                                
                    <label for="brand">Brand:</label><br />
                    <select class="box" id="brand" name="brand" v-model="merch.brand">
                        <option value="lenova">Lenova</option>
                        <option value="dell">Dell</option>
                        <option value="hp">HP</option>
                        <option value="mi">Mi</option>
                        <option value="apple">Apple</option>
                        <option value="asus">asus</option>
                        <option value="acer">acer</option>
                        <option value="razer">Razer</option>
                    </select><br>
                    <label for="category">Category:</label><br />
                    <input type="text" id="common-id" name="category"  placeholder="Laptop" value="Laptop" v-model="merch.category"><br />                 
                    <label for="price">Price:</label><br />
                    <input type="number" class="box" id="common-id" name="price" value="" v-model="merch.price"><br />
                    <label for="stock">Stock:</label><br />
                    <input type="number" class="box" id="common-id" name="stock" value=" " v-model="merch.stock"><br>
                    <label for="processor">Processor:</label><br />
                    <input type="number" class="box" id="common-id" name="processor" value=" " v-model="merch.processor"><br>
                    <label for="ram">Ram:</label><br />
                    <input type="number" class="box" id="common-id" name="ram" value=" " v-model="merch.ram"><br>                    
                    <label for="image" class="image-url">Image:</label><br />
                    <input type="text" class="box" id="image" name="image" value=" " v-model="merch.image"><br><br>
                    <button class="button" type="button"  @click="addToAPI"
                        >Submit</button>
                </form>
            </div>
        </div>
       <Footer></Footer>
</div>        
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import HeaderAfterLogin from './HeaderAfterLogin.vue';
import Footer from './Footer.vue';
Vue.use(VueAxios, axios)
export default{
     name:'LaptopCategory',
     data: () => {
        return {
            posts: {

                name: "",
                emailId: "",
                password: "",
                mobileNumber: "",


            },
            merch:
            {
                merchantId: '',
                category: '',
                brand: '',
                price: '',
                stock: '',
                ram: '',
                processor: '',
                image: ''
            }
        };
    },
     methods:{
            homeMpage(){
                this.$router.push('/homepagem')
            },
             addToAPI() {
            let newmerch = {
                merchantId: this.merch.merchantId,
                category: this.merch.category,
                brand: this.merch.brand,
                price: this.merch.price,
                stock: this.merch.stock,
                ram: this.merch.ram,
                processor: this.merch.processor,                
                image: this.merch.image
            }
            console.log(newmerch);
            axios.post('http://10.20.4.110:8080/product',newmerch)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);

                    
                });
        }
            },
    components: { HeaderAfterLogin, Footer }
}
</script>

<style>
.LaptopCategory {
    margin-top: 110px;
    border: 100px;

    border-color: black;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
                0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: scroll;
    align-self: center;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
    /* margin-top: auto; */
    margin-right: auto;
    margin-bottom: auto;
    margin-left: auto;
    width: 60%;
}
</style>