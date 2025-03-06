<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
import FavoriteButton from './FavoriteButton.vue'
import Button from './Button.vue'
import Cross from './icons/Cross.vue'
import { useQuery } from '@tanstack/vue-query'
import { fetchData } from '@/hooks/useFetchData'
import { endpoints } from '@/services/api'
import Loader from './Loader.vue'

const props = defineProps(['name'])

const { isLoading, data } = useQuery({
  queryKey: ['pokemonByName', props.name],
  queryFn: () => fetchData(endpoints.pokemonByName(props.name)),
})

const getStat = (statName) => {
  if (isLoading || !data.value) return
  else return data.value.stats.find((s) => s.stat.name === statName)
}
</script>

<template>
  <VueFinalModal
    class="flex items-center justify-center"
    content-class="bg-white container rounded-md overflow-hidden"
  >
    <template #default="{ close }">
      <div v-if="isLoading" class="flex items-center justify-center min-h-[650px]">
        <Loader />
      </div>
      <div class="relative" v-else>
        <button class="absolute z-[2] top-5 right-5 cursor-pointer" @click="close">
          <Cross class="size-8 text-white" />
        </button>
        <div class="h-64 bg-blue-200 relative overflow-hidden">
          <img
            src="@/assets/background.png"
            alt="Background"
            class="absolute size-full object-cover scale-[3] -translate-y-[70%] sm:-translate-y-[90%] lg:-translate-y-full"
          />
          <img
            :src="data.sprites.front_default"
            alt="Pokemon image"
            class="size-72 absolute h-full -bottom-2 left-1/2 -translate-x-1/2"
          />
        </div>
        <div class="bg-white p-4 md:p-8 text-paragraph space-y-4">
          <div>
            <span class="text-2xl pb-4 block border-b border-border">
              <span class="font-medium">Name: </span>
              <span class="capitalize">
                {{ props.name }}
              </span>
            </span>
          </div>
          <div>
            <span class="text-2xl pb-4 block border-b border-border">
              <span class="font-medium">Weight: </span>
              <span class="capitalize">
                {{ getStat('weight') }}
              </span>
            </span>
          </div>
          <div>
            <span class="text-2xl pb-4 block border-b border-border">
              <span class="font-medium">Height: </span>
              <span class="capitalize">
                {{ getStat('height') }}
              </span>
            </span>
          </div>
          <div>
            <span class="text-2xl pb-4 block border-b border-border">
              <span class="font-medium">Types: </span>
              <span class="capitalize">
                {{ getStat('weight') }}
              </span>
            </span>
          </div>

          <div class="flex justify-between items-center">
            <Button>Share to my friends</Button>
            <FavoriteButton :name="props.name" />
          </div>
        </div>
      </div>
    </template>
  </VueFinalModal>
</template>
