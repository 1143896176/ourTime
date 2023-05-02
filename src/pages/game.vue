<template>
<div class="opt">
  <van-button type="primary" color="#7232dd" icon="replay" round @click="reSet"></van-button>
  <van-button type="primary" color="#7232dd" icon="music-o" round></van-button>
</div>
<div class="container">

</div>
</template>

<script lang="ts" setup>
import {Container} from '../utils/puzzle'
import {onMounted} from "vue";
import {getAssetsFile} from "../utils/getImg";
import {showToast,showDialog,Button} from "vant";

let warp: HTMLElement|null
let container :Container
const bg = getAssetsFile('bg1.jpg')
function init(){
   warp = document.querySelector('.container')
    container = new Container( warp!,bg,callback)
}
function callback(type:string,value?:any) {
  if(type==='win'){
    showDialog({ message: '成功啦！！' }).then(()=>{
      warp!.style.background = `url(${bg}) no-Repeat`
      warp!.style.backgroundSize = `100%`
      container.clearGrid()
    });
  }
  if(type==='click'){
    (document.getElementById('audio') as HTMLAudioElement).play()
  }
}
function reSet() {
  container.reSet()
}
onMounted(()=>{
  init()
})
</script>

<style scoped lang="scss">
.container{
  max-width: 500Px;
  max-height: 500Px;
  margin: 20px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 5px 5px;
  background-color: #7597de;
  padding: 10px;
  box-sizing: border-box;
 ::v-deep .pos-grid{
    border-radius: 10px;
   //-webkit-animation-duration: calc(1s * 0.75);
   //animation-duration: calc(1s * 0.75);
   //-webkit-animation-duration: calc(var(--animate-duration) * 0.75);
   //animation-duration: calc(var(--animate-duration) * 0.75);
   //-webkit-animation-name: pulse;
   //animation-name: pulse;
  }
}
.opt{
  padding: 30px 20px;
  display:flex;
  justify-content:space-between;

  ::v-deep .van-icon{
    transform: scale(1.5);

  }
}
</style>