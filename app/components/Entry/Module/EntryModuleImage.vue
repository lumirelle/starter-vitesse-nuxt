<script setup lang="ts">
const { t } = useLocalI18n()
</script>

<template>
  <EntryBase :usecase="t('usecase')" url="https://image.nuxt.com/get-started/installation" :button="{ route: 'modules-image' }" />
</template>

<i18n lang="yaml">
en:
  usecase: Image
zh:
  usecase: 图片
</i18n>
