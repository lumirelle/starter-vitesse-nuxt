<script lang="ts" setup>
definePageMeta({
  layout: 'home',
  /**
   * Force using dark mode on this page.
   */
  colorMode: 'light',
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
      <p>{{ t('forced-light') }}</p>
    </div>
  </PageHomeBase>
</template>

<i18n lang="yaml">
en:
  title: light mode
  forced-light: this page is forced to light mode.
zh:
  title: 浅色模式
  forced-light: 本页面被强制为了浅色模式。
</i18n>
