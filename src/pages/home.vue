<template>


  <Transition name="animate__animated animate__bounce" enter-active-class="animate__fadeInLeft" leave-active-class="animate__fadeOutUpBig">
    <!--    <sectionOne v-if="setupCount = 0" @next="setupCount++"></sectionOne>-->
    <!--    <sectionTwo v-if="setupCount = 1" @next="setupCount++"></sectionTwo>-->

      <component :is="activeComponent" @next="setupCount++" @playBgAudio="playBg" @playAudio="playAudio" />
  </Transition>

</template>
<script setup lang="ts">
import {getAssetsFile,getRootFile} from "../utils/getImg";

import sectionOne from '../components/sectionOne.vue'
import sectionTwo from '../components/sectionTwo.vue'
import {ref, watch, shallowRef, onMounted} from "vue";
const setupCount = ref(0)
const bgAudio = ref<HTMLAudioElement>()
const audio = ref<HTMLAudioElement>()
const activeComponent = ref(shallowRef(sectionOne))
const configComp  = {
  '0':sectionOne,
  '1':sectionTwo
}
watch(setupCount,(n:number)=>{
  console.log(n)
  //@ts-ignore
  activeComponent.value = configComp[n]
})
function playBg() {
  (bgAudio.value as any).play()
}
function playAudio() {
  (audio.value as any).play()
}

onMounted(()=>{
  bgAudio.value = document.getElementById('bgAudio') as HTMLAudioElement
  audio.value = document.getElementById('audio') as HTMLAudioElement
})
</script>
<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
