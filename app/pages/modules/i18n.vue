<script lang="ts" setup>
const { t } = useLocalI18n()

useHead({
  title: t('title'),
})
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
  title: I18n
  description: This page is in English.
zh:
  title: 国际化
  description: 本页面是中文的。
</i18n>
