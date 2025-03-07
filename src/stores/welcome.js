import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useWelcomeStore = defineStore('welcome', () => {
  const showWelcome = ref(true)
  const toggleWelcome = (value) => {
    showWelcome.value = value
  }

  watch(showWelcome, (newValue) => {
    if (newValue) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  })

  return { toggleWelcome, showWelcome }
})
