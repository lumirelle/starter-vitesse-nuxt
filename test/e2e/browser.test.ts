/**
 * @file A demo for testing Nuxt in an end-to-end browser environment
 */

import { fileURLToPath } from 'node:url'
import { createPage, setup, url } from '@nuxt/test-utils/e2e'
import { describe, expect, it } from 'vitest'

/**
 * Setup test environment
 *
 * @see [Setup Vitest](https://github.com/nuxt/test-utils/blob/main/src/e2e/setup/vitest.ts#L3)
 */
await setup({
  rootDir: fileURLToPath(new URL('../../', import.meta.url)),
  browser: true,
})

describe('example nuxt e2e browser test', async () => {
  it('with hydrated client-side result', async () => {
    // Render page in headless browser and wait until hydration is complete
    const page = await createPage()
    await page.goto(url('/'), { waitUntil: 'hydration' })
    const html = await page.content()
    expect(html).toContain('<!DOCTYPE html>')
  })
})
