<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <EntryBase
    :usecase="t('title')"
    :button="[{ text: t('button-text'), route: 'nuxt-prerendering' }]"
  />
</template>

<i18n lang="yaml">
en:
  title: To prerendering usecase >
  button-text: '@:go'
zh:
  title: 前往预渲染用例 >
  button-text: '@:go'
</i18n>
