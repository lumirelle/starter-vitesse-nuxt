<script lang="ts" setup>
const { t } = useLocalI18n()

useHead({
  title: t('title'),
})
</script>

<template>
  <PageHomeBase :title="t('title')">
    <div flex="~ col" gap-4 items-center>
      <I18nT keypath="description" tag="p">
        <template #code>
          <code>app/layouts/default.vue</code>
        </template>
      </I18nT>
      <NuxtLinkLocale to="nuxt-structure-layout-custom" btn>
        {{ t('custom-layout') }}
      </NuxtLinkLocale>
    </div>
  </PageHomeBase>
</template>

<i18n lang="yaml">
en:
  title: Nuxt Structure / Layouts / Layout Default
  description: This is a page with the default layout, which is defined in {code}.
  custom-layout: Custom layout
zh:
  title: Nuxt 结构 / 布局 / 默认布局
  description: 这是一个使用默认布局的页面，默认布局定义在 {code} 中。
  custom-layout: 自定义布局
</i18n>
