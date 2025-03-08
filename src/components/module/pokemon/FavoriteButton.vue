<script setup>
import { useFavoritesStore } from '@/stores/favorites'
import { computed } from 'vue'
import Star from '@/components/common/icons/Star.vue'
import { storeToRefs } from 'pinia'
import { useToast } from 'vue-toast-notification'

const props = defineProps(['name', 'url'])
const toast = useToast()
const store = useFavoritesStore()
const { removeFromFavorites, addToFavorites } = useFavoritesStore()
const { favorites } = storeToRefs(store)

const isInFavorite = computed(() => {
  return Boolean(favorites.value.find((p) => p.name === props.name))
})
const toggleFavorite = (evt) => {
  evt.stopPropagation()
  if (isInFavorite.value) {
    removeFromFavorites(props.name)
    toast.error(`${props.name[0].toUpperCase() + props.name.slice(1)} removed from your favorites`)
  } else {
    addToFavorites({ name: props.name, url: props.url })
    toast.success(`${props.name[0].toUpperCase() + props.name.slice(1)} added to your favorites`)
  }
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
