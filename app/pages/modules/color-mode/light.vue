<script lang="ts" setup>
definePageMeta({
  /** Force using light mode on this page. */
  colorMode: 'light',
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
      <NuxtLinkLocale to="modules-color-mode-dark" btn>
        {{ t('dark-mode') }}
      </NuxtLinkLocale>
    </div>
  </PageHomeBase>
</template>

<i18n lang="yaml">
en:
  title: Light Mode
  description: this page is forced to light mode.
  dark-mode: Dark Mode
zh:
  title: 浅色模式
  description: 本页面被强制为了浅色模式。
  dark-mode: 深色模式
</i18n>
