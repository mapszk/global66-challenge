<script setup>
import { useFavoritesStore } from '@/stores/favorites'
import { computed } from 'vue'

const props = defineProps(['name'])
const { favorites, removeFromFavorites, addToFavorites } = useFavoritesStore()

const isInFavorite = computed(() => {
  return favorites.find((p) => p.name === props.name)
})
const toggleFavorite = (evt) => {
  evt.stopPropagation()
  alert(props.name)
  if (isInFavorite.value) removeFromFavorites(props.name)
  else addToFavorites(props.name)
}
</script>

<template>
  <button
    @click="toggleFavorite"
    class="rounded-full size-11 bg-[#F5F5F5] text-placeholder flex items-center justify-center cursor-pointer"
    aria-label="Add to favorites"
  >
    <Star :class="!isInFavorite ? 'grayscale-100 size-7' : 'size-7'" />
  </button>
</template>
