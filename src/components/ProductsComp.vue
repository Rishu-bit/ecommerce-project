<template>
  <div class="product-component">
    <span><router-link to="/laptop"><img src="https://m.media-amazon.com/images/I/710NRdecQtL._SL1000_.jpg" alt=""></router-link></span>
    <span><router-link to="/mobile"><img src="https://m.media-amazon.com/images/I/81AQybT5k6L._SL1500_.jpg" alt=""/>
    </router-link></span>
    <span><router-link to="/tv" ><img src="https://rukminim1.flixcart.com/image/832/832/kq6yefk0/television/n/w/v/l32m5-al-mi-original-imag4967mvqvpvgp.jpeg?q=70" alt=""></router-link></span>
     <span><router-link to="/headphone" ><img src="https://rukminim1.flixcart.com/image/832/832/keaaavk0-0/headphone/d/p/f/stardust-cosmic-byte-original-imafvy34hgj55j6f.jpeg?q=70" alt=""></router-link></span>
    <span><router-link to="/laptop" ><img src="https://m.media-amazon.com/images/I/511fq-ANHxL._SL1175_.jpg" alt=""></router-link></span>
    <span><router-link to="/mobile" ><img src="https://m.media-amazon.com/images/I/81lnKynSaqL._SL1500_.jpg" alt=""></router-link></span>
    <span><router-link to="/tv" ><img src="https://rukminim1.flixcart.com/image/832/832/l0fm07k0/television/7/x/9/-original-imagc8fnpx39evgc.jpeg?q=70" alt=""></router-link></span>
    <span><router-link to="/watch" ><img src="https://rukminim1.flixcart.com/image/832/832/ky0g58w0/smartwatch/d/p/5/-original-imagac7hghz4nnxw.jpeg?q=70" alt=""></router-link></span>
    <span><router-link to="/headphone" ><img src="https://rukminim1.flixcart.com/image/832/832/k73nlow0/headphone/h/9/z/boat-rockerz-370-original-imafpef5cszgwxmx.jpeg?q=70" alt=""></router-link></span>
    <span><router-link to="/mobile" ><img src="https://m.media-amazon.com/images/I/81QVLzeVckL._SL1500_.jpg" alt=""></router-link></span>
    <span><router-link to="/laptop" ><img src="https://m.media-amazon.com/images/I/61L5QgPvgqL._SL1500_.jpg" alt=""></router-link></span>
    <span><router-link to="/headphone" ><img src="https://rukminim1.flixcart.com/image/832/832/kw104nk0/headphone/h/y/u/-original-imag8sgygxzs9a73.jpeg?q=70" alt=""></router-link></span>
    <span><router-link to="/tv" ><img src="https://rukminim1.flixcart.com/image/832/832/kiyw9e80-0/television/p/0/w/32path0011-thomson-original-imafynyvsmeuwtzr.jpeg?q=70" alt=""></router-link></span>
    <span><router-link to="/laptop" ><img src="https://m.media-amazon.com/images/I/716bvqzz7PL._SL1500_.jpg" alt=""></router-link></span>
    <span><router-link to="/headphone" ><img src="https://rukminim1.flixcart.com/image/832/832/kavefm80/headphone/h/a/s/wh-ch710n-sony-original-imafscdmhsnq77yw.jpeg?q=70" alt=""></router-link></span>
    <span><router-link to="/mobile" ><img src="https://m.media-amazon.com/images/I/51LOXKT+vvL._SL1200_.jpg" alt=""></router-link></span>
    <span><router-link to="/tv" ><img src="https://rukminim1.flixcart.com/image/832/832/xif0q/television/v/2/b/-original-imaggjzuhzv6zhby.jpeg?q=70" alt=""></router-link></span>
    <span><router-link to="/watch" ><img src="https://rukminim1.flixcart.com/image/832/832/l572ufk0/smartwatch/v/q/u/39-t500-android-rightex-yes-original-imagfxfgdzg42m83.jpeg?q=70" alt=""></router-link></span>
  </div>
</template>
<script>
export default {
  name: 'ProductsComp',
  data () {
    return {
      msg: 'This is product Component'
    }
  }
}
</script>

<style scoped>
.product-component {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    border: 1px solid black;
}
span {
    margin: 20px;

    /* border: 1px solid black; */
}
img {
    height: 250px;
    width: 200px;
    margin: 15px;
}
/* img:hover {
  -ms-transform: scale(1.5);
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
} */
</style>
