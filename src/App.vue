<script setup lang="ts">
import {getRootFile} from './utils/getImg'
</script>

<template>
  <audio :src="getRootFile('audio/12838.wav')" style="display: none" id="audio" preload="metadata"></audio>
  <router-view v-slot="{ Component }">
    <transition name="slide-left">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped>

</style>
