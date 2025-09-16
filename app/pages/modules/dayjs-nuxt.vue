<script setup lang="ts">
definePageMeta({
  layout: 'home',
  title: 'pages.title.dayjsNuxt',
})

const { t, locale } = useI18n({
  useScope: 'local',
})

const dayjs = useDayjs()
</script>

<template>
  <div>
    <!-- Use dayjs directly, `<ClientOnly>` is required -->
    <ClientOnlyWithFallback>
      <p>{{ t('dayjsNowIs', { now: dayjs().format('LLdddd LTS') }) }}</p>
    </ClientOnlyWithFallback>
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
  timezone: "Timezone: { timezone }"
  dayjsNowIs: "Day.js Now is: { now }"
  nuxtTimeNowIs: "Nuxt Time Now is: { now }"
  back: "Back"
zh:
  timezone: "时区：{ timezone }"
  dayjsNowIs: "Day.js 现在是：{ now }"
  nuxtTimeNowIs: "Nuxt Time 现在是：{ now }"
  back: "返回"
fr:
  timezone: "Fuseau horaire : { timezone }"
  dayjsNowIs: "Day.js Maintenant : { now }"
  nuxtTimeNowIs: "Nuxt Time Maintenant : { now }"
  back: "Retour"
</i18n>
