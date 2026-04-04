<script setup lang="ts">
import type { Arrayable } from '@antfu/utils'
import type { RouteLocationNamedI18n } from 'vue-router'
import type { RouteNamedMapI18n } from 'vue-router/auto-routes'
import { toArray } from '@antfu/utils'

type Route = RouteLocationNamedI18n<keyof RouteNamedMapI18n>

interface Button {
  text: string
  route: Route
}

const { button } = defineProps<{
  title: string
  button: Arrayable<Button>
}>()

const buttons = computed(() => toArray(button))
</script>

<template>
  <div py-8 rounded-lg bg-white w-600px shadow="[0_5px_15px_rgba(0,0,0,0.05)]" dark:bg-black dark:shadow="[0_5px_15px_rgba(255,255,255,0.05)]">
    <h3>{{ title }}</h3>
    <div>
      <slot />
    </div>
    <div>
      <NuxtLinkLocale v-for="(btn, index) in buttons" :key="index" text-sm m-3 btn :to="btn.route">
        {{ btn.text }}
      </NuxtLinkLocale>
    </div>
  </div>
</template>
