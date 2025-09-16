<script setup lang="ts">
const router = useRouter()

const localPath = useLocalePath()

function goLight() {
  router.push(localPath('/color-mode/light'))
}

function goDark() {
  router.push(localPath('/color-mode/dark'))
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
  toColorModePage: To `color-mode` page >
  button1: GO Light
  button2: GO Dark
zh:
  toColorModePage: 前往 `color-mode` 页面 >
  button1: 前往亮色模式
  button2: 前往暗色模式
fr:
  toColorModePage: Aller à la page `color-mode` >
  button1: Aller à la mode claire
  button2: Aller à la mode sombre
</i18n>
