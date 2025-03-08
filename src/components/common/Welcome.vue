<script setup lang="ts">
import { useRouter } from 'vue-router'
import Button from './Button.vue'

const router = useRouter()
const close = () => router.push('/list')
</script>

<template>
  <div class="min-h-screen w-screen py-24 flex items-center justify-center">
    <div
      class="container h-full flex flex-col items-center justify-center text-paragraph gap-5 text-center"
    >
      <img src="@/assets/welcome.png" alt="Welcome image" class="mb-14" />
      <h1 class="text-3xl text-title font-bold container">Welcome to Pokédex</h1>
      <span class="container">
        The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the
        Pokémon world.
      </span>
      <Button class="mt-12" @click="close">Get started</Button>
    </div>
  </div>
</template>
