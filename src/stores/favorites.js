import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref([])
  const addToFavorites = (name) => {
    favorites.value = [...favorites.value, name]
  }
  const removeFromFavorites = (name) => {
    favorites.value = favorites.value.filter((p) => p.name !== name)
  }

  return { removeFromFavorites, addToFavorites, favorites }
})
