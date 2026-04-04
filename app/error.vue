<!-- This page is base on built-in Nuxt error page, you can customize it to fit your needs -->

<script setup lang="ts">
import type { NuxtError } from '#app'

const { error } = defineProps<{
  error: NuxtError
}>()

const { t } = useI18n({
  useScope: 'local',
})

useHead({
  title: `${error.status} - ${error.statusText || 'Internal Server Error'}`,
})
</script>

<template>
  <div
    class="text-black font-sans px-10 py-12 bg-white flex flex-col min-h-screen antialiased dark:text-white dark:bg-[#020420]"
  >
    <h1 class="text-6xl font-medium mb-4 sm:text-8xl" v-text="error.status" />
    <p class="text-xl leading-tight font-light mb-8 sm:text-2xl">
      <span v-text="error.statusText" />&nbsp;&nbsp;<NuxtLinkLocale to="index" class="underline hover:text-[#00DC82]">
        {{ t('back-to-homepage') }}
      </NuxtLinkLocale>
    </p>
    <a
      href="https://nuxt.com/docs/4.x/getting-started/error-handling?utm_source=nuxt-error-dev-page"
      target="_blank"
      class="text-sm font-medium mx-auto underline-offset-3 inline-block top-6 absolute hover:text-[#00DC82] hover:underline sm:right-6"
    >{{ t('customize-this-page') }}</a>
    <div code-block>
      <pre code-pre v-html="error.stack" />
    </div>
  </div>
</template>

<i18n lang="yaml">
en:
  back-to-homepage: Back to homepage?
  customize-this-page: Customize this page
zh:
  back-to-homepage: 返回首页？
  customize-this-page: 自定义此页面
</i18n>
