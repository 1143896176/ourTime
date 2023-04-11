
<template>
  <section>
    <img src="/images/stars.png"  id="starts">
    <img src="/images/moon.png"  id="moon">
    <img src="/images/mountains_behind.png"  id="mountains_behind">
    <h2  id="text" style="text-align: center;    font-family: cursive;" class="animate__animated animate__bounce animate__infinite animate__pulse " @click.stop="openNoteBook">
      2022年09月12日 <br>
      10:49:00 <br>
      时间回到 {{diffTime.day}}天{{diffTime.h}}小时前
    </h2>
    <a href="javascript:void (0)" id="btn"  class="animate__animated animate__bounce animate__infinite animate__pulse " @click.stop="play">Play</a>
    <img src="/images/mountains_front.png"  id="mountains_front">
    <div class="text-content" :class="{show:isOpenBook}"></div>
  </section>
</template>
<script setup lang="ts">
import {onMounted, ref} from 'vue'
import anime from 'animejs';
import Typed from 'typed.js'
import {appendTime} from "../utils/date";
const startTime = new Date('2022-09-12 10:49:00').getTime()
const now =  new Date().getTime()

const animation = anime.timeline({autoplay:false})
const animationBook = anime.timeline({autoplay:false})
const btn = ref(null)
const audio = ref(null)
const isOpenBook = ref(false)
const diffTime = ref(appendTime())
const emit = defineEmits(['playBgAudio','playAudio'])
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
    easing:'easeInOutBounce'
  })

})
function play() {

  animation.play()
  emit('playBgAudio')
  emit('playAudio')
}
function openNoteBook() {
  animationBook.add({
    targets:'#text',
    right:'100vw',
    opacity:0,
    duration:500,
    easing:'easeOutCubic',
    complete(){
      isOpenBook.value = true
      setTimeout(function () {
        var typed = new Typed('.text-content', {
          strings: [`今天我很高兴认识了一个姑娘，她是位中学老师，她······\n (后面的你就都知道了😂😂)`],//输入内容, 支持html标签
          typeSpeed: 150, //打字速度
          backSpeed: 50, //回退速度
          showCursor: false,
          loop:false
        });
      },1000)

    }
  })

  emit('playAudio')

  animationBook.play()

}


</script>
<style scoped lang="scss">
  section{
    background: linear-gradient(#2b1055,#7597de);
    .text-content{
      font-family: cursive;
      display: none;
      opacity: 0;
      position: absolute;
      top:50%;
      height: 300Px;
      width: 90vw;
      background:url("@/assets/images/png2/_notebook.png");
      background-size:100% 100% ;
      padding: 50Px 20Px 20Px 20Px;

      left:50%;
      transform: translate(-50%,-50%);
    }
    .show{
      opacity: 1;
      display: block;
      transition: opacity 1s ease-in-out;
    }
  }
</style>
