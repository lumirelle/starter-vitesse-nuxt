<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <EntryBase
    :title="t('title')"
    :button="[{ text: t('button-text'), path: '/nuxt/custom-error' }]"
  />
</template>

<i18n lang="yaml">
en:
  title: To custom error usecase >
  button-text: '@:global.go'
zh:
  title: 前往自定义 error 用例 >
  button-text: '@:global.go'
</i18n>
