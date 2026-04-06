<script setup lang="ts">
const { t } = useLocalI18n()

useHead({
  title: t('title'),
})
</script>

<template>
  <PageHomeBase :title="t('title')">
    <div flex="~ col" gap-4 items-center>
      <div>
        {{ t('description') }}
      </div>
      <div>
        <span i-public-my-icon text-4xl title="Icon from `public` folder" />
        <span i-carbon-add text-4xl transform transition-all-500 hover:rotate-135 title="Icon from Iconify" />
        <span i-carbon-sun dark:i-carbon-moon text-4xl title="Icon from Iconify with color mode" />
      </div>
    </div>
  </PageHomeBase>
</template>

<i18n lang="yaml">
en:
  title: UnoCSS
  description: UnoCSS rules + icons + transforms.
zh:
  title: UnoCSS
  description: UnoCSS 规则 + 图标 + 变换。
</i18n>
