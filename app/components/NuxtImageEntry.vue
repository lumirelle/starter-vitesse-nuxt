<script setup lang="ts">
const router = useRouter()
function go() {
  router.push('/nuxt-image')
}
</script>

<template>
  <div mb-4 mt-4 pb-4 pt-4>
    <p>To `nuxt-image` page &gt;</p>
    <div>
      <button
        text-sm btn m-3
        @click="go"
      >
        GO
      </button>
    </div>
  </div>
</template>
