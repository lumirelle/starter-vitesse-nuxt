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
    <I18nT keypath="to-usecase" scope="global" tag="h3" text-center>
      <template #usecase>
        <a v-if="url" :href="url" target="_blank" rel="noopener noreferrer" text-vitesse underline>{{ usecase }}</a>
        <span v-else>{{ usecase }}</span>
      </template>
    </I18nT>
    <div mb-4>
      <slot />
    </div>
    <div text-center space-x-4>
      <NuxtLinkLocale v-for="(btn, index) in buttons" :key="index" btn :to=" btn.route">
        {{ btn.text ?? t('go') }}
      </NuxtLinkLocale>
    </div>
  </div>
</template>
