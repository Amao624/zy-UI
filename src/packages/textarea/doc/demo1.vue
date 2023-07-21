<template>
  <zy-textarea v-model="val"></zy-textarea>
  <span>{{ val }}</span>
</template>

<script setup>
import { ref } from 'vue'

const val = ref('')
</script>
