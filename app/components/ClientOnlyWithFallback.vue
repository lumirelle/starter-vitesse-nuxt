<template>
  <ClientOnly>
    <slot />
    <template #fallback>
      <div op50>
        <span animate-pulse>...</span>
      </div>
    </template>
  </ClientOnly>
</template>
