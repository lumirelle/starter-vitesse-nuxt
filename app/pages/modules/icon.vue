<script setup lang="ts">
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
  <PageHomeBase>
    <div>
      <span i-public-my-icon text="[40px]" title="Icon from `public` folder" />
      <span
        i-carbon-add
        text="[40px]"
        transform
        transition-all-500
        hover:rotate-135
        title="Icon from Iconify"
      />
      <span
        i-carbon-sun
        dark:i-carbon-moon
        text="[40px]"
        title="Icon from Iconify with color mode"
      />
    </div>
  </PageHomeBase>
</template>

<i18n lang="yaml">
en:
  title: UnoCSS Icon
zh:
  title: UnoCSS 图标
</i18n>
