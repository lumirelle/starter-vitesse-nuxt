<script setup lang="ts">
defineOgImage('NuxtSeo.takumi')

definePageMeta({
  layout: 'home',
})

const { t } = useLocalI18n()

useHead({
  title: t('title'),
})

const online = useOnline()

const navStore = useNavStore()
</script>

<template>
  <main>
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
    <div mt-6 flex="~ col" gap-6 items-center>
      <ContentSection title="Nuxt">
        <EntryNuxtStructureLayouts />
        <EntryNuxtStructureMiddleware />
        <EntryNuxtApiShowError />
        <EntryNuxtApiCreateUseFetch />
        <EntryNuxtUsecasePrerendering />
      </ContentSection>
      <ContentSection title="Nuxt Modules -- UI">
        <EntryModuleUnocss />
        <EntryModuleFonts />
        <EntryModuleImage />
        <EntryModuleColorMode />
        <EntryModuleI18n />
      </ContentSection>
      <ContentSection title="Nuxt Modules -- Utilities">
        <EntryModulePinia />
      </ContentSection>
    </div>
  </main>
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
