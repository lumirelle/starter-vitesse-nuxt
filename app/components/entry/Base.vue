<script setup lang="ts">
import type { Arrayable } from '@antfu/utils'
import { toArray } from '@antfu/utils'

interface Button {
  text: string
  path: string
}

const props = defineProps<{
  title: string
  button: Arrayable<Button>
}>()

const buttons = computed(() => toArray(props.button))

const router = useRouter()
const localePath = useLocalePath()
function go(path: string) {
  router.push(localePath(path))
}
</script>

<template>
  <div>
    <h3>{{ title }}</h3>
    <div>
      <slot />
    </div>
    <div>
      <button
        v-for="(btn, index) in buttons"
        :key="index"
        text-sm btn m-3
        @click="go(btn.path)"
      >
        {{ btn.text }}
      </button>
    </div>
  </div>
</template>
