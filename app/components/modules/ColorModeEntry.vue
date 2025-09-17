<script setup lang="ts">
const router = useRouter()

const localPath = useLocalePath()

function goLight() {
  router.push(localPath('modules-color-mode-light'))
}

function goDark() {
  router.push(localPath('modules-color-mode-dark'))
}

const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <div>
    <p>{{ t('toColorModePage') }}</p>
    <div>
      <button
        text-sm btn m-3
        @click="goLight"
      >
        {{ t('button1') }}
      </button>
      <button
        text-sm btn m-3
        @click="goDark"
      >
        {{ t('button2') }}
      </button>
    </div>
  </div>
</template>

<i18n lang="yaml">
en:
  toColorModePage: To `{'@'}nuxtjs/color-mode` usecase >
  button1: '@:global.go - Light'
  button2: '@:global.go - Dark'
zh:
  toColorModePage: 前往 `{'@'}nuxtjs/color-mode` 用例 >
  button1: '@:global.go - 亮色模式'
  button2: '@:global.go - 暗色模式'
fr:
  toColorModePage: Aller à la utilisation de `{'@'}nuxtjs/color-mode` >
  button1: '@:global.go - à la mode claire'
  button2: '@:global.go - à la mode sombre'
</i18n>
