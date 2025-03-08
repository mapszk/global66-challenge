<script setup>
import { endpoints } from '@/services/api'
import SearchBar from '@/components/SearchBar.vue'
import EmptyResults from '@/components/EmptyResults.vue'
import PokemonCard from '@/components/PokemonCard.vue'
import { getPokemonId } from '@/utils/getPokemonId'
import { computed, ref } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import { fetchData } from '@/hooks/useFetchData'
import Loader from './Loader.vue'
import Pagination from './Pagination.vue'

const page = ref(0)
const limit = ref(10)
const filter = ref('')
const { isLoading, data } = useQuery({
  queryKey: ['pokemonsList', page],
  queryFn: () => fetchData(endpoints.pokemons(`limit=${limit.value}&offset=${page.value * 5}`)),
})
const filteredResults = computed(() =>
  data.value.results.filter((p) => p.name.toLowerCase().includes(filter.value.toLowerCase())),
)

const updateFilter = (value) => {
  filter.value = value
}

const nextPage = () => {
  page.value = page.value + 1
}
const prevPage = () => {
  page.value = page.value - 1
}
</script>

<template>
  <div v-if="isLoading" class="min-h-[calc(100vh-80px)] flex items-center justify-center">
    <Loader />
  </div>
  <div v-if="!isLoading" class="flex flex-col gap-2.5">
    <SearchBar class="mb-10" @onChange="updateFilter" :value="filter" />
    <div v-if="filteredResults.length" class="flex flex-col gap-2.5">
      <PokemonCard
        v-for="pokemon in filteredResults"
        :key="pokemon.name"
        :name="pokemon.name"
        :id="getPokemonId(pokemon.url)"
        :url="pokemon.url"
      ></PokemonCard>
      <Pagination
        @onNextPage="nextPage"
        @onPreviousPage="prevPage"
        @onChangePage="onChangePage"
        :showPrevious="data.previous"
        :showNext="data.next"
        :pages="Math.ceil(data.count / limit)"
        :currentPage="page"
      />
    </div>
    <EmptyResults v-else @reset="() => updateFilter('')" />
  </div>
</template>
