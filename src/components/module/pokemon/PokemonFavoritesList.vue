<script setup>
import PokemonCard from './PokemonCard.vue'
import EmptyResults from '@/components/common/EmptyResults.vue'
import { useFavoritesStore } from '@/stores/favorites'
import { storeToRefs } from 'pinia'
import SearchBar from '@/components/common/SearchBar.vue'
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
      :url="pokemon.url"
    ></PokemonCard>
  </div>
  <EmptyResults v-else-if="favorites.length" @reset="() => updateFilter('')" />
</template>
