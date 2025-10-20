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
  <div>
    <!-- Use dayjs directly, `<ClientOnly>` is required -->
    <VitesseClientOnly>
      <p>{{ t('dayjsNowIs', { now: dayjs().format('LLdddd LTS') }) }}</p>
    </VitesseClientOnly>
    <!-- Use `<NuxtTime>` component directly -->
    <I18nT keypath="nuxtTimeNowIs" tag="p">
      <template #now>
        <NuxtTime :datetime="dayjs().toISOString()" date-style="full" time-style="full" :locale="locale" />
      </template>
    </I18nT>
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
  title: Day.js Nuxt
  timezone: 'Timezone: { timezone }'
  dayjsNowIs: 'Day.js Now is: { now }'
  nuxtTimeNowIs: 'Nuxt Time Now is: { now }'
  back: '@:global.back'
zh:
  title: Day.js Nuxt
  timezone: '时区：{ timezone }'
  dayjsNowIs: 'Day.js 现在是：{ now }'
  nuxtTimeNowIs: 'Nuxt Time 现在是：{ now }'
  back: '@:global.back'
fr:
  title: Day.js Nuxt
  timezone: 'Fuseau horaire : { timezone }'
  dayjsNowIs: 'Day.js Maintenant : { now }'
  nuxtTimeNowIs: 'Nuxt Time Maintenant : { now }'
  back: '@:global.back'
</i18n>
