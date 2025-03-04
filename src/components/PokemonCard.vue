<script setup>
const props = defineProps(['id', 'name'])
const baseImageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
</script>

<template>
  <router-link
    class="rounded-lg bg-blue-500 p-4 block flex flex-col gap-4 hover:scale-[1.05] transition-transform relative"
  >
    <picture class="block aspect-square size-full border border-yellow-400 rounded-lg">
      <img
        :src="baseImageUrl + props.id + '.png'"
        :alt="props.name + 'image'"
        class="object-contain size-full"
      />
    </picture>
    <button class="rounded-full size-8 bg-yellow-500 absolute top-8 right-8">+</button>
    <span class="bg-white px-4 py-2 rounded-lg capitalize text-lg font-medium">{{
      props.name
    }}</span>
  </router-link>
</template>
