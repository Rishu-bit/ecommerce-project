<template>
    <div>
        <HeaderAfterLogin></HeaderAfterLogin>
        <!-- <HeaderAdd></HeaderAdd> -->
        <!-- <div class="back"> -->
        <div class="addproduct">
            <br />
            <h1>Edit Product</h1><br>
            <div class="form">
                <form>
                    <label for="merchantId">MerchantId:</label>
                    <br />
                    <input type="number" class="box" id="common-id" name="merchantId" v-model="merch.merchantId"><br>
                    <label for="category">Category:</label><br />
                    <select class="box" id="category" name="category" v-model="merch.category">
                        <option value="mobile">Mobile</option>
                        <option value="laptop">Laptop</option>
                        <option value="watches">Watches</option>
                        <option value="headphones">Headphones</option>
                        <option value="television">Television</option>
                    </select><br>
                    <label for="brand">Brand:</label><br />
                    <input type="text" class="box" id="common-id" name="brand" value=" " v-model="merch.brand"><br />
                    <label for="price">Price:</label><br />
                    <input type="number" class="box" id="common-id" name="price" value="" v-model="merch.price"><br />
                    <label for="stock">Stock:</label><br />
                    <input type="number" class="box" id="common-id" name="stock" value=" " v-model="merch.stock"><br>
                    <label for="camera">Camera:</label><br />
                    <input type="number" class="box" id="common-id" name="camera" value=" " v-model="merch.camera"><br>
                    <label for="ram">Ram:</label><br />
                    <input type="number" class="box" id="common-id" name="ram" value=" " v-model="merch.ram"><br>
                    <label for="processor">Processor:</label><br />
                    <input type="text" class="box" id="common-id" name="processor" value=" " v-model="merch.processor"><br>
                    <label for="dialShape">DialShape:</label><br />
                    <input type="text" class="box" id="common-id" name="dialShape" value=" " v-model="merch.dialShape"><br>
                    <label for="starpMaterial">StarpMaterial:</label><br />
                    <input type="text" class="box" id="common-id" name="starpMaterial" value=" " v-model="merch.starpMaterial"><br>
                    <label for="headphoneType">Headphone Type:</label><br />
                    <input type="text" class="box" id="common-id" name="headphoneType" value=" " v-model="merch.headphoneType"><br>
                    <label for="color">Color:</label><br />
                    <input type="text" class="box" id="common-id" name="color" value=" " v-model="merch.color"><br>
                    <label for="screenType">Screen Type:</label><br />
                    <input type="text" class="box" id="common-id" name="screenType" value=" " v-model="merch.screenType"><br>
                    <label for="screenSize">Screen Size:</label><br />
                    <input type="number" class="box" id="common-id" name="screenSize" value=" " v-model="merch.screenSize"><br>
                    <label for="image" class="image-url">Image:</label><br />
                    <input type="text" class="box" id="image" name="image" value=" " v-model="merch.image"><br><br>
                    <button class="button" type="button" onclick="alert('Your product is Added')"
                    @click="addToAPI">Submit</button>
                </form>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
/* eslint-disable */ 
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Header from './Header.vue'
import Footer from './Footer.vue'
import HeaderAfterLogin from './HeaderAfterLogin.vue'
Vue.use(VueAxios, axios)
export default {
    name: 'AddNewProduct',
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
                camera: '',
                ram: '',
                processor: '',
                dialShape: '',
                starpMaterial: '',
                headphoneType: '',
                color: '',
                screenType: '',
                screenSize: '',
                image: ''
            }
        };
    },
    methods: {
        addToAPI() {
            let newmerch = {
                merchantId: this.merch.merchantId,
                category: this.merch.category,
                brand: this.merch.brand,
                price: this.merch.price,
                stock: this.merch.stock,
                camera: this.merch.camera,
                ram: this.merch.ram,
                processor: this.merch.processor,
                dialShape: this.merch.dialShape,
                starpMaterial: this.merch.starpMaterial,
                headphoneType: this.merch.headphoneType,
                color: this.merch.color,
                screenType: this.merch.screenType,
                screenSize: this.merch.screenSize,
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

    components: { Header, Footer, HeaderAfterLogin }

}
</script>

<style>
.addproduct {
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
#category {
    height: 30px;
    width: 358px;
}
.form {
    text-align: left;
    padding-left: 250px;
}
#form:label {
    margin-left: 30px;
    width: 150px;
    text-align: right;
}

.box {
    /* display: block; */
    width: 350px;
    height: 20px;
    font-size: large;
}
#navigation-icon {
    /* padding: 10px 10px 20px; */
    margin-left: 200px;
    margin-top: -50px;
    cursor: pointer;
}
i {
    font-size: 2rem;
}
#merchantid {
    width: max-content;
}
.button {
    width: 100px;
    background-color: #1F305E;
    color: white;
    height: 30px;
    margin-left: 85px;
    margin-bottom: 13px;
    border-radius: 20px;
}
.button:hover {
    box-shadow: 0 14px 28px #1F305E
        0 10px 10px rgba(0, 0, 0, 0.22);
    border: 1px solid black;
    border-radius: 3px;
}
.common-id {
    width: 100%;
}
.image-url {
    height: 32px;
    width: 300px;
}
/* .label{
    display: inline-block;
        width: 150px;
        text-align: right;
} */
/* .back{
    background-image: ;
} */
@media screen and (max-width: 1189px) {
    .form {
        text-align: left;
        padding-left: 176px;
    }
    .box {
        width: 244px;
        height: 20px;
    }
    #category {
        width: 252px;
    }
    h1{
        padding-right: 38px;
    }
    .addproduct {
        width: 85%;
        margin-top: 61px;
    }
}
@media screen and (max-width: 694px) {
    .form {
        text-align: left;
        padding-left: 136px;
    }
    .box {
        width: 244px;
        height: 20px;
    }
    #category {
        width: 252px;
    }
    h1{
        padding-right: 38px;
    }
    .addproduct {
        width: 85%;
        margin-top: 61px;
    }
}
@media screen and (max-width: 490px) {
    .form {
        text-align: left;
        padding-left: 57px;
    }
    .box {
        width: 244px;
        height: 20px;
    }
    #category {
        width: 252px;
    }
    h1{
        padding-right: 38px;
    }
    .addproduct {
        width: 85%;
        margin-top: 61px;
    }
}
@media screen and (max-width: 414px) {
    .form {
        text-align: left;
        padding-left: 19px;
    }
    .box {
        width: 244px;
        height: 20px;
    }
    #category {
        width: 252px;
    }
    h1{
        padding-right: 38px;
    }
    .addproduct {
        width: 85%;
        margin-top: 61px;
    }
}
@media screen and (max-width: 300px) {
    .form {
        text-align: left;
        padding-left: 0px;
    }
    .box {
        width: 212px;
        height: 20px;
    }
    #category {
        width: 220px;
    }
    h1{
        font-size: 25px;
        padding-right: 38px;
    }
    .addproduct {
        width: 85%;
        margin-top: 61px;
    }
}
</style>