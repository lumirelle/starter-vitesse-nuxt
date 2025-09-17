<script setup lang="ts">
const router = useRouter()

const localePath = useLocalePath()

function go() {
  router.push(localePath('modules-device'))
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
  toNuxtDevicePage: To `{'@'}nuxtjs/device` usecase >
  button: '@:global.go'
zh:
  toNuxtDevicePage: 前往 `{'@'}nuxtjs/device` 用例 >
  button: '@:global.go'
fr:
  toNuxtDevicePage: Aller à la utilisation de `{'@'}nuxtjs/device` >
  button: '@:global.go'
</i18n>
