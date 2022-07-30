<template>
  <div class="tv-component">
    <Header></Header>
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
            <div class="myitems">
                <div class="flex">
                     <div class="grid">
                        <div v-for="(data, index) in productList" :key="index" :class="['card']">
                            <single-product-vue :product="data"></single-product-vue>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterVue></FooterVue>
  </div>
</template>

<script>
import Header from './Header.vue'
import FooterVue from './Footer.vue'
import SingleProductVue from './SingleProduct.vue'
/* eslint-disable */
export default {
  name: 'Mobile',
  data () {
    return {
      msg: 'This is Mobile Component'
    }
  },
  components: {
    Header,
    FooterVue,
    SingleProductVue
  }
}
</script>

<style scoped>
body{
  margin-left: 0px;
}
#root{
    display: flex;
}
.brand{
    margin-left: 50px;
    font-weight: bold;
    color: whitesmoke;
}
.brand input,label{
    margin-left:10px;
    float: left;
}
.dial{
    margin-left: 50px;
    font-weight: bolder;
    color: whitesmoke;
}
.dial input,label{
    margin-left:10px;
    float: left;
}
.strap{
    margin-left: 50px;
    font-weight: bold;
    color: whitesmoke;
}
.strap input,label{
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
    margin-top: 45px;
    border-right: 3px solid whitesmoke;
    padding-left: 0px;
    background-color: #1F305E;
}
.myitems{
    margin-left: 100px;
    width: 80vw;
    max-height: 700px;
    padding: 10px;
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
</style>
