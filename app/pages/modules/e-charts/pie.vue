<script setup lang="ts">
import type { ECSSRClientEventParams } from 'echarts/ssr/client/index'

definePageMeta({
  layout: 'home',
})

const { t } = useI18n({
  useScope: 'local',
})

useHead({
  title: t('title'),
})

const option = ref({
  backgroundColor: 'transparent',
  legend: {
    top: '5%',
    left: 'center',
    selected: {
      'Search Engine': true,
      Direct: true,
      Email: true,
      'Union Ads': true,
      'Video Ads': true,
    },
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['30%', '70%'],
      roseType: 'angle',
      itemStyle: {
        borderRadius: [20, 5, 5, 10],
      },
      label: {
        show: false,
      },
      data: [
        { value: 800, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 400, name: 'Video Ads' },
      ],
    },
  ],
})

function onClick(params: ECSSRClientEventParams) {
  if (params.ssrType === 'legend') {
    const key = Object.keys(option.value.legend.selected)[
      params.dataIndex!
    ] as keyof typeof option.value.legend.selected
    option.value.legend.selected[key] = !option.value.legend.selected[key]
  }
}
</script>

<template>
  <PageHomeBase>
    <div flex="~ justify-center">
      <!-- We have to specify the `height` and `width` property in `init-options` for SVG. -->
      <VChartLight :init-options="{ height: 400, width: 1200 }" :option="option" @click="onClick" />
    </div>
  </PageHomeBase>
</template>

<i18n lang="yaml">
en:
  title: ECharts Pie Chart
zh:
  title: ECharts 饼图
</i18n>
