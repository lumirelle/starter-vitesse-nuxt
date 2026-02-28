<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <EntryBase :title="t('title')" :button="[{ text: t('button-text'), path: '/modules/dayjs' }]" />
</template>

<i18n lang="yaml">
en:
  title: To dayjs usecase >
  button-text: '@:global.go'
zh:
  title: 前往 dayjs 用例 >
  button-text: '@:global.go'
</i18n>
