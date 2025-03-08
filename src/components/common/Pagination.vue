<script setup>
const props = defineProps(['pages', 'currentPage', 'showPrevious', 'showNext'])
const emit = defineEmits(['onNextPage', 'onPreviousPage'])
</script>

<template>
  <div class="flex w-full items-center mt-4">
    <button
      @click="emit('onPreviousPage')"
      v-if="props.showPrevious"
      class="text-paragraph rounded-md bg-white py-2 px-3 cursor-pointer font-bold mr-auto"
    >
      Previous
    </button>
    <button
      @click="emit('onNextPage')"
      v-if="props.showNext"
      class="text-paragraph rounded-md bg-white py-2 px-3 cursor-pointer font-bold ml-auto"
    >
      Next
    </button>
  </div>
</template>
