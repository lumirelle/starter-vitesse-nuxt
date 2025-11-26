// A demo for testing the behavior of the whole application (SSR)

import { $fetch, createPage, setup, url } from '@nuxt/test-utils/e2e'
import { describe, expect, it } from 'vitest'

describe('example nuxt e2e test', async () => {
  /**
   * Setup test environment
   *
   * @see [Setup Vitest](https://github.com/nuxt/test-utils/blob/main/src/e2e/setup/vitest.ts#L3)
   */
  await setup()

  it('with server-side rendered result', async () => {
    // Fetch for the server-side rendered result
    const html = await $fetch('/')
    expect(html).toContain('<!DOCTYPE html>')
  })

  it('with hydrated client-side result', async () => {
    // Render page in headless browser and wait until hydration is complete
    const page = await createPage()
    await page.goto(url('/'), { waitUntil: 'hydration' })
    const html = await page.content()
    expect(html).toContain('<!DOCTYPE html>')
  })
})
