<script setup lang="ts">
import {onMounted, ref} from 'vue'
import anime from 'animejs';
const startTime = new Date('2022-09-12 10:49:00').getTime()
const now =  new Date().getTime()
console.log((now-startTime))
const animation = anime.timeline({autoplay:false})
console.log(animation)
const btn = ref(null)
onMounted(()=>{
  animation.add({
    targets:'#btn',
    top:'1500px',
    duration:500,
    easing:'easeInOutSine'
  })
      .add({
        targets:'#starts',
        top:'0px',
        duration:1000,
        easing:'easeInOutSine'
      })
      .add({
        targets:'#mountains_behind',
        bottom:'0px',
        duration:1000,
        easing:'easeInOutSine'
      })
      .add({
        targets:'#moon',
        top:'0px',
        duration:1000,
        easing:'easeInOutSine'
      })
      .add({
        targets:'#mountains_front',
        bottom:'0px',
        duration:1000,
        easing:'easeInOutSine'
      }).add({
    targets:'#text',
    marginRight:'0px',
    duration:1000,
    easing:'easeInOutSine'
  })
})
function play() {
  animation.play()
}
</script>

<template>
  <!--  <computeDate></computeDate>-->
  <!--  <blackBord></blackBord>-->
  <section>
    <img src="/images/stars.png"  id="starts">
    <img src="/images/moon.png"  id="moon">
    <img src="/images/mountains_behind.png"  id="mountains_behind">
    <h2 id="text"> Anime JS</h2>
    <a href="javascript:void (0)" id="btn" @click.stop="play">Play</a>
    <img src="/images/mountains_front.png"  id="mountains_front">
  </section>
</template>

<style scoped>

</style>
