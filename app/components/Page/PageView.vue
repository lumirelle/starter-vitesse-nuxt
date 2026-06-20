<!-- A component to show how many page views a user has -->

<script setup lang="ts">
const pageviewRepository = usePageviewRepository()
const { data } = await useAsyncData('pageview', () => pageviewRepository.get())

const { t } = useI18n()

const time = useTimeAgo(() => data.value?.payload?.startAt || 0)
</script>

<template>
  <div text="gray:80 center">
    <span text-gray font-500>{{ data?.payload?.pageview }}</span>
    {{ t('page.views_since') }}
    <span text-gray>{{ time }}</span>
  </div>
</template>
