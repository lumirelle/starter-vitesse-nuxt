<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <EntryBase :title="t('title')" :button="[{ text: t('button-text'), path: '/modules/device' }]" />
</template>

<i18n lang="yaml">
en:
  title: To device detection usecase >
  button-text: '@:global.go'
zh:
  title: 前往设备检测用例 >
  button-text: '@:global.go'
</i18n>
