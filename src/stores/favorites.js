import { onMounted, ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref([])
  const addToFavorites = (name) => {
    favorites.value = [...favorites.value, name]
  }
  const removeFromFavorites = (name) => {
    favorites.value = favorites.value.filter((p) => p !== name)
  }

  onMounted(() => {
    const saved = localStorage.getItem('favorites')
    if (saved) {
      favorites.value = JSON.parse(saved)
    }
  })
  watch(favorites, (newValue) => {
    localStorage.setItem('favorites', JSON.stringify(newValue))
  })

  return { removeFromFavorites, addToFavorites, favorites }
})
