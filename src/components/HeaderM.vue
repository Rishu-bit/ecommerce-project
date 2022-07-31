<template>
<div>
  <div class="header-component">
    <router-link to="/"><span class="logo">ElectroBay</span></router-link>
    <div class="header-nav">
      <router-link to="/add" class="a-link">Add New Product</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="/account" class="a-link">Account</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <!-- <router-link to="/mlogin" class="a-link">Merchant</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->
      <!-- <router-link to="/cart" class="a-link">Order History</router-link>&nbsp;&nbsp;&nbsp; -->
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'This is header Component'
    }
  },
  watch: {
    searchText:function(val){
                //this.productList=this.getProductList.filter((data)=>data.brand.toLowerCase().indexOf(val.toLowerCase())>-1)
                console.log(val,"search");
                axios.get('http://10.20.4.166:8081/findBySearch/'+val)
                .then((res)=>{
                    this.productList=res.data
                    // console.log("hello",res)
                })
                .catch(err=>console.log(err))
            },
  }
}
</script>

<style scoped>
  * {
    text-decoration: none;
    color: white;
  }
  .header-component {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    border: 1px solid black;
    height: 34px;
    padding-top: 15px;
    background-color: #1F305E;
    color: white;
  }
  button {
    background-color: #1F305E;
    color: white;
  }
  .logo {
    float: left;
    margin-left: 30px;
    height: 30px;
    width: 30px;
  }
  .logo-image {
    height: 35px;
    width: 50px;
    border-radius: 8px;
    margin-top: -4px
  }
  .search-section {
    width: 600px;
    margin-left: 120px;
    margin-right: 20px;
    color: black;
    height: 25px;
    padding-top: 4px;
    border: none;
    border-radius: 5px;
  }
  .header-nav {
    display: flex;
    flex-direction: row;
    float: right;
    padding-right: 30px;
  }
  .a-link:hover {
    background-color: white;
    color: #1F305E;
    border: 1px solid black;
  }
  .searchin {
    color: black;
    margin-top: 20px;
    width: 50%;
    margin-right: 50px;
    height: 30px;
    border-radius: 5px;
    margin-left: 48px;
    position: fixed;
    text-align: left;
    margin-left: -393px;
}
@media screen and (max-width: 960px){
  .searchin{
  margin-left: -278px;
  }
}
</style>
