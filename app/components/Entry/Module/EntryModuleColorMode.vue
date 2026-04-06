<script setup lang="ts">
const { t } = useLocalI18n()
</script>

<template>
  <EntryBase :usecase="t('usecase')" url="https://color-mode.nuxtjs.org/getting-started" :button="{ route: 'modules-color-mode-light' }" />
</template>

<i18n lang="yaml">
en:
  usecase: Color Mode
zh:
  usecase: 颜色模式
</i18n>
