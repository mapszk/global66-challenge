<script setup>
import Button from './Button.vue'

const emits = defineEmits(['reset'])
</script>

<template>
  <div class="flex flex-col items-center text-center">
    <h1 class="text-title text-4xl font-bold mb-2.5">Uh-oh!</h1>
    <span class="text-paragraph text-xl mb-6">You look lost on the journey!</span>
    <Button @click="emits('reset')">Go back home</Button>
  </div>
</template>
