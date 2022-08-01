<template>
<div>
<HeaderAfterLogin></HeaderAfterLogin>

<div class="addproduct">
            <br />
            <h1>Add Product</h1><br>
            <div class="form">
                <form>
                    <label for="merchantId">MerchantId:</label>
                    <br />
                    <input type="text" class="box" id="common-id" name="merchantId" ><br>
                    <label for="category">Category:</label><br />
                    <select class="box" id="category" name="category" >
                        <option value="mobile">Mobile</option>
                        <option value="laptop">Laptop</option>
                        <option value="watches">Watches</option>
                        <option value="headphones">Headphones</option>
                        <option value="television">Television</option>
                    </select><br>
                   
                    <button class="button" type="button" onclick="alert('Your product is Added')"
                       >Submit</button>
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
    max-width: 100%;
    min-height: 480px;
    /* margin-top: auto; */
    margin-right: auto;
    margin-bottom: auto;
    margin-left: auto;
    width: 60%;
}
</style>