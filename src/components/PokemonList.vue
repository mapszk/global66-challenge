<script setup>
import { endpoints } from '@/services/api'
import PokemonCard from '@/components/PokemonCard.vue'
import { getPokemonId } from '@/utils/getPokemonId'
import { ref } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import { fetchData } from '@/hooks/useFetchData'
import Loader from './Loader.vue'

const page = ref(0)
const { isLoading, data } = useQuery({
  queryKey: ['pokemonsList', page],
  queryFn: () => fetchData(endpoints.pokemons(`limit=10&offset=${page.value * 5}`)),
})

const nextPage = () => {
  page.value = page.value + 1
}
const prevPage = () => {
  page.value = page.value - 1
}
</script>

<template>
  <div v-if="isLoading" class="min-h-[calc(100vh-250px)] flex items-center justify-center">
    <Loader />
  </div>
  <div v-else class="flex flex-col gap-2.5">
    <PokemonCard
      v-for="pokemon in data.results"
      :key="pokemon.name"
      :name="pokemon.name"
      :id="getPokemonId(pokemon.url)"
      :url="pokemon.url"
    ></PokemonCard>
    <div class="flex justify-between items-center mt-4">
      <button
        @click="prevPage"
        :disabled="!data.previous"
        class="text-paragraph rounded-md bg-white py-2 px-3 cursor-pointer font-medium disabled:opacity-50 disabled:cursor-default"
      >
        Previous
      </button>
      <button
        @click="nextPage"
        :disabled="!data.next"
        class="text-paragraph rounded-md bg-white py-2 px-3 cursor-pointer font-medium disabled:opacity-50 disabled:cursor-default"
      >
        Next
      </button>
    </div>
  </div>
</template>
