<script setup lang="ts">
import type { Arrayable } from '@antfu/utils'
import { toArray } from '@antfu/utils'

interface Button {
  text: string
  path: string
}

const { button } = defineProps<{
  title: string
  button: Arrayable<Button>
}>()

const buttons = computed(() => toArray(button))

const router = useRouter()
const localePath = useLocalePath()
function go(path: string): void {
  router.push(localePath(path))
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
