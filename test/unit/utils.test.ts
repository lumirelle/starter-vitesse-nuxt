// classic unit tests of business logic functions
// test env is set to 'node'

import { describe, expect, it } from 'vitest'

describe('example unit test', () => {
  it('true should be true', () => {
    expect(true).toBe(true)
  })

  it('console.warn should be called', () => {
    console.warn('This is a warning')
    expect(console.warn).toHaveBeenCalled()
  })
})
