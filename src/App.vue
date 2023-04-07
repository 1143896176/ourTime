<script setup lang="ts">
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="slide-left">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped>

</style>
