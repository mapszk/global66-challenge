<script setup>
import { useModal } from 'vue-final-modal'
import PokemonModal from './PokemonModal.vue'
import FavoriteButton from './FavoriteButton.vue'

const props = defineProps(['id', 'name', 'url'])

const { open } = useModal({
  component: PokemonModal,
  attrs: {
    name: props.name,
    url: props.url,
  },
})
</script>

<template>
  <div
    @click="open"
    class="rounded-md cursor-pointer bg-white py-4 px-6 flex justify-between items-center min-h-[60px] hover:scale-[1.05] transition-transform relative"
    :to="`/pokemon/${props.name}`"
  >
    <span class="capitalize text-[22px] text-title font-medium">{{ props.name }}</span>
    <FavoriteButton :name="props.name" :url="props.url" />
  </div>
</template>
