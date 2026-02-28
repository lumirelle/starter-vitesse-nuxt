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

const {
  isDesktop,
  isMobile,
  isTablet,
  isIos,
  isWindows,
  isMacOS,
  isLinux,
  isAndroid,
  isChrome,
  isEdge,
  isFirefox,
  isSafari,
  userAgent,
} = useDevice()
</script>

<template>
  <PageHomeBase>
    <div>
      <p>
        userAgent: <span text-amber>{{ userAgent }}</span>
      </p>
      <br />
      <p>
        <I18nT keypath="is-this-device">
          <template #device>
            <span font-bold>Desktop</span>
          </template>
        </I18nT>
        <span text-green>{{ isDesktop }}</span>
      </p>
      <p>
        <I18nT keypath="is-this-device">
          <template #device>
            <span font-bold>Mobile</span>
          </template>
        </I18nT>
        <span text-green>{{ isMobile }}</span>
      </p>
      <p>
        <I18nT keypath="is-this-device">
          <template #device>
            <span font-bold>Tablet</span>
          </template>
        </I18nT>
        <span text-green>{{ isTablet }}</span>
      </p>
      <br />
      <p>
        <I18nT keypath="is-this-device">
          <template #device>
            <span font-bold>Windows</span>
          </template>
        </I18nT>
        <span text-green>{{ isWindows }}</span>
      </p>
      <p>
        <I18nT keypath="is-this-device">
          <template #device>
            <span font-bold>MacOS</span>
          </template>
        </I18nT>
        <span text-green>{{ isMacOS }}</span>
      </p>
      <p>
        <I18nT keypath="is-this-device">
          <template #device>
            <span font-bold>Linux</span>
          </template>
        </I18nT>
        <span text-green>{{ isLinux }}</span>
      </p>
      <p>
        <I18nT keypath="is-this-device">
          <template #device>
            <span font-bold>Android</span>
          </template>
        </I18nT>
        <span text-green>{{ isAndroid }}</span>
      </p>
      <p>
        <I18nT keypath="is-this-device">
          <template #device>
            <span font-bold>iOS</span>
          </template>
        </I18nT>
        <span text-green>{{ isIos }}</span>
      </p>
      <br />
      <p>
        <I18nT keypath="is-this-device">
          <template #device>
            <span font-bold>Chrome</span>
          </template>
        </I18nT>
        <span text-green>{{ isChrome }}</span>
      </p>
      <p>
        <I18nT keypath="is-this-device">
          <template #device>
            <span font-bold>Edge</span>
          </template>
        </I18nT>
        <span text-green>{{ isEdge }}</span>
      </p>
      <p>
        <I18nT keypath="is-this-device">
          <template #device>
            <span font-bold>Firefox</span>
          </template>
        </I18nT>
        <span text-green>{{ isFirefox }}</span>
      </p>
      <p>
        <I18nT keypath="is-this-device">
          <template #device>
            <span font-bold>Safari</span>
          </template>
        </I18nT>
        <span text-green>{{ isSafari }}</span>
      </p>
    </div>
  </PageHomeBase>
</template>

<i18n lang="yaml">
en:
  title: Nuxt Device
  is-this-device: 'Is this device {device}? '
zh:
  title: Nuxt Device
  is-this-device: '这个设备是 {device} 吗？'
</i18n>
