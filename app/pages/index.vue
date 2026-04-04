<script setup lang="ts">
defineOgImage('NuxtSeo.takumi')

definePageMeta({
  layout: 'home',
})

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
    <PresetClientOnly>
      <Suspense>
        <div>
          <PageView v-if="online" />
          <div v-else text-gray:80>
            {{ t('offline') }}
          </div>
          <AppNav v-if="navStore.navData" :items="navStore.navData.items" />
        </div>
        <template #fallback>
          <div op50 italic>
            <span animate-pulse>{{ t('loading') }}</span>
          </div>
        </template>
      </Suspense>
    </PresetClientOnly>
    <div mt-6 flex flex-col gap-6 items-center>
      <ContentSection title="Nuxt">
        <EntryNuxtLayout />
        <EntryNuxtCreateError />
        <EntryNuxtCustomFetch />
        <EntryNuxtPrerendering />
      </ContentSection>
      <ContentSection title="Nuxt Modules -- UI">
        <EntryModuleUnoCssIcon />
        <EntryModuleImage />
        <EntryModuleColorMode />
      </ContentSection>
      <ContentSection title="Nuxt Modules -- Utilities">
        <EntryModulePinia />
      </ContentSection>
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
