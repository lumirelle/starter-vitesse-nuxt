<script lang="ts" setup>
definePageMeta({
  layout: 'home',
})

const { t } = useI18n({
  useScope: 'local',
})

useHead({
  title: t('title'),
})

const { isDesktop, isMobile, isTablet, isIos, isWindows, isMacOS, isAndroid, userAgent } = useDevice()
</script>

<template>
  <div>
    <div m-auto text-left w-fit>
      <p>userAgent: <span text-amber>{{ userAgent }}</span></p>
      <br>
      <p>{{ t('isDevice', { device: 'Desktop' }) }} <span text-green>{{ isDesktop }}</span></p>
      <p>{{ t('isDevice', { device: 'Mobile' }) }} <span text-green>{{ isMobile }}</span></p>
      <p>{{ t('isDevice', { device: 'Tablet' }) }} <span text-green>{{ isTablet }}</span></p>
      <p>{{ t('isDevice', { device: 'Ios' }) }} <span text-green>{{ isIos }}</span></p>
      <p>{{ t('isDevice', { device: 'Windows' }) }} <span text-green>{{ isWindows }}</span></p>
      <p>{{ t('isDevice', { device: 'MacOS' }) }} <span text-green>{{ isMacOS }}</span></p>
      <p>{{ t('isDevice', { device: 'Android' }) }} <span text-green>{{ isAndroid }}</span></p>
    </div>
    <div>
      <NuxtLinkLocale
        class="text-sm btn m-3"
        to="index"
      >
        {{ t('back') }}
      </NuxtLinkLocale>
    </div>
  </div>
</template>

<i18n lang="yaml">
en:
  title: Nuxt Device
  isDevice: 'Is this device {device}?'
  back: '@:global.back'
zh:
  title: Nuxt Device
  isDevice: '这个设备是 {device} 吗？'
  back: '@:global.back'
</i18n>
