<script setup lang="ts">
const { t } = useLocalI18n()
</script>

<template>
  <EntryBase :usecase="t('usecase')" url="https://unocss.dev/guide/" :button="{ route: 'modules-unocss' }" />
</template>

<i18n lang="yaml">
en:
  usecase: UnoCSS
zh:
  usecase: UnoCSS
</i18n>
