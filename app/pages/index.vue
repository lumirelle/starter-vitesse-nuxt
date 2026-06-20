<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t('seo.home.title'),
})

const online = useOnline()

const navRepository = useNavRepository()
const { data } = await useAsyncData('nav', () => navRepository.get())
</script>

<template>
  <main>
    <div>
      <PageView v-if="online" />
      <div v-else text-gray:80>
        {{ t('status.offline') }}
      </div>

      <AppNav v-if="data?.payload" :items="data.payload.items" />
    </div>
  </main>
</template>
