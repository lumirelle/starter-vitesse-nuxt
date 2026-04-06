<script setup lang="ts">
const route = useRoute()
const user = useUserStore()
const name = route.params.id || 'unknown'

watchEffect(() => {
  user.setNewName(name)
})

/**
 * Inline route rules, requires `experimental.inlineRouteRules`.
 */
defineRouteRules({
  /**
   * Prevent indexing of these dynamic hi pages.
   */
  // @ts-expect-error Type missing
  robots: {
    noindex: true,
    nofollow: true,
    noai: true,
  },
})

const { t } = useLocalI18n()

useHead({
  title: t('title'),
})
</script>

<template>
  <PageHomeBase :title="t('title')">
    <div flex="~ col" gap-4 items-center>
      <i i-twemoji:waving-hand text-4xl animate="shake-x duration-5000" />
      <div text-xl>
        {{ t('name', { name }) }}
      </div>
      <div v-if="user.otherNames.length" text-sm my-4>
        <span op-50>{{ t('also-known-as') }}</span>
        <ul>
          <li v-for="otherName in user.otherNames" :key="otherName">
            <NuxtLinkLocale :to="{ path: `/hi/${otherName}` }">
              {{ otherName }}
            </NuxtLinkLocale>
          </li>
        </ul>
      </div>
      <HiCounter />
    </div>
  </PageHomeBase>
</template>

<i18n lang="yaml">
en:
  title: Hi
  name: '{name}!'
  also-known-as: 'Also as known as:'
zh:
  title: 你好
  name: '{name}！'
  also-known-as: '也被称为：'
</i18n>
