<script setup>
import PokemonCard from '@/components/PokemonCard.vue'
import { getPokemonId } from '@/utils/getPokemonId'
import { useFavoritesStore } from '@/stores/favorites'

const { favorites } = useFavoritesStore()
</script>

<template>
  <main class="container">
    <h1 class="text-4xl font-semibold text-yellow-500">Favoritos</h1>
    <div v-if="!isLoading" class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 py-12 pt-8">
      <PokemonCard
        v-for="pokemon in favorites"
        :key="pokemon.name"
        :name="pokemon.name"
        :id="getPokemonId(pokemon.url)"
      ></PokemonCard>
    </div>
  </main>
</template>
