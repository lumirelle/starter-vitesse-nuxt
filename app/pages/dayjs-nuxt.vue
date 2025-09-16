<script setup lang="ts">
definePageMeta({
  layout: 'home',
  title: 'pages.title.dayjsNuxt',
})

const { t } = useI18n({
  useScope: 'local',
})

const dayjs = useDayjs()
</script>

<template>
  <div>
    <ClientOnly>
      <p>{{ t('locale', { locale: dayjs.locale() }) }}</p>
      <p>{{ t('timezone', { timezone: dayjs.tz.guess() }) }}</p>
      <p>{{ t('nowIs', { now: dayjs().format('LLLL') }) }}</p>
      <template #fallback>
        <div op50>
          <span animate-pulse>...</span>
        </div>
      </template>
    </ClientOnly>
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
  locale: "Locale: { locale }"
  timezone: "Timezone: { timezone }"
  nowIs: "Now is: { now }"
  back: "Back"
zh:
  locale: "语言环境：{ locale }"
  timezone: "时区：{ timezone }"
  nowIs: "现在是：{ now }"
  back: "返回"
fr:
  locale: "Langue : { locale }"
  timezone: "Fuseau horaire : { timezone }"
  nowIs: "Maintenant : { now }"
  back: "Retour"
</i18n>
