<script setup lang="ts">
/**
 * CAUTION:
 *
 * `color.value` is dependent on the user's system preference, you should pay attention to the risk of hydration
 * mismatch if you use `color.value` in the template directly.
 *
 * For example, this will cause hydration mismatch:
 *
 * ```html
 * <div v-if="color.value === 'dark'">
 *   This is dark mode
 * </div>
 * <div v-else>
 *   This is light mode
 * </div>
 * ```
 */
const color = useColorMode()

useHead({
  meta: [{
    id: 'theme-color',
    name: 'theme-color',
    content: () => color.value === 'dark' ? '#222222' : '#ffffff',
  }],
})

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button class="cursor-pointer !outline-none" @click="toggleDark">
    <div class="i-carbon-sun dark:i-carbon-moon" />
  </button>
</template>
