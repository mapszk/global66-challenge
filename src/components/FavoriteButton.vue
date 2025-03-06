<script setup>
import { useFavoritesStore } from '@/stores/favorites'
import { computed } from 'vue'
import Star from './icons/star.vue'
import { storeToRefs } from 'pinia'

const props = defineProps(['name'])
const store = useFavoritesStore()
const { removeFromFavorites, addToFavorites } = useFavoritesStore()
const { favorites } = storeToRefs(store)

const isInFavorite = computed(() => {
  return Boolean(favorites.value.find((p) => p === props.name))
})
const toggleFavorite = (evt) => {
  evt.stopPropagation()
  if (isInFavorite.value) removeFromFavorites(props.name)
  else addToFavorites(props.name)
}
</script>

<template>
  <button
    @click="toggleFavorite"
    class="rounded-full size-11 bg-[#f5f5f5] flex items-center justify-center cursor-pointer"
    aria-label="Add to favorites"
  >
    <Star
      class="cursor-pointer size-6 text-placeholder"
      :class="isInFavorite && '!text-[#ECA539]'"
    />
  </button>
</template>
