<script setup lang="ts">
import { useRoute } from 'vue-router'
import List from './icons/List.vue'
import Star from './icons/Star.vue'

const route = useRoute()
</script>

<template>
  <div class="shadow-[0px_-5px_4px_0px_#0000000D] bg-white h-[80px] sticky bottom-0">
    <div class="container flex items-center h-full gap-5">
      <router-link
        to="/list"
        class="rounded-full text-white text-[22px] h-11 w-full flex justify-center items-center gap-3"
        :class="route.path === '/list' ? 'bg-primary' : 'bg-placeholder'"
      >
        <List class="size-5" />
        All
      </router-link>
      <router-link
        to="/favorites"
        class="rounded-full text-white text-[22px] h-11 w-full flex justify-center items-center gap-3"
        :class="route.path === '/favorites' ? 'bg-primary' : 'bg-placeholder'"
      >
        <Star class="size-5" />
        Favorites
      </router-link>
    </div>
  </div>
</template>
