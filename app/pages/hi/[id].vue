<script setup lang="ts">
const route = useRoute<'hi-id'>()
const user = useUserStore()
const name = route.params.id

watchEffect(() => {
  user.setNewName(route.params.id as string)
})

definePageMeta({
  layout: 'home',
})

/**
 * Page scope robots rule (requires enabling `experimental.inlineRouteRules`).
 */
defineRouteRules({
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
  <div>
    <div i-twemoji:waving-hand text-4xl inline-block animate-shake-x animate-duration-5000 />
    <h3 text-2xl font-500>
      {{ t('hi') }}
    </h3>
    <div text-xl>
      {{ t('name', { name }) }}
    </div>

    <template v-if="user.otherNames.length">
      <div text-sm my-4>
        <span op-50>{{ t('alsoKnownAs') }}</span>
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
  title: Hi
  hi: Hi,
  name: '{name}!'
  alsoKnownAs: 'Also as known as:'
  back: '@:global.back'
zh:
  title: 你好
  hi: 你好，
  name: '{name}！'
  alsoKnownAs: '也被称为：'
  back: '@:global.back'
</i18n>
