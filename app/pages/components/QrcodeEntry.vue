<script setup lang="ts">
const router = useRouter()

const localePath = useLocalePath()

function go() {
  router.push(localePath('/modules/qrcode'))
}

const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <div>
    <p>{{ t('toNuxtQrcodePage') }}</p>
    <div>
      <button
        text-sm btn m-3
        @click="go"
      >
        {{ t('button') }}
      </button>
    </div>
  </div>
</template>

<i18n lang="yaml">
en:
  toNuxtQrcodePage: To QRCode usecase >
  button: '@:global.go'
zh:
  toNuxtQrcodePage: 前往 QRCode 用例 >
  button: '@:global.go'
</i18n>
