<script lang="ts" setup>
definePageMeta({
  /** Force using dark mode on this page. */
  colorMode: 'dark',
})

const { t } = useLocalI18n()

useHead({
  title: t('title'),
})
</script>

<template>
  <PageHomeBase :title="t('title')">
    <div flex="~ col" gap-4 items-center>
      <p>
        {{ t('description') }}
      </p>
      <NuxtLinkLocale to="modules-color-mode-light" btn>
        {{ t('light-mode') }}
      </NuxtLinkLocale>
    </div>
  </PageHomeBase>
</template>

<i18n lang="yaml">
en:
  title: Dark Mode
  description: This page is forced to dark mode.
  light-mode: Light Mode
zh:
  title: 深色模式
  description: 本页面被强制为了深色模式。
  light-mode: 浅色模式
</i18n>
