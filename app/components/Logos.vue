<!-- A component to display logos -->

<template>
  <div text-2xl font-300 inline-flex cursor-default>
    <h1 opacity0 absolute>
      Nuxt 4 and Vitesse
    </h1>
    <div flex flex-col children:mx-auto>
      <img h-18 w-18 inline-block src="/icons/nuxt.svg" alt="Nuxt Logo">
      <span text-green-400 mt--2>Nuxt 4</span>
    </div>
    <div
      text="3xl gray-400"
      m="x-4 y-auto"
      i-carbon-add
      transform
      transition-all-500
      hover:rotate-135
    />
    <div flex flex-col children:mx-auto>
      <img h-18 w-18 inline-block src="/icons/vite.png" alt="Vite Logo">
      <span text-purple-500 mt--2>Vitesse</span>
    </div>
  </div>
</template>
