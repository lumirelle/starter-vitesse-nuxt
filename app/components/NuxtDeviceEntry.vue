<script setup lang="ts">
const router = useRouter()

const localePath = useLocalePath()

function go() {
  router.push(localePath('/nuxt-device'))
}

const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <div>
    <p>{{ t('toNuxtDevicePage') }}</p>
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
  toNuxtDevicePage: To `nuxt-device` page >
  button: GO
zh:
  toNuxtDevicePage: 前往 `nuxt-device` 页面 >
  button: 前往
fr:
  toNuxtDevicePage: Aller à la page `nuxt-device` >
  button: Aller
</i18n>
