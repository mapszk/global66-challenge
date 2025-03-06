<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
import FavoriteButton from './FavoriteButton.vue'
import Button from './Button.vue'
import Cross from './icons/Cross.vue'

const props = defineProps(['name'])
</script>

<template>
  <VueFinalModal
    class="flex items-center justify-center"
    content-class="bg-white container rounded-md overflow-hidden"
  >
    <template #default="{ close }">
      <div class="relative">
        <button class="absolute top-5 right-5 cursor-pointer" @click="close">
          <Cross class="size-8 text-white" />
        </button>
        <div class="h-64 bg-blue-200"></div>
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
                {{ props.name }}
              </span>
            </span>
          </div>
          <div>
            <span class="text-2xl pb-4 block border-b border-border">
              <span class="font-medium">Height: </span>
              <span class="capitalize">
                {{ props.name }}
              </span>
            </span>
          </div>
          <div>
            <span class="text-2xl pb-4 block border-b border-border">
              <span class="font-medium">Types: </span>
              <span class="capitalize">
                {{ props.name }}
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
