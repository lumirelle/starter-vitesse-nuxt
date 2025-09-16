<script setup lang="ts">
const router = useRouter()

const localePath = useLocalePath()

function go() {
  router.push(localePath('/nuxt-qrcode'))
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
  toNuxtQrcodePage: To `nuxt-qrcode` page >
  button: GO
zh:
  toNuxtQrcodePage: 前往 `nuxt-qrcode` 页面 >
  button: 前往
fr:
  toNuxtQrcodePage: Aller à la page `nuxt-qrcode` >
  button: Aller
</i18n>
