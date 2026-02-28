<script setup lang="ts">
definePageMeta({
  layout: 'home',
})

const { t, locale } = useI18n({
  useScope: 'local',
})

useHead({
  title: t('title'),
})

const dayjs = useDayjs()
</script>

<template>
  <PageHomeBase>
    <div>
      <!-- Use dayjs directly, `<ClientOnly>` is required to avoid hydration mismatch -->
      <VitesseClientOnly>
        <p text-amber>
          {{ t('dayjs-now-is', { now: dayjs().format('LLdddd [at] LTS zzz') }) }}
        </p>
      </VitesseClientOnly>
      <!-- The better solution is to use `<NuxtTime>` component -->
      <I18nT keypath="nuxt-time-now-is" tag="p" text-green>
        <template #now>
          <NuxtTime
            :datetime="dayjs().toString()"
            date-style="full"
            time-style="full"
            :locale="locale"
          />
        </template>
      </I18nT>
    </div>
  </PageHomeBase>
</template>

<i18n lang="yaml">
en:
  title: Day.js Nuxt
  dayjs-now-is: 'Day.js Now is: { now }'
  nuxt-time-now-is: 'Nuxt Time Now is: { now }'
zh:
  title: Day.js Nuxt
  dayjs-now-is: 'Day.js 现在是：{ now }'
  nuxt-time-now-is: 'Nuxt Time 现在是：{ now }'
</i18n>
