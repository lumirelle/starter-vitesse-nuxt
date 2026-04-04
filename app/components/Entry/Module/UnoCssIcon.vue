<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <EntryBase :usecase="t('title')" :button="[{ text: t('button-text'), route: 'modules-icon' }]" />
</template>

<i18n lang="yaml">
en:
  title: To UnoCSS Icon usecase >
  button-text: '@:go'
zh:
  title: 前往 UnoCSS Icon 用例 >
  button-text: '@:go'
</i18n>
