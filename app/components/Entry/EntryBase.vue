<script setup lang="ts">
import type { Arrayable } from '@antfu/utils'
import type { RouteLocationNamedI18n } from 'vue-router'
import type { RouteNamedMapI18n } from 'vue-router/auto-routes'
import { toArray } from '@antfu/utils'

interface Button {
  route: RouteLocationNamedI18n<keyof RouteNamedMapI18n>
  /**
   * @default t('go')
   * @see [global i18n locales](../../../i18n/locales) for more details
   */
  text?: string
}

const props = defineProps<{
  usecase: string
  url?: string
  button: Arrayable<Button>
}>()

const buttons = computed(() => toArray(props.button))

const { t } = useI18n()
</script>

<template>
  <div py-8 rounded-lg bg-white w-600px shadow="[0_5px_15px_rgba(0,0,0,0.05)]" dark:bg-black dark:shadow="[0_5px_15px_rgba(255,255,255,0.05)]">
    <I18nT keypath="to-usecase" tag="h3">
      <template #usecase>
        <a v-if="url" :href="url" target="_blank" rel="noopener noreferrer" underline text-vitesse>{{ usecase }}</a>
        <span v-else>{{ usecase }}</span>
      </template>
    </I18nT>
    <div>
      <slot />
    </div>
    <div>
      <NuxtLinkLocale v-for="(btn, index) in buttons" :key="index" text-sm m-3 btn :to=" btn.route">
        {{ btn.text ?? t('go') }}
      </NuxtLinkLocale>
    </div>
  </div>
</template>
