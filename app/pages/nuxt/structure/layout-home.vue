<script lang="ts" setup>
/**
 * `definePageMeta` is a compiler macro, so you cannot use dynamic values in it.
 */
definePageMeta({
  layout: 'home',
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
          <code>app/layouts/home.vue</code>
        </template>
      </I18nT>
    </p>
    <NuxtLinkLocale to="nuxt-structure-layout-default" btn>
      {{ t('default-layout') }}
    </NuxtLinkLocale>
  </PageHomeBase>
</template>

<i18n lang="yaml">
en:
  title: Nuxt Structure / Layouts / Layout Home
  description: This is a page with the home layout, which is defined in {code}.
  default-layout: Default layout
zh:
  title: Nuxt 结构 / 布局 / 首页布局
  description: 这是一个使用首页布局的页面，首页布局定义在 {code} 中。
  default-layout: 默认布局
</i18n>
