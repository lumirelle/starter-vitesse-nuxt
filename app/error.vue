<!-- This page is base on built-in Nuxt error page, you can customize it to fit your needs -->

<script setup lang="ts">
import type { NuxtError } from '#app'
import { useHead } from '#imports'

const props = defineProps<{
  error: NuxtError
}>()
useHead({
  title: `${props.error.statusCode} - ${props.error.statusMessage || 'Internal Server Error'}`,
})
</script>

<template>
  <div class="text-black font-sans px-10 pt-12 bg-white flex flex-col min-h-screen antialiased dark:text-white dark:bg-[#020420]">
    <h1 class="text-6xl font-medium mb-4 sm:text-8xl" v-text="error.statusCode" /><p class="text-xl leading-tight font-light mb-8 sm:text-2xl" v-text="error.statusMessage" /><a href="https://nuxt.com/docs/4.x/getting-started/error-handling?utm_source=nuxt-error-dev-page" target="_blank" class="text-sm font-medium mx-auto underline-offset-3 inline-block top-6 absolute hover:text-[#00DC82] hover:underline sm:right-6">Customize this page</a><div class="border border-b-0 border-black/5 rounded-t-md bg-gray-50/50 flex-1 h-auto overflow-y-auto dark:border-white/10 dark:bg-white/5">
      <div class="text-xl leading-tight font-light p-8 z-10" v-html="error.stack" />
    </div>
  </div>
</template>
