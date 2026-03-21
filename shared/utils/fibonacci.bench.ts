import { bench, describe } from 'vitest'
import { fibonacciShared } from './fibonacci'

describe('fibonacci', () => {
  bench('fibonacci(10)', () => {
    fibonacciShared(10)
  })

  bench('fibonacci(20)', () => {
    fibonacciShared(20)
  })
})
