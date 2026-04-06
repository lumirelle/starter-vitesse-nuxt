<script setup lang="ts">
const { t } = useLocalI18n()
</script>

<template>
  <EntryBase :usecase="t('usecase')" url="https://i18n.nuxtjs.org/docs/getting-started" :button="{ route: 'modules-i18n' }" />
</template>

<i18n lang="yaml">
en:
  usecase: I18n
zh:
  usecase: 国际化
</i18n>
