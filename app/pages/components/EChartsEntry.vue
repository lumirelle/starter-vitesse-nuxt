<script setup lang="ts">
const router = useRouter()

const localePath = useLocalePath()

function goLine() {
  router.push(localePath('/modules/e-charts/line'))
}

function goPie() {
  router.push(localePath('/modules/e-charts/pie'))
}

const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <div>
    <p>{{ t('toNuxtEChartsPage') }}</p>
    <div>
      <button
        text-sm btn m-3
        @click="goLine"
      >
        {{ t('button1') }}
      </button>
      <button
        text-sm btn m-3
        @click="goPie"
      >
        {{ t('button2') }}
      </button>
    </div>
  </div>
</template>

<i18n lang="yaml">
en:
  toNuxtEChartsPage: To ECharts usecase >
  button1: '@:global.go - Line Chart'
  button2: '@:global.go - Pie Chart'
zh:
  toNuxtEChartsPage: 前往 ECharts 用例 >
  button1: '@:global.go - 折线图'
  button2: '@:global.go - 饼图'
</i18n>
