<script setup lang="ts">
const router = useRouter()

const localePath = useLocalePath()

function goLine() {
  router.push(localePath('modules-e-charts-line'))
}

function goPie() {
  router.push(localePath('modules-e-charts-pie'))
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
  toNuxtEChartsPage: To `nuxt-e-charts` page >
  button1: GO Line Chart
  button2: GO Pie Chart
zh:
  toNuxtEChartsPage: 前往 `nuxt-e-charts` 页面 >
  button1: 前往折线图
  button2: 前往饼图
fr:
  toNuxtEChartsPage: Aller à la page `nuxt-e-charts` >
  button1: Aller au graphique linéaire
  button2: Aller au graphique circulaire
</i18n>
