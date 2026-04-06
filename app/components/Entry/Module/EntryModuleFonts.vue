<script setup lang="ts">
const { t } = useLocalI18n()
</script>

<template>
  <EntryBase :usecase="t('usecase')" url="https://fonts.nuxt.com/get-started/installation" :button="{ route: 'modules-fonts' }" />
</template>

<i18n lang="yaml">
en:
  usecase: Fonts
zh:
  usecase: 字体
</i18n>
