<script lang="ts" setup>
definePageMeta({
  layout: 'home',
  /**
   * Force dark mode for this page, so that `toggleDark` in `DarkToggle.vue` will
   * not take effect in this page.
   */
  colorMode: 'dark',
})

const { t } = useI18n({
  useScope: 'local',
})

useHead({
  title: t('title'),
})
</script>

<template>
  <div>
    <p>{{ t('forcedDark') }}</p>
    <div>
      <NuxtLinkLocale
        class="text-sm btn m-3"
        to="index"
      >
        {{ t('back') }}
      </NuxtLinkLocale>
    </div>
  </div>
</template>

<i18n lang="yaml">
en:
  title: Dark Mode
  forcedDark: This page is forced to dark mode.
  back: '@:global.back'
zh:
  title: 深色模式
  forcedDark: 本页面被强制为了深色模式。
  back: '@:global.back'
</i18n>
