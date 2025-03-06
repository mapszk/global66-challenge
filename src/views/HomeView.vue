<script setup>
import SearchBar from '@/components/SearchBar.vue'
import PokemonList from '@/components/PokemonList.vue'
</script>

<template>
  <main class="container py-8">
    <SearchBar class="mb-10" />
    <PokemonList />
  </main>
</template>
