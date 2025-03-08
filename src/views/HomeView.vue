<script setup>
import PokemonList from '@/components/module/pokemon/PokemonList.vue'
import Welcome from '@/components/common/Welcome.vue'
import { useWelcomeStore } from '@/stores/welcome'
import { storeToRefs } from 'pinia'

const store = useWelcomeStore()
const { showWelcome } = storeToRefs(store)
</script>

<template>
  <Welcome v-if="showWelcome" />
  <main class="container py-8 min-h-[calc(100vh-80px)]">
    <PokemonList />
  </main>
</template>
