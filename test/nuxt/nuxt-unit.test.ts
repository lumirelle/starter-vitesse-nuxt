// testing Nuxt components in isolation
// test env is set to 'nuxt' for better integration

import { mountSuspended } from '@nuxt/test-utils/runtime'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import NuxtTestComponent from '~/components/NuxtTestComponent.vue'

const text = 'custom-text'

describe('example nuxt unit test', () => {
  it('component mounts and renders text properly', () => {
    const wrapper = mount(NuxtTestComponent, {
      propsData: {
        text,
      },
    })
    expect(wrapper.text()).toContain(text)
  })

  it('component mounts using mountSuspended and renders text properly', async () => {
    const component = await mountSuspended(NuxtTestComponent, {
      props: {
        text,
      },
    })
    expect(component.html()).toContain(text)
  })
})
