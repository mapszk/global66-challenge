<script setup lang="ts">
import List from './icons/List.vue'
import Star from './icons/star.vue'
</script>

<template>
  <div class="shadow-[0px_-5px_4px_0px_#0000000D] bg-white py-5 sticky bottom-0">
    <div class="container flex items-center gap-5">
      <button
        class="bg-primary rounded-full text-white text-[22px] h-11 w-full flex justify-center items-center gap-3"
      >
        <List class="size-5" />
        All
      </button>
      <button
        class="bg-primary rounded-full text-white text-[22px] h-11 w-full flex justify-center items-center gap-3"
      >
        <Star class="size-5" />
        Favorites
      </button>
    </div>
  </div>
</template>
