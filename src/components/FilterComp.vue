<template>
  <div class="filter-component">
    <div class="electronics"><a href="/mobile"><img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-max-2.jpg" alt=""/>Mobile</a></div>
    <div class="electronics"><a href="/laptop"><img src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1768&q=80" alt="">Laptops</a></div>
    <div class="electronics"><a href="/watch"><img src="https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-watch4-398887-sm-r875fzgainu-481111530?$1300_1038_PNG$" width="100px" alt="">Watches</a></div>
    <div class="electronics"><a href="/headphone"><img src="https://wallpapercave.com/dwp2x/wp3631253.jpg" alt="">Headphones</a></div>
    <div class="electronics"><a href="/tv"><img src="https://image.made-in-china.com/2f0j00oYWRQiwCarqI/Flat-Screen-32-Inches-Smart-HD-Color-LED-TV.jpg" alt=""><br/>TV</a></div>
  </div>
</template>

<script>
export default {
  name: 'FilterComp',
  data () {
    return {
      msg: 'This is filter Component'
    }
  }
}
</script>

<style scoped>
.electronics {
  height: 72px;
  width: 80px;
}
img {
  height: 72px;
  width: 60px;
  border-radius: 25px;
  transition: transform .2s;
}
img:hover {
  -ms-transform: scale(1.5);
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
}
* {
    text-decoration: none;
    background-color: white;
    color: black;
}
.filter-component {
    border: 1px solid black;
    margin-top: 60px;
    height: 120px;
    width: 80%;
    margin-left: 10%;
    display: flex;
    justify-content: space-evenly;
    padding-top: 30px;
}
</style>
