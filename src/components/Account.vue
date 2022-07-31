<template>
  <div class="account">
    <HeaderM></HeaderM>
    <div class="info">
      <div class="sidebar">
        <div @click="aboutmerchant">About</div>
        <div @click="contactus">Contact Us</div>
        <div @click="signout">Log Out</div>
      </div>
      <div class="rightcontainer">
        <div v-if="showRight === 'About'" class="about">
        <div class="content">
          <h2><b>About</b></h2>
          <p>Name: {{this.name}}</p>
          <p>Email Id: {{this.emailId}}</p>
          <p>Phone Number: {{this.mobileNumber}}</p>
          <p>Merchant Id: {{this.merchantId}}</p>
        </div>
        </div>
        <div v-if="showRight === 'Contact'" class="about">
        <div class="content">
          <h2><b>Contact Us</b></h2>
          <p><b>Write to us : </b>Merchant@Electrobay.com</p>
          <p><b>Helpline : </b>1234567890</p>
        </div>
        </div>
        <div v-if="showRight === 'Sign Out'" class="about">
        <div class="content">
          <h2><b>Do you want to logout?</b></h2>
          <button @click="logout">Yes</button>
          <button @click="aboutmerchant">No</button>
        </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import HeaderM from './HeaderM.vue'
import Footer from './Footer.vue'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
export default {
  name: 'Account',
  data () {
    return {
      showRight: 'About',
      msg: 'Welcome to HomePage',
      name:'',
      emailId:'',
      mobileNumber:'',
      merchantId:0  
    }
  },
  methods: {
    aboutmerchant () {
      this.showRight = 'About'
    },
    // merchantproducts () {
    //   this.showRight = 'Product'
    // },
    contactus () {
      this.showRight = 'Contact'
    },
    signout () {
      this.showRight = 'Sign Out'
    },
    logout () {
      this.$router.push('/mlogin')
    }
  },
  computed:{
            ...mapGetters(['getMerchant'])
        },
  beforeMount:function(){
        this.merchantId=this.getMerchant
        axios.get(`http://10.20.4.157:9090/merchant/${this.merchantId}`)
        .then(response=>{
            console.log(response);
            this.name=response.data.name
            this.emailId=response.data.emailId
            this.mobileNumber=response.data.mobileNumber

        })
        .catch(err=>console.log(err))

  },
  components: {
    HeaderM,
    Footer
  }
}
</script>
<style scoped>
body {
  margin-left: 0px;
}
.info{
  height: 100%;
  width: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
}

.sidebar {
  height: 84%;
  width: 20%;
  position: fixed;
  z-index: 1;
  background-color: #1F305E;
  padding-top: 60px;
  float: left;
  margin-left: -9px;
  margin-top: -10px;
}

.content {
  font-size: larger;
}

.sidebar div {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 20px;
  color: white;
  display: block;
  cursor: pointer;
}
.rightcontainer {
  width: 100%;
  height: 100%;
}

.about{
  box-shadow: 0 4px 8px 0 rgba(0,0,0,1);
  transition: 0.3s;
  padding: 16px;
  margin-left: 450px;
  margin-top: 150px;
  margin-right: 200px;
  text-align: center;
  background-color:#2d468b;
  color: white;
  border-radius: 20px;
}

.about:hover{
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

button{
  height: 40px;
  width: 100px;
  color: black;
  font-size: large;
  background-color: white;
  border-radius: 10%;
  cursor: pointer;
}

</style>
