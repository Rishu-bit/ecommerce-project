<template>
<div>
<HeaderAfterLogin></HeaderAfterLogin>

<div class="addproduct">
            <br />
            <h1>Edit Product</h1><br>
            <div class="form">
                <form method="POST" action="">
                    <label for="category" ><strong>Select Category:</strong></label><br />
                    <select class="box" id="category" name="category" v-model="categoryList"  >
                        <option value="mobcategory">Mobile</option>
                        <option value="lapcategory">Laptop</option>
                        <option value="watchcategory">Watches</option>
                        <option value="headphonecategory">Headphones</option>
                        <option value="telecategory">Television</option>
                    </select><br><br><br>
                   
                    <button class="button" type="button" @click="onclick()">Submit</button>
                </form>
            </div>
        </div>
    <Footer></Footer>    
</div>        
</template>


<script>
import HeaderAfterLogin from './HeaderAfterLogin.vue';
import Footer from './Footer.vue';
export default{
    name:'categoryList',
    methods: {
       onclick(){
        this.$router.push(this.categoryList);
       }
    },

    components: { HeaderAfterLogin, Footer }
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
    max-width: 50%;
    min-height: 280px;
    /* margin-top: auto; */
    margin-right: auto;
    margin-bottom: auto;
    margin-left: auto;
    width: 60%;
}
</style>