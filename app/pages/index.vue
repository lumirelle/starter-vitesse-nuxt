<script setup lang="ts">
import ColorModeEntry from './components/ColorModeEntry.vue'
import DayjsEntry from './components/DayjsEntry.vue'
import DeviceEntry from './components/DeviceEntry.vue'
import EChartsEntry from './components/EChartsEntry.vue'
import HiEntry from './components/HiEntry.vue'
import ImageEntry from './components/ImageEntry.vue'
import PageView from './components/PageView.vue'
import QrcodeEntry from './components/QrcodeEntry.vue'
import SvgoEntry from './components/SvgoEntry.vue'
import SwiperEntry from './components/SwiperEntry.vue'

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
    <VitesseClientOnly>
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
    </VitesseClientOnly>
    <div mt-6 flex flex-col gap-6 items-center>
      <!-- Modules -->
      <ColorModeEntry entry />
      <DayjsEntry entry />
      <HiEntry entry />
      <DeviceEntry entry />
      <EChartsEntry entry />
      <ImageEntry entry />
      <QrcodeEntry entry />
      <SvgoEntry entry />
      <SwiperEntry entry />
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
