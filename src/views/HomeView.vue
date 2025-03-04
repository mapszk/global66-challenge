<script setup>
import { useGetData } from '@/hooks/useFetchData'
import { endpoints } from '@/services/api'
import PokemonCard from '@/components/PokemonCard.vue'

const { isLoading, data } = useGetData({
  queryKey: ['pokemonsList'],
  url: endpoints.pokemons('limit=12'),
})

const getPokemonId = (url) => url.split('/').filter(Boolean).pop()
</script>

<template>
  <main class="container">
    <h1 class="text-4xl font-semibold">Pokemones</h1>
    <div v-if="!isLoading" class="grid grid-cols-3 gap-5 py-12 pt-8">
      <PokemonCard
        v-for="pokemon in data.results"
        :key="pokemon.name"
        :name="pokemon.name"
        :id="getPokemonId(pokemon.url)"
      ></PokemonCard>
    </div>
  </main>
</template>
