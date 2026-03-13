<script setup lang="ts">
import type { Arrayable } from '@antfu/utils'
import { toArray } from '@antfu/utils'

type Router = Parameters<typeof localePath>[0]

interface Button {
  text: string
  path: Router
}

const { button } = defineProps<{
  title: string
  button: Arrayable<Button>
}>()

const buttons = computed(() => toArray(button))

const router = useRouter()
const localePath = useLocalePath()
function go(route: Router): void {
  router.push(localePath(route))
}
</script>

<template>
  <div entry>
    <h3>{{ title }}</h3>
    <div>
      <slot />
    </div>
    <div>
      <button v-for="(btn, index) in buttons" :key="index" text-sm btn m-3 @click="go(btn.path)">
        {{ btn.text }}
      </button>
    </div>
  </div>
</template>
