<template>
<div>
<!--  <template v-for="(item,index) in DateProps">
    <vueCountTo :startVal="startDate[item]" :endVal="endDate[item]" ></vueCountTo>
    <template v-if="index<2">-</template>
    <template v-if="index===2">&nbsp;&nbsp;</template>
    <template v-if="index>2&&index<DateProps.length-1">:</template>

  </template>-->
<!--  <vueCountTo :startVal="startDate" :endVal="endDate" ></vueCountTo>-->
</div>
</template>

<script setup lang="ts">
import {day} from "../utils/date";
import {ref} from 'vue'

const date1 = day('2022-09-12 10:49:00')
const date2 = day(new Date())
const diff = date2.diff(date1)
const startDate = ref(date1.toObject())
const endDate = ref(day(date2).toObject())
// const startDate = ref('2022-09-12 10:49:00')
// const endDate = ref(day(date2).toString())
console.log(date1.toObject(),date2.toObject())
setInterval(()=>{
  // endDate.value = day(new Date()).toString()
})
const DateProps = ref(['years','months','date','hours','minutes','seconds'])

</script>

<style scoped>

</style>