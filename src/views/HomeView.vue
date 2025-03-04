<script setup>
import { useGetData } from '@/hooks/useFetchData'
import { endpoints } from '@/services/api'
import { toRaw, watch } from 'vue'

const { isLoading, data } = useGetData({
  queryKey: ['pokemonsList'],
  url: endpoints.pokemons(),
})

watch(data, (newData) => {
  if (newData) console.log('DATA LOADED', toRaw(newData))
})
</script>

<template>
  <main class="container">
    <h1 class="text-4xl">Pokemones</h1>
    <div v-if="!isLoading">
      <span v-for="pokemon in data.results" :key="pokemon.id">{{ pokemon.name }}</span>
    </div>
  </main>
</template>
