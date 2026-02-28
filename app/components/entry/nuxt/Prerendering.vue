<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <EntryBase
    :title="t('title')"
    :button="[{ text: t('button-text'), path: '/nuxt/prerendering' }]"
  />
</template>

<i18n lang="yaml">
en:
  title: To prerendering usecase >
  button-text: '@:global.go'
zh:
  title: 前往预渲染用例 >
  button-text: '@:global.go'
</i18n>
