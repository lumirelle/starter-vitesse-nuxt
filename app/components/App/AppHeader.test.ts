// A demo for testing Nuxt components just under the same folder

import { AppHeader } from '#components'
import { unindent } from '@antfu/utils'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

describe('components/AppHeader.vue', () => {
  it('should render', async () => {
    const wrapper = await mountSuspended(AppHeader)
    expect(wrapper.html()).toMatchInlineSnapshot(
      unindent`
      "<div text-2xl="" font-300="" inline-flex="" cursor-default="">
        <div flex="" flex-col="" children:mx-auto=""><img h-18="" w-18="" inline-block="" src="/icons/nuxt.svg" alt="Nuxt Logo"><span text-green-400="" mt--2="">Nuxt 4</span></div>
        <div text="3xl gray4" m="x-4 y-auto" i-carbon-add="" transform="" transition-all-500="" hover:rotate-135=""></div>
        <div flex="" flex-col="" children:mx-auto=""><img h-18="" w-18="" inline-block="" src="/icons/vite.png" alt="Vite Logo"><span text-purple-500="" mt--2="">Vitesse</span></div>
      </div>"
    `,
    )
  })
})
