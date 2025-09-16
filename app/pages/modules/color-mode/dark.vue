<script lang="ts" setup>
definePageMeta({
  layout: 'home',
  title: 'pages.title.darkMode',
  colorMode: 'dark',
})

const { t } = useI18n({
  useScope: 'local',
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
  forcedDark: This page is forced to dark mode.
  back: Back
zh:
  forcedDark: 本页面被强制为了深色模式。
  back: 返回
fr:
  forcedDark: Cette page est forcée en mode sombre.
  back: Retour
</i18n>
