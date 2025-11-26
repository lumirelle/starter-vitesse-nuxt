<script setup lang="ts">
definePageMeta({
  layout: 'home',
})

defineOgImageComponent('NuxtSeo')

const { t } = useI18n({
  useScope: 'local',
})

useHead({
  title: t('title'),
})

const online = useOnline()

const navStore = useNavStore()
</script>

<template>
  <div>
    <Logos mb-6 />
    <VitesseClientOnly>
      <Suspense>
        <div>
          <PageView v-if="online" />
          <div v-else text-gray:80>
            {{ t('offline') }}
          </div>
          <Nav v-if="navStore.navData" :items="navStore.navData.items" />
        </div>
        <template #fallback>
          <div op50 italic>
            <span animate-pulse>{{ t('loading') }}</span>
          </div>
        </template>
      </Suspense>
    </VitesseClientOnly>
    <div mt-6 flex flex-col gap-6 items-center>
      <!-- Nuxt -->
      <section>
        <EntryCustomError entry />
        <EntryCustomFetch entry />
      </section>
      <!-- Modules -->
      <section>
        <EntryColorMode entry />
        <EntryDayjs entry />
        <EntryDevice entry />
        <EntryECharts entry />
        <EntryImage entry />
        <EntryPinia entry />
        <EntryQrCode entry />
        <EntrySvgo entry />
        <EntrySwiper entry />
      </section>
    </div>
  </div>
</template>

<i18n lang="yaml">
en:
  title: Home
  offline: You're offline
  loading: Loading...
zh:
  title: 首页
  offline: 你已离线
  loading: 加载中...
</i18n>
