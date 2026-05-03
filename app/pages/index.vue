<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t('seo.home.title'),
})

const online = useOnline()

const navStore = useNavStore()
</script>

<template>
  <main>
    <div>
      <PageView v-if="online" />
      <div v-else text-gray:80>
        {{ t('status.offline') }}
      </div>
      <AppNav v-if="navStore.navData" :items="navStore.navData.items" />
    </div>
  </main>
</template>
