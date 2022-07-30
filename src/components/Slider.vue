<template>
<div class="slider-component">
    <transition-group name='fade' tag='div'>
      <div v-for="(i,index) in [currentIndex]" :key='index'>
        <img :src="images[currentIndex]" @click="clickHandler(currentIndex)"/>
      </div>
    </transition-group>
    <button class="prev" @click="prev" href='#'>&#10094;</button>
    <button class="next" @click="next" href='#'>&#10095;</button>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Slider',
  data() {
    return {
      images: [
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/android-phones-1651081480.jpg?crop=0.949xw:0.632xh;0.0272xw,0.188xh&resize=1200:*',
        'https://gadgets-africa.com/wp-content/uploads/2020/04/incredible-laptops-to-buy.jpg',
        'https://img.wallpapic.com/i6841-629-143/medium/headphones-gadget-electronics-headset-wallpaper.jpg',
        'https://i01.appmifile.com/webfile/globalimg/13/4E42901D-1902-EF83-5BFA-2AD4C5CC8F59.jpg'
      ],
      
      timer: null,
      currentIndex: 0,
    }
  },
  mounted: function() {
    this.startSlide();
  },
  
    methods: {
      startSlide: function() {
        this.timer = setInterval(this.next, 4000);
      },
      next: function () {
        if (this.currentIndex < this.images.length - 1) {
          this.currentIndex += 1
        } else {
          this.currentIndex = 0
        }
      },
      prev: function () {
        this.currentIndex -= 1
      },
      clickHandler (j) {
        console.log("hello",j)
        if(j==0){
          this.$router.push('/mobile')
        }
        else if(j==1){
          this.$router.push('/laptop')
        }
        else if(j==2){
          this.$router.push('/headphone')
        }
        else 
        this.$router.push('/tv')
        console.log(currentIndex);
        console.log(id[0]);
      }
    },
    computed: {
      currentImg: function() {
        return this.images[Math.abs(this.currentIndex) % this.images.length];
      }
    }
}
</script>

<style scoped>
.slider-component {
  height: 100vh;
  width: 100vw;
  margin-top: 20px;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

img {
height:600px;
width:100%
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 70%;
  width: auto;
  padding: 16px;
  color: #1F305E;
  font-weight: bold;
  font-size: 18px;
  transition: 100ms ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
}

.prev {
  left: 0;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}
</style>