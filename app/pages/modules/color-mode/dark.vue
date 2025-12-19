<script lang="ts" setup>
definePageMeta({
  layout: 'home',
  /**
   * Force using dark mode on this page.
   */
  colorMode: 'dark',
})

const { t } = useI18n({
  useScope: 'local',
})

useHead({
  title: t('title'),
})
</script>

<template>
  <PageHomeBase>
    <div>
      <p>{{ t('forced-dark') }}</p>
    </div>
  </PageHomeBase>
</template>

<i18n lang="yaml">
en:
  title: Dark Mode
  forced-dark: This page is forced to dark mode.
zh:
  title: 深色模式
  forced-dark: 本页面被强制为了深色模式。
</i18n>
