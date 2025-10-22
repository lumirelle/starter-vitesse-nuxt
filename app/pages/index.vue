<script setup lang="ts">
import ColorModeEntry from './components/modules/ColorModeEntry.vue'
import DayjsEntry from './components/modules/DayjsEntry.vue'
import DeviceEntry from './components/modules/DeviceEntry.vue'
import EChartsEntry from './components/modules/EChartsEntry.vue'
import ImageEntry from './components/modules/ImageEntry.vue'
import PiniaEntry from './components/modules/PiniaEntry.vue'
import QrcodeEntry from './components/modules/QrcodeEntry.vue'
import SvgoEntry from './components/modules/SvgoEntry.vue'
import SwiperEntry from './components/modules/SwiperEntry.vue'
import CustomErrorEntry from './components/nuxt/CustomErrorEntry.vue'
import CustomFetchEntry from './components/nuxt/CustomFetchEntry.vue'
import PageView from './components/PageView.vue'

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
        <CustomErrorEntry entry />
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
