<script setup lang="ts">
const name = ref('')

const router = useRouter()

const localePath = useLocalePath()

function go() {
  if (name.value) {
    router.push(localePath({
      path: '/hi',
      params: { id: name.value.trim() },
    }))
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
      class="input"
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
  toHiPage: To `hi` (`pinia`) usecase >
  inputPlaceholder: Enter your name
  button: '@:global.go'
zh:
  toHiPage: 前往 `hi` (`pinia`) 用例 >
  inputPlaceholder: 请输入您的姓名
  button: '@:global.go'
fr:
  toHiPage: Aller à la utilisation de `hi` (`pinia`) >
  inputPlaceholder: Entrez votre nom
  button: '@:global.go'
</i18n>
