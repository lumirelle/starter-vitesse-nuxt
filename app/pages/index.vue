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
</script>

<template>
  <div>
    <Logos mb-6 />
    <ClientOnly>
      <Suspense>
        <PageView v-if="online" />
        <div v-else text-gray:80>
          {{ t('offline') }}
        </div>
        <template #fallback>
          <div op50 italic>
            <span animate-pulse>{{ t('loading') }}</span>
          </div>
        </template>
      </Suspense>
      <template #fallback>
        <div op50>
          <span animate-pulse>...</span>
        </div>
      </template>
    </ClientOnly>
    <div mt-6 flex flex-col gap-6 items-center>
      <!-- Modules -->
      <ModulesColorModeEntry entry />
      <ModulesDayjsEntry entry />
      <ModulesHiEntry entry />
      <ModulesDeviceEntry entry />
      <ModulesEChartsEntry entry />
      <ModulesImageEntry entry />
      <ModulesQrcodeEntry entry />
      <ModulesSvgoEntry entry />
      <ModulesSwiperEntry entry />
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
fr:
  title: Accueil
  offline: Vous êtes hors ligne
  loading: Chargement...
</i18n>
