<script setup lang="ts">
definePageMeta({
  layout: 'home',
})

const { t } = useI18n({
  useScope: 'local',
})

useHead({
  title: t('title'),
})

const option: ECOption = {
  backgroundColor: 'transparent',
  legend: { top: 20 },
  tooltip: {
    trigger: 'axis',
  },
  dataset: {
    source: [
      ['product', '2020', '2021', '2022', '2023', '2024', '2025'],
      ['Milk Tea', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
      ['Matcha Latte', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
      ['Cheese Cocoa', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
      ['Walnut Brownie', 25.2, 37.1, 41.2, 18, 33.9, 49.1],
    ],
  },
  xAxis: {
    type: 'category',
    triggerEvent: true,
    tooltip: { show: true },
  },
  yAxis: {
    triggerEvent: true,
    tooltip: { show: true },
  },
  series: [
    {
      type: 'line',
      smooth: true,
      seriesLayoutBy: 'row',
      emphasis: { focus: 'series' },
    },
    {
      type: 'line',
      smooth: true,
      seriesLayoutBy: 'row',
      emphasis: { focus: 'series' },
    },
    {
      type: 'line',
      smooth: true,
      seriesLayoutBy: 'row',
      emphasis: { focus: 'series' },
    },
    {
      type: 'line',
      smooth: true,
      seriesLayoutBy: 'row',
      emphasis: { focus: 'series' },
    },
  ],
}
function getPieOption(params: any) {
  const option: ECOption = {
    backgroundColor: 'transparent',
    dataset: { source: [params[0].dimensionNames, params[0].data] },
    series: [
      {
        type: 'pie',
        radius: ['60%', '100%'],
        seriesLayoutBy: 'row',
        itemStyle: {
          borderRadius: 5,
        },
        padAngle: 5,
        label: {
          position: 'center',
          formatter: params[0].name,
        },
      },
    ],
  }
  return option
}
const initOptions = {
  width: 100,
  height: 100,
}
</script>

<template>
  <div>
    <div flex="~ justify-center">
      <VChart :option="option" h-500px w-full>
        <template #tooltip="params">
          <VChart :option="getPieOption(params)" :init-options="initOptions" />
        </template>
      </VChart>
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
  title: ECharts Line Chart
  back: '@:global.back'
zh:
  title: ECharts 折线图
  back: '@:global.back'
</i18n>
