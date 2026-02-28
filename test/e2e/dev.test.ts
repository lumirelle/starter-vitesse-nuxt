import { fileURLToPath } from 'node:url'
import { $fetch, setup } from '@nuxt/test-utils/e2e'
import { describe, expect, it } from 'vitest'

await setup({
  rootDir: fileURLToPath(new URL('../', import.meta.url)),
  dev: true,
})

describe('example nuxt e2e server test (dev)', () => {
  it('with server-side rendered result', async () => {
    const html = await $fetch<string>('/')
    expect(html.slice(0, 15)).toMatchInlineSnapshot(`"<!DOCTYPE html>"`)
  })
})
