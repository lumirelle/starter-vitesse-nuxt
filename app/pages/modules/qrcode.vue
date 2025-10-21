<script lang="ts" setup>
import type { SVGVariant } from 'nuxt-qrcode'

definePageMeta({
  layout: 'home',
})

const { t } = useI18n({
  useScope: 'local',
})

useHead({
  title: t('title'),
})

const variant = ref<SVGVariant>('default')
const radius = ref(0)
</script>

<template>
  <div>
    <div flex gap-10 justify-center>
      <label>
        {{ t('variant') }}
        <select v-model="variant" select m="l-2">
          <option value="default">
            {{ t('variants.default') }}
          </option>
          <option value="dots">
            {{ t('variants.dots') }}
          </option>
          <option value="rounded">
            {{ t('variants.rounded') }}
          </option>
          <option value="pixelated">
            {{ t('variants.pixelated') }}
          </option>
          <option value="circle">
            {{ t('variants.circle') }}
          </option>
        </select>
      </label>

      <label>
        {{ t('radius') }}
        <select v-model.number="radius" select m="l-2">
          <option value="0">
            {{ t('radiusOptions.0') }}
          </option>
          <option value="1">
            {{ t('radiusOptions.1') }}
          </option>
        </select>
      </label>
    </div>

    <div mb-4 mt-4 flex justify-center>
      <Qrcode value="https://qrcode.s94.dev" :variant="variant" :radius="radius" width="200" height="200" />
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
  title: Nuxt QRCode
  variant: 'Variant: '
  variants:
    default: Default
    dots: Dots
    rounded: Rounded
    pixelated: Pixelated
    circle: Circle
  radius: 'Radius (No effect on `default` & `pixelated` variant):'
  radiusOptions:
    0: Disable
    1: Enable
  back: '@:global.back'
zh:
  title: Nuxt QRCode
  variant: '变种：'
  variants:
    default: 默认
    dots: 点状
    rounded: 圆角
    pixelated: 像素化
    circle: 圆形
  radius: '圆角 (对 `默认` 和 `像素化` 无效):'
  radiusOptions:
    0: 禁用
    1: 启用
  back: '@:global.back'
</i18n>
