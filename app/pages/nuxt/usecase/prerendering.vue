<script lang="ts" setup>
defineRouteRules({
  prerender: true,
})

const { t } = useLocalI18n()
</script>

<template>
  <PageHomeBase :title="t('title')">
    <p text-center>
      {{ t('description') }}
    </p>
  </PageHomeBase>
</template>

<i18n lang="yaml">
en:
  title: Nuxt Usecase / Prerendering
  description: This is a prerendering page, which is generated at build time and served as a static HTML file. This is useful for improving SEO.
zh:
  title: Nuxt 用例 / 预渲染
  description: 这是一个预渲染页面，在构建时生成并作为静态 HTML 文件提供。这对改善 SEO 有用。
</i18n>
