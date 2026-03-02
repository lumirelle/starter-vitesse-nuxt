<script setup lang="ts">
const { data: res } = await useApi('/api/v1/pageview')

const { t } = useI18n({
  useScope: 'local',
})

const time = useTimeAgo(() => res.value?.data?.startAt || 0, {
  messages: {
    justNow: t('justNow'),
    past: (n: any) => (/\d/.test(n) ? t('ago', { time: n }) : n),
    future: (n: any) => (/\d/.test(n) ? t('in', { time: n }) : n),
    month: (n, past) => {
      if (n === 1) {
        return past ? t('lastMonth') : t('nextMonth')
      }
      return t('months', { n })
    },
    year: (n, past) => {
      if (n === 1) {
        return past ? t('lastYear') : t('nextYear')
      }
      return t('years', { n })
    },
    day: (n, past) => {
      if (n === 1) {
        return past ? t('yesterday') : t('tomorrow')
      }
      return t('days', { n })
    },
    week: (n, past) => {
      if (n === 1) {
        return past ? t('lastWeek') : t('nextWeek')
      }
      return t('weeks', { n })
    },
    hour: (n) => t('hours', { n }),
    minute: (n) => t('minutes', { n }),
    second: (n) => t('seconds', { n }),
    invalid: '',
  },
})
</script>

<template>
  <div text-gray:80>
    <span text-gray font-500>{{ res?.data?.pageview }}</span>
    {{ t('pageViews') }}
    <span text-gray>{{ time }}</span>
  </div>
</template>

<i18n lang="yaml">
en:
  pageViews: page views since
  justNow: just now
  ago: '{time} ago'
  in: 'in {time}'
  lastMonth: last month
  nextMonth: next month
  lastYear: last year
  nextYear: next year
  yesterday: yesterday
  tomorrow: tomorrow
  lastWeek: last week
  nextWeek: next week
  months: '{n} month | {n} months'
  years: '{n} year | {n} years'
  days: '{n} day | {n} days'
  weeks: '{n} week | {n} weeks'
  hours: '{n} hour | {n} hours'
  minutes: '{n} minute | {n} minutes'
  seconds: '{n} second | {n} seconds'
zh:
  pageViews: 次浏览，始于
  justNow: 刚刚
  ago: '{time}前'
  in: '{time}后'
  lastMonth: 上个月
  nextMonth: 下个月
  lastYear: 去年
  nextYear: 明年
  yesterday: 昨天
  tomorrow: 明天
  lastWeek: 上周
  nextWeek: 下周
  months: '{n} 个月 | {n} 个月'
  years: '{n} 年 | {n} 年'
  days: '{n} 天 | {n} 天'
  weeks: '{n} 周 | {n} 周'
  hours: '{n} 小时 | {n} 小时'
  minutes: '{n} 分钟 | {n} 分钟'
  seconds: '{n} 秒 | {n} 秒'
</i18n>
