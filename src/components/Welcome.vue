<script setup lang="ts">
import { onMounted } from 'vue'
import Button from './Button.vue'
import { useWelcomeStore } from '@/stores/welcome'

const { toggleWelcome } = useWelcomeStore()
onMounted(() => {
  document.body.style.overflow = 'hidden'
})
const close = () => toggleWelcome(false)
</script>

<template>
  <div
    class="fixed z-100 h-screen w-screen flex flex-col items-center justify-center text-paragraph bg-white gap-5 text-center"
  >
    <img src="@/assets/welcome.png" alt="Welcome image" class="mb-14" />
    <h1 class="text-3xl text-title font-medium container">Welcome to Pokédex</h1>
    <span class="container">
      The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the
      Pokémon world.
    </span>
    <Button class="mt-12" @click="close">Get started</Button>
  </div>
</template>
