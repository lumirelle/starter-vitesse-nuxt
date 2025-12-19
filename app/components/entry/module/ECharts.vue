<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <EntryBase
    :title="t('title')"
    :button="[
      { text: t('button-text-1'), path: '/modules/e-charts/line' },
      { text: t('button-text-2'), path: '/modules/e-charts/pie' },
    ]"
  />
</template>

<i18n lang="yaml">
en:
  title: To ECharts usecase >
  button-text-1: '@:global.go - Line Chart'
  button-text-2: '@:global.go - Pie Chart'
zh:
  title: 前往 ECharts 用例 >
  button-text-1: '@:global.go - 折线图'
  button-text-2: '@:global.go - 饼图'
</i18n>
