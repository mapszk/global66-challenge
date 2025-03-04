<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="container">
      <nav class="flex items-center py-5 gap-5 mb-4">
        <RouterLink class="text-yellow-500 hover:underline font-medium text-lg" to="/"
          >Home</RouterLink
        >
        <RouterLink class="text-yellow-500 hover:underline font-medium text-lg" to="/favorites"
          >Favoritos</RouterLink
        >
      </nav>
    </div>
  </header>
  <RouterView />
</template>
