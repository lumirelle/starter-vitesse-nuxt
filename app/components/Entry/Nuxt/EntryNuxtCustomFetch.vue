<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <EntryBase
    :usecase="t('title')"
    :button="[{ text: t('button-text'), route: 'nuxt-custom-fetch' }]"
  />
</template>

<i18n lang="yaml">
en:
  title: To custom fetch usecase >
  button-text: '@:go'
zh:
  title: 前往自定义 fetch 用例 >
  button-text: '@:go'
</i18n>
