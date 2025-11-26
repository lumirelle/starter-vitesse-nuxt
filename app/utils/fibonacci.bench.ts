import { bench, describe } from 'vitest'
import { fibonacci } from './fibonacci'

describe('fibonacci', () => {
  bench('fibonacci(10)', () => {
    fibonacci(10)
  })

  bench('fibonacci(20)', () => {
    fibonacci(20)
  })
})
