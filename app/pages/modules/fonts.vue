<script setup lang="ts">
const { t } = useLocalI18n()

useHead({
  title: t('title'),
})

const SNIPPET = `interface User {
  name: string;
  age: number;
}

class Employee implements User {
  constructor(public name: string, public age: number) {}
}

const user: User = { name: "Alice", age: 25 };`
</script>

<template>
  <PageHomeBase :title="t('title')">
    <div grid cols-2>
      <div code-block>
        <p code-label>
          Font Sans
        </p>
        <pre code-pre font-sans>{{ SNIPPET }}</pre>
      </div>
      <div code-block>
        <p code-label>
          Font Serif
        </p>
        <pre code-pre font-serif>{{ SNIPPET }}</pre>
      </div>
      <div code-block col-span-2>
        <p code-label>
          Font Mono
        </p>
        <pre code-pre font-mono>{{ SNIPPET }}</pre>
      </div>
    </div>
  </PageHomeBase>
</template>

<i18n lang="yaml">
en:
  title: Fonts
zh:
  title: Fonts
</i18n>
