<template>
<div>

<HeaderAfterLogin></HeaderAfterLogin>
<div class="LaptopCategory">
            <br />
            <h1>Add Product</h1><br>
            <div class="form">
                <form>                                    
                    <label for="brand">Brand:</label><br />
                    <select class="box" id="brand" name="brand">
                        <option value="lenova">Lenova</option>
                        <option value="dell">Dell</option>
                        <option value="hp">HP</option>
                        <option value="mi">Mi</option>
                        <option value="apple">Apple</option>
                        <option value="asus">asus</option>
                        <option value="acer">acer</option>
                        <option value="razer">Razer</option>
                    </select><br>                
                    <label for="price">Price:</label><br />
                    <input type="number" class="box" id="common-id" name="price" value=""><br />
                    <label for="stock">Stock:</label><br />
                    <input type="number" class="box" id="common-id" name="stock" value=" " ><br>
                    <label for="processor">Processor:</label><br />
                    <input type="number" class="box" id="common-id" name="processor" value=" " ><br>
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