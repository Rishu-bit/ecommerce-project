<template>
  <div class="mobile-component">
    <Header></Header>
    <div id="root">
            <div class="sidebar">
                <div class="side">
                    <div class="brand">
                        <h3 style="text-decoration: underline;">Brand</h3>
                        <input type="checkbox" name="checkbox" value="allensolly" v-model="checkBoxes"/>
                        <label for="checkbox">Boat</label><br>
                        <input type="checkbox" value="casio" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Oneplus</label><br>
                        <input  type="checkbox" value="fastrack" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Realme</label><br>
                        <input  type="checkbox" value="fossil" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Sony</label><br>
                        <input type="checkbox" value="sonata" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Oppo</label><br>
                        <input type="checkbox" value="titan" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">TechFire</label><br>
                        <input type="checkbox" value="rolex" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Boult</label><br>
                        <input type="checkbox" value="quartz" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Mivi</label><br>
                    </div>

                    <div class="dial">
                        <h3 style="text-decoration: underline;">Headphone type</h3>
                        <input type="checkbox" value="oval" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">In the ear</label><br>
                        <input type="checkbox" value="rectangle" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">on the ear</label><br>
                        <input type="checkbox" value="round" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">True wireless</label><br>
                        <input type="checkbox" value="tonneau" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Wireless in the ear</label><br>
                    </div>

                    <div class="strap">
                        <h3 style="text-decoration: underline;">Color</h3>
                        <input type="checkbox" value="Beige" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Beige</label><br>
                        <input type="checkbox" value="Black" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Black</label><br>
                        <input type="checkbox" value="Blue" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Blue</label><br>
                        <input type="checkbox" value="Brown" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Brown</label><br>
                        <input type="checkbox" value="Clear" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Clear</label><br>
                        <input type="checkbox" value="Gold" name="checkbox" v-model="checkBoxes"/>
                        <label for="checkbox">Gold</label><br>

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
    /* font-weight: bold; */
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
