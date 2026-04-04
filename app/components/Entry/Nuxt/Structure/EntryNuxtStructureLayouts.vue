<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <EntryBase
    :usecase="t('usecase')" url="https://nuxt.com/docs/4.x/directory-structure/app/layouts" :button="{ route: 'nuxt-structure-layout-default' }"
  />
</template>

<i18n lang="yaml">
en:
  usecase: Nuxt Structure / Layouts
zh:
  usecase: Nuxt 结构 / 布局
</i18n>
