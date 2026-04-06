<script lang="ts" setup>
/**
 * `definePageMeta` is a compiler macro, so you cannot use dynamic values in it.
 */
definePageMeta({
  layout: 'custom',
})

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
          <code>app/layouts/custom.vue</code>
        </template>
      </I18nT>
      <NuxtLinkLocale to="nuxt-structure-layout-default" btn>
        {{ t('default-layout') }}
      </NuxtLinkLocale>
    </div>
  </PageHomeBase>
</template>

<i18n lang="yaml">
en:
  title: Nuxt Structure / Layouts / Layout Custom
  description: This is a page with the custom layout, which is defined in {code}.
  default-layout: Default layout
zh:
  title: Nuxt 结构 / 布局 / 自定义布局
  description: 这是一个使用自定义布局的页面，自定义布局定义在 {code} 中。
  default-layout: 默认布局
</i18n>
