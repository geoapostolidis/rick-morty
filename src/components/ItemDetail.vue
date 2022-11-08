<template>
  <span><b>{{ title }}: </b></span>
  <span>{{ value }}</span>
</template>

<script setup>
  import { defineProps } from 'vue';
 
  defineProps({
    title: String,
    value: String
  })
</script>

<style scoped>
span {
  font-size: 12px;
}
</style>