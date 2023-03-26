<template>
  <audio :src="getRootFile('audio/C400003vyCD03Qjocc.m4a')" preload ref = 'bgAudio' loop></audio>
  <audio :src="getRootFile('audio/12838.wav')" style="display: none" ref="audio" preload></audio>

  <Transition name="animate__animated animate__bounce" enter-active-class="animate__fadeInLeft" leave-active-class="animate__fadeOutUpBig">
<!--    <sectionOne v-if="setupCount = 0" @next="setupCount++"></sectionOne>-->
<!--    <sectionTwo v-if="setupCount = 1" @next="setupCount++"></sectionTwo>-->
    <KeepAlive>

    <component :is="activeComponent" @next="setupCount++" @playBgAudio="playBg" @playAudio="playAudio"/>
    </KeepAlive>
  </Transition>

</template>
<script setup lang="ts">
import {getRootFile} from "../utils/getImg";

import sectionOne from './sectionOne.vue'
import sectionTwo from './sectionTwo.vue'
import {ref, watch} from "vue";
const setupCount = ref(0)
const bgAudio = ref(null)
const audio = ref(null)
const activeComponent = ref(sectionOne)
const configComp  = {
  '0':sectionOne,
  '1':sectionTwo
}
watch(setupCount,(n:number)=>{
  activeComponent.value = configComp[n]
})
function playBg() {
  (bgAudio.value as any).play()
}
function playAudio() {
  (audio.value as any).play()
}
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
