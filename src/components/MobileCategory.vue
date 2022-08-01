<template>
<div>

<HeaderAfterLogin></HeaderAfterLogin>
<div class="MobileCategory">
            <br />
            <h1>Add Product</h1><br>
            <div class="form">
                <form>                                    
                    <label for="brand">Brand:</label><br />
                    <select class="box" id="brand" name="brand">
                        <option value="samsung">Samsung</option>
                        <option value="apple">Apple</option>
                        <option value="redmi">Redmi</option>
                        <option value="oppo">Oppo</option>
                        <option value="fog">Fog</option>
                        <option value="huawei">Huawei</option>
                        <option value="infinix">Infinix</option>
                        <option value="oneplus">OnePlus</option>
                    </select><br>                
                    <label for="price">Price:</label><br />
                    <input type="number" class="box" id="common-id" name="price" value=""><br />
                    <label for="stock">Stock:</label><br />
                    <input type="number" class="box" id="common-id" name="stock" value=" " ><br>
                    <label for="camera">Camera:</label><br />
                    <input type="number" class="box" id="common-id" name="camera" value=" " ><br>
                    <label for="ram">Ram:</label><br />
                    <input type="number" class="box" id="common-id" name="ram" value=" "><br>                    
                    <label for="image" class="image-url">Image:</label><br />
                    <input type="text" class="box" id="image" name="image" value=" "><br><br>
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
.MobileCategory {
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