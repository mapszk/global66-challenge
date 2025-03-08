<script setup lang="ts">
import Tabs from '@/components/common/Tabs.vue'
import { ModalsContainer } from 'vue-final-modal'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <RouterView />
  <Tabs v-if="route.path !== '/'" />
  <ModalsContainer />
</template>
