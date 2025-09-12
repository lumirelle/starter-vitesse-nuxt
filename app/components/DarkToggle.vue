<script setup lang="ts">
/**
 * Notice that, the initial value of color is dependent on the user's system preference.
 *
 * You should pay attention to the risk of hydration mismatch if you use `color.value` in the template directly.
 *
 * For example:
 *
 * ```html
 * <div v-if="color.value === 'dark'">
 *   This is dark mode
 * </div>
 * <div v-else>
 *   This is light mode
 * </div>
 * ```
 *
 * This component will not cause hydration mismatch because the content does not rely on `color.value`, it is dependent on the CSS only.
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
