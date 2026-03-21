import { describe, expect, it } from 'vitest'
import { fibonacciShared } from './fibonacci'

describe('fibonacci', () => {
  it('should return 0 when called with 0', () => {
    expect(fibonacciShared(0)).toBe(0)
  })

  it('should return 55 when called with 10', () => {
    expect(fibonacciShared(10)).toBe(55)
  })
})
