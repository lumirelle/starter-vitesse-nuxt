<script setup lang="ts">
const route = useRoute<'hi-id'>()
const user = useUserStore()
const name = route.params.id

watchEffect(() => {
  user.setNewName(route.params.id as string)
})

definePageMeta({
  layout: 'home',
  title: 'pages.title.hi',
})

const { t } = useI18n({
  useScope: 'local',
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
            <router-link :to="`/hi/${otherName}`" replace>
              {{ otherName }}
            </router-link>
          </li>
        </ul>
      </div>
    </template>

    <Counter />

    <div>
      <NuxtLink
        class="text-sm btn m-3"
        to="/"
      >
        {{ t('back') }}
      </NuxtLink>
    </div>
  </div>
</template>

<i18n lang="yaml">
en:
  hi: "Hi,"
  name: "{name}!"
  alsoKnownAs: "Also as known as:"
  back: "Back"
zh:
  hi: "你好，"
  name: "{name}！"
  alsoKnownAs: "也被称为："
  back: "返回"
fr:
  hi: "Salut,"
  name: "{name} !"
  alsoKnownAs: "Aussi connu sous le nom de :"
  back: "Retour"
</i18n>
