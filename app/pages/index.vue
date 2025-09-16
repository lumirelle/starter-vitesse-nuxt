<script setup lang="ts">
definePageMeta({
  layout: 'home',
  title: 'pages.title.index',
})

const { t } = useI18n({
  useScope: 'local',
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
    <div>
      <InputEntry entry />
      <NuxtImageEntry entry />
      <ColorModeEntry entry />
      <NuxtDeviceEntry entry />
      <NuxtSvgoEntry entry />
      <DayjsNuxtEntry entry />
      <NuxtQrcodeEntry entry />
    </div>
  </div>
</template>

<i18n lang="yaml">
en:
  offline: "You're offline"
  loading: "Loading..."
zh:
  offline: "你已离线"
  loading: "加载中..."
fr:
  offline: "Vous êtes hors ligne"
  loading: "Chargement..."
</i18n>
