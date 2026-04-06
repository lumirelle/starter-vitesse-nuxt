<script setup lang="ts">
const { count, inc, dec } = useCountState()
</script>

<template>
  <div my-3 inline-flex>
    <button btn p-2 rounded-full aria-label="Decrement" @click="dec()">
      <i i-carbon-subtract />
    </button>
    <div font-mono m-auto text-center w-15 inline-block>
      {{ count }}
    </div>
    <button btn p-2 rounded-full aria-label="Increment" @click="inc()">
      <i i-carbon-add />
    </button>
  </div>
</template>
