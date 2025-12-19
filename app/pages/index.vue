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
      <Section title="Nuxt">
        <EntryNuxtCustomError entry />
        <EntryNuxtCustomFetch entry />
      </Section>
      <Section title="Nuxt Modules -- UI">
        <EntryModuleUnoCssIcon entry />
        <EntryModuleImage entry />
        <EntryModuleColorMode entry />
        <EntryModuleDevice entry />
        <EntryModuleSwiper entry />
        <EntryModuleECharts entry />
        <EntryModuleQrCode entry />
      </Section>
      <Section title="Nuxt Modules -- Utilities">
        <EntryModulePinia entry />
        <EntryModuleDayjs entry />
      </Section>
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
