// An example for testing environment setup

import { vi } from 'vitest'

const _warn = console.warn.bind(console)
console.warn = vi.fn((...args) => _warn(...args))
