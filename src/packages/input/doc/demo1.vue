<template>
  <div>
    <zy-input v-model="val" clearable></zy-input>
    <zy-input disabled placeholder="被禁用"></zy-input>
    <span>{{ val }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const val = ref('')
</script>
