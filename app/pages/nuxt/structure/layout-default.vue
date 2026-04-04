<script lang="ts" setup>
/**
 * `definePageMeta` is a compiler macro, so you cannot use dynamic values in it.
 */
definePageMeta({
  layout: 'default',
})

const { t } = useI18n({
  useScope: 'local',
})

useHead({
  title: t('title'),
})
</script>

<template>
  <PageHomeBase :title="t('title')">
    <p mb-4>
      <I18nT keypath="description" tag="span">
        <template #code>
          <code>app/layouts/default.vue</code>
        </template>
      </I18nT>
    </p>
    <NuxtLinkLocale to="nuxt-structure-layout-home" btn>
      {{ t('home-layout') }}
    </NuxtLinkLocale>
  </PageHomeBase>
</template>

<i18n lang="yaml">
en:
  title: Nuxt Structure / Layouts / Layout Default
  description: This is a page with the default layout, which is defined in {code}.
  home-layout: Home layout
zh:
  title: Nuxt 结构 / 布局 / 默认布局
  description: 这是一个使用默认布局的页面，默认布局定义在 {code} 中。
  home-layout: 首页布局
</i18n>
