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
  <div entry>
    <h3>{{ title }}</h3>
    <div>
      <slot />
    </div>
    <div>
      <NuxtLinkLocale v-for="(btn, index) in buttons" :key="index" text-sm btn m-3 :to="btn.route">
        {{ btn.text }}
      </NuxtLinkLocale>
    </div>
  </div>
</template>
