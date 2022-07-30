<template>
  <div class="mobile-component">
    <Header></Header>
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
.ram{
    margin-left: 50px;
    font-weight: bolder;
    color: whitesmoke;
}
.ram input,label{
    margin-left:10px;
    float: left;
}
.processor{
    margin-left: 50px;
    font-weight: bolder;
    color: whitesmoke;
}
.processor input,label{
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

