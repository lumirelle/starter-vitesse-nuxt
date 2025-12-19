<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <EntryBase
    :title="t('title')"
    :button="[{ text: t('button-text'), path: '/modules/swiper' }]"
  />
</template>

<i18n lang="yaml">
en:
  title: To Swiper usecase >
  button-text: '@:global.go'
zh:
  title: 前往轮播图用例 >
  button-text: '@:global.go'
</i18n>
