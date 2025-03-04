<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="container">
      <nav class="flex items-center py-5 gap-5 mb-4">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/favorites">Favoritos</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
