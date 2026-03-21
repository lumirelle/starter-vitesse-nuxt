<script setup lang="ts">
/**
 * CAUTION:
 *
 * In client, `color.value` may respect user's browser preference (e.g. `prefers-color-scheme`), but in server, due to the lack of this information, it will always use `light` as the default. This may cause **hydration mismatch**.
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
 * Consider using CSS with media query to avoid this issue:
 *
 * ```html
 * <div class="dark:hidden">
 *   This is light mode
 * </div>
 * <div class="hidden dark:block">
 *   This is dark mode
 * </div>
 * ```
 */
const color = useColorMode()

/**
 * XXX(Lumirelle): In Nitro 3 / Nuxt 5, `app.config.ts`, `defineAppConfig`, and `useAppConfig` seem no longer supported. Maybe we should prepare to migrate to a new way?
 */
const { colorThemeDark, colorThemeLight } = useAppConfig()
/**
 * Switching the theme color.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/theme-color
 */
useHead({
  meta: [
    {
      id: 'theme-color',
      name: 'theme-color',
      content: (): string => (color.value === 'dark' ? colorThemeDark : colorThemeLight),
    },
  ],
})

function toggleDark(): void {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <i
    class="i-carbon-sun dark:i-carbon-moon h-[1em] w-[1em] cursor-pointer !outline-none"
    @click="toggleDark"
  />
</template>
