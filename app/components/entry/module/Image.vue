<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <EntryBase
    :title="t('title')"
    :button="[{ text: t('button-text'), path: '/modules/image' }]"
  />
</template>

<i18n lang="yaml">
en:
  title: To {'@'}nuxt/image usecase >
  button-text: '@:global.go'
zh:
  title: 前往 {'@'}nuxt/image 用例 >
  button-text: '@:global.go'
</i18n>
