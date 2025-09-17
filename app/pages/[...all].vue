<script setup lang="ts">
const router = useRouter()

const { t } = useI18n({
  useScope: 'local',
})

useHead({
  title: t('title'),
})
</script>

<template>
  <main p="x4 y10" text="center teal-700 dark:gray-200">
    <div text-4xl>
      <div i-carbon-warning inline-block />
    </div>
    <div>{{ t('notFound') }}</div>
    <div>
      <button text-sm btn m="3 t8" @click="router.back()">
        {{ t('back') }}
      </button>
    </div>
  </main>
</template>

<i18n lang="yaml">
en:
  title: 404 Not found
  notFound: 404 Not found
  back: '@:global.back'
zh:
  title: 404 未找到
  notFound: 404 未找到
  back: '@:global.back'
fr:
  title: 404 Non trouvé
  notFound: 404 Non trouvé
  back: '@:global.back'
</i18n>
