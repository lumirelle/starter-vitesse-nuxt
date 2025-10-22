<script setup lang="ts">
const router = useRouter()

const localPath = useLocalePath()

function goLight() {
  router.push(localPath('/modules/color-mode/light'))
}

function goDark() {
  router.push(localPath('/modules/color-mode/dark'))
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
  toColorModePage: To color mode usecase >
  button1: '@:global.go - Forced light mode'
  button2: '@:global.go - Forced dark mode'
zh:
  toColorModePage: 前往颜色模式用例 >
  button1: '@:global.go - 强制亮色模式'
  button2: '@:global.go - 强制暗色模式'
</i18n>
