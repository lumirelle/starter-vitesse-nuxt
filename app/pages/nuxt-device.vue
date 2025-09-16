<script lang="ts" setup>
definePageMeta({
  layout: 'home',
  title: 'pages.title.nuxtDevice',
})

const { t } = useI18n({
  useScope: 'local',
})

const { isDesktop, isMobile, isTablet, isIos, isWindows, isMacOS, isAndroid } = useDevice()
</script>

<template>
  <div>
    <p>{{ t('isDevice', { device: 'Desktop' }) }} <span text-amber>{{ isDesktop }}</span></p>
    <p>{{ t('isDevice', { device: 'Mobile' }) }} <span text-amber>{{ isMobile }}</span></p>
    <p>{{ t('isDevice', { device: 'Tablet' }) }} <span text-amber>{{ isTablet }}</span></p>
    <p>{{ t('isDevice', { device: 'Ios' }) }} <span text-amber>{{ isIos }}</span></p>
    <p>{{ t('isDevice', { device: 'Windows' }) }} <span text-amber>{{ isWindows }}</span></p>
    <p>{{ t('isDevice', { device: 'MacOS' }) }} <span text-amber>{{ isMacOS }}</span></p>
    <p>{{ t('isDevice', { device: 'Android' }) }} <span text-amber>{{ isAndroid }}</span></p>
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
  isDevice: "Is this device {device}?"
  back: "Back"
zh:
  isDevice: "这个设备是 {device} 吗？"
  back: "返回"
fr:
  isDevice: "Cet appareil est {device} ?"
  back: "Retour"
</i18n>
