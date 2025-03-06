<script setup lang="ts">
import Search from './icons/Search.vue'
</script>

<template>
  <div class="h-[50px] rounded-md bg-white flex items-center gap-4 relative">
    <Search class="size-4 left-6 top-1/2 -translate-y-1/2 absolute text-placeholder" />
    <input
      type="text"
      placeholder="Search"
      class="rounded-md block w-full py-4 px-6 pl-14 placeholder:text-placeholder focus:outline-primary"
    />
  </div>
</template>
