<script setup lang="ts">
definePageMeta({
  title: 'pages.title.notFound',
})

const router = useRouter()

const { t } = useI18n({
  useScope: 'local',
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
  notFound: "404 Not found"
  back: "Back"
zh:
  notFound: "404 未找到"
  back: "返回"
fr:
  notFound: "404 Non trouvé"
  back: "Retour"
</i18n>
