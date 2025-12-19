<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <EntryBase
    :title="t('title')"
    :button="[
      { text: t('button-text-1'), path: '/modules/color-mode/light' },
      { text: t('button-text-2'), path: '/modules/color-mode/dark' },
    ]"
  />
</template>

<i18n lang="yaml">
en:
  title: To color mode usecase >
  button-text-1: '@:global.go - Forced light mode'
  button-text-2: '@:global.go - Forced dark mode'
zh:
  title: 前往颜色模式用例 >
  button-text-1: '@:global.go - 强制亮色模式'
  button-text-2: '@:global.go - 强制暗色模式'
</i18n>
