<script setup lang="ts">
const { t } = useLocalI18n()
</script>

<template>
  <EntryBase :usecase="t('usecase')" url="https://nuxt.com/docs/4.x/getting-started/prerendering" :button="{ route: 'nuxt-usecase-prerendering' }" />
</template>

<i18n lang="yaml">
en:
  usecase: Nuxt Usecase / Prerendering
zh:
  usecase: Nuxt 用例 / 预渲染
</i18n>
