<script setup lang="ts">
const route = useRoute<'hi-id'>()
const user = useUserStore()
const name = route.params.id

watchEffect(() => {
  user.setNewName(route.params.id)
})

definePageMeta({
  layout: 'home',
})

/**
 * Inline route rules, requires `experimental.inlineRouteRules`.
 */
defineRouteRules({
  /**
   * Prevent indexing of these dynamic hi pages.
   */
  robots: {
    noindex: true,
    nofollow: true,
    noai: true,
  },
})

const { t } = useI18n({
  useScope: 'local',
})

useHead({
  title: t('title'),
})
</script>

<template>
  <PageHomeBase>
    <div i-twemoji:waving-hand text-4xl animate-shake-x animate-duration-5000 />
    <h3 text-2xl font-500>
      {{ t('hi') }}
    </h3>
    <div text-xl>
      {{ t('name', { name }) }}
    </div>
    <template v-if="user.otherNames.length">
      <div text-sm my-4>
        <span op-50>{{ t('also-known-as') }}</span>
        <ul>
          <li v-for="otherName in user.otherNames" :key="otherName">
            <NuxtLinkLocale :to="{ path: `/hi/${otherName}` }">
              {{ otherName }}
            </NuxtLinkLocale>
          </li>
        </ul>
      </div>
    </template>
    <HiCounter />
  </PageHomeBase>
</template>

<i18n lang="yaml">
en:
  title: Hi
  hi: Hi,
  name: '{name}!'
  also-known-as: 'Also as known as:'
zh:
  title: 你好
  hi: 你好，
  name: '{name}！'
  also-known-as: '也被称为：'
</i18n>
