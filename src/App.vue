<script setup lang="ts">
import Tabs from '@/components/common/Tabs.vue'
import { ModalsContainer } from 'vue-final-modal'
</script>

<template>
  <RouterView />
  <Tabs />
  <ModalsContainer />
</template>
