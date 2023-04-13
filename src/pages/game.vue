<template>
<div class="container">

</div>
</template>

<script lang="ts" setup>
import {Container} from '../utils/puzzle'
import {onMounted} from "vue";
onMounted(()=>{
  const warp = document.querySelector('.container')
  const container = new Container( warp!)
  console.log(Container.noMoveList)
})

</script>

<style scoped lang="scss">
.container{

  margin: 20px auto;
}
</style>