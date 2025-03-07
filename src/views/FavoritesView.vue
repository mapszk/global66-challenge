<script setup>
import PokemonCard from '@/components/PokemonCard.vue'
import { getPokemonId } from '@/utils/getPokemonId'
import { useFavoritesStore } from '@/stores/favorites'
import { storeToRefs } from 'pinia'
import SearchBar from '@/components/SearchBar.vue'

const store = useFavoritesStore()
const { favorites } = storeToRefs(store)
</script>

<template>
  <main class="container py-8">
    <SearchBar class="mb-10" />
    <div class="flex flex-col gap-2.5 min-h-[calc(100vh-200px)]">
      <PokemonCard
        v-for="pokemon in favorites"
        :key="pokemon.name"
        :name="pokemon.name"
        :id="getPokemonId(pokemon.url)"
        :url="pokemon.url"
      ></PokemonCard>
    </div>
  </main>
</template>
