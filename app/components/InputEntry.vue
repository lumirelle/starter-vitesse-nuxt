<script setup lang="ts">
const name = ref('')

const router = useRouter()

const localePath = useLocalePath()

function go() {
  if (name.value) {
    router.push(localePath(`/hi/${encodeURIComponent(name.value)}`))
  }
}

const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <div>
    <p>{{ t('toHiPage') }}</p>
    <input
      id="input"
      v-model="name"
      :placeholder="t('inputPlaceholder')"
      type="text"
      autocomplete="off"
      p="x-4 y-2" m="t-5" w="250px"
      text="center" bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="go"
    >
    <div>
      <button
        text-sm btn m-3
        :disabled="!name"
        @click="go"
      >
        {{ t('button') }}
      </button>
    </div>
  </div>
</template>

<i18n lang="yaml">
en:
  toHiPage: To `hi` page >
  inputPlaceholder: Enter your name
  button: GO
zh:
  toHiPage: 前往 `hi` 页面 >
  inputPlaceholder: 请输入您的姓名
  button: 前往
fr:
  toHiPage: Aller à la page `hi` >
  inputPlaceholder: Entrez votre nom
  button: Aller
</i18n>
