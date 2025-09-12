<script lang="ts" setup>
definePageMeta({
  layout: 'home',
  title: 'pages.title.lightMode',
  colorMode: 'light',
})

const { t } = useI18n({
  useScope: 'local',
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
  forcedLight: This page is forced to light mode.
  back: Back
zh:
  forcedLight: 本页面被强制为了浅色模式。
  back: 返回
fr:
  forcedLight: Cette page est forcée en mode clair.
  back: Retour
</i18n>
