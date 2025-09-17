<script lang="ts" setup>
definePageMeta({
  layout: 'home',
  colorMode: 'light',
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
    <p>{{ t('forcedLight') }}</p>
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
  title: Light Mode
  forcedLight: This page is forced to light mode.
  back: '@:global.back'
zh:
  title: 浅色模式
  forcedLight: 本页面被强制为了浅色模式。
  back: '@:global.back'
fr:
  title: Mode Clair
  forcedLight: Cette page est forcée en mode clair.
  back: '@:global.back'
</i18n>
