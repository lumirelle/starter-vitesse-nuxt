<script setup lang="ts">
import ColorModeEntry from './components/ColorModeEntry.vue'
import CustomFetchEntry from './components/CustomFetchEntry.vue'
import DayjsEntry from './components/DayjsEntry.vue'
import DeviceEntry from './components/DeviceEntry.vue'
import EChartsEntry from './components/EChartsEntry.vue'
import ImageEntry from './components/ImageEntry.vue'
import PageView from './components/PageView.vue'
import PiniaEntry from './components/PiniaEntry.vue'
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
        <CustomFetchEntry entry />
      </section>
      <!-- Modules -->
      <section>
        <ColorModeEntry entry />
        <DayjsEntry entry />
        <DeviceEntry entry />
        <EChartsEntry entry />
        <ImageEntry entry />
        <PiniaEntry entry />
        <QrcodeEntry entry />
        <SvgoEntry entry />
        <SwiperEntry entry />
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
