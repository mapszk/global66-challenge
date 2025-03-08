<script setup>
import PokemonCard from '@/components/PokemonCard.vue'
import EmptyResults from '@/components/EmptyResults.vue'
import { getPokemonId } from '@/utils/getPokemonId'
import { useFavoritesStore } from '@/stores/favorites'
import { storeToRefs } from 'pinia'
import SearchBar from '@/components/SearchBar.vue'
import { computed, ref } from 'vue'

const store = useFavoritesStore()
const { favorites } = storeToRefs(store)
const filter = ref('')
const filteredFavorites = computed(() =>
  favorites.value.filter((p) => p.name.toLowerCase().includes(filter.value.toLowerCase())),
)

const updateFilter = (value) => {
  filter.value = value
}
</script>

<template>
  <SearchBar class="mb-10" @onChange="updateFilter" :value="filter" />
  <div v-if="filteredFavorites.length" class="flex flex-col gap-2.5">
    <PokemonCard
      v-for="pokemon in filteredFavorites"
      :key="pokemon.name"
      :name="pokemon.name"
      :id="getPokemonId(pokemon.url)"
      :url="pokemon.url"
    ></PokemonCard>
  </div>
  <EmptyResults v-else @reset="() => updateFilter('')" />
</template>
