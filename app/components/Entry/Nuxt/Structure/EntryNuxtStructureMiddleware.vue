<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <EntryBase
    :usecase="t('usecase')" url="https://nuxt.com/docs/4.x/directory-structure/app/middleware" :button="{ route: 'nuxt-structure-middleware-abort' }"
  />
</template>

<i18n lang="yaml">
en:
  usecase: Nuxt Structure / Middleware
zh:
  usecase: Nuxt 结构 / 中间件
</i18n>
