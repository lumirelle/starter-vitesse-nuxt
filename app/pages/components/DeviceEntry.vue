<script setup lang="ts">
const router = useRouter()

const localePath = useLocalePath()

function go() {
  router.push(localePath('/modules/device'))
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
  toNuxtDevicePage: To user device detection usecase >
  button: '@:global.go'
zh:
  toNuxtDevicePage: 前往用户设备检测用例 >
  button: '@:global.go'
</i18n>
