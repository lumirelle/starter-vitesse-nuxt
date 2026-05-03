<!-- A component to show how many page views a user has -->

<script setup lang="ts">
const { data: res } = await useFetch('/api/v1/pageview')

const { t } = useI18n()

const NUMBER_REGEX = /\d/
const time = useTimeAgo(() => res.value?.data?.startAt || 0, {
  messages: {
    justNow: t('time.just_now'),
    past: (n: any) => (NUMBER_REGEX.test(n) ? t('time.ago', { time: n }) : n),
    future: (n: any) => (NUMBER_REGEX.test(n) ? t('time.in', { time: n }) : n),
    month: (n, past) => {
      if (n === 1) {
        return past ? t('time.last_month') : t('time.next_month')
      }
      return t('time.months', { n })
    },
    year: (n, past) => {
      if (n === 1) {
        return past ? t('time.last_year') : t('time.next_year')
      }
      return t('time.years', { n })
    },
    day: (n, past) => {
      if (n === 1) {
        return past ? t('time.yesterday') : t('time.tomorrow')
      }
      return t('time.days', { n })
    },
    week: (n, past) => {
      if (n === 1) {
        return past ? t('time.last_week') : t('time.next_week')
      }
      return t('time.weeks', { n })
    },
    hour: n => t('time.hours', { n }),
    minute: n => t('time.minutes', { n }),
    second: n => t('time.seconds', { n }),
    invalid: '',
  },
})
</script>

<template>
  <div text="gray:80 center">
    <span text-gray font-500>{{ res?.data?.pageview }}</span>
    {{ t('page.views_since') }}
    <span text-gray>{{ time }}</span>
  </div>
</template>
