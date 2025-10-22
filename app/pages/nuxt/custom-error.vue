<script setup lang="ts">
definePageMeta({
  layout: 'home',
  validate: () => {
    // Always return false to trigger the error page
    return false
  },
})

const { t } = useI18n({
  useScope: 'local',
})

useHead({
  title: t('title'),
})
</script>

<template>
  <div>
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
  title: Custom Error
  back: '@:global.back'
zh:
  title: 自定义 Error
  back: '@:global.back'
</i18n>
