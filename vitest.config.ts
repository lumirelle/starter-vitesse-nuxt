import { defineVitestProject } from '@nuxt/test-utils/config'
import { isWindows } from 'std-env'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: 'unit',
          include: [
            'test/unit/*.{test,spec}.ts',
            '{app,server}/utils/**/*.{test,spec}.ts',
            '**/*.unit.{test,spec}.ts',
          ],
          benchmark: {
            include: [
              'test/unit/*.{bench,benchmark}.ts',
              '{app,server}/utils/**/*.{bench,benchmark}.ts',
              '**/*.unit.{bench,benchmark}.ts',
            ],
          },
          environment: 'node',
          setupFiles: ['test/setup-unit.ts'],
        },
      },
      {
        test: {
          name: 'e2e',
          include: [
            'test/e2e/*.{test,spec}.ts',
            '**/*.e2e.{test,spec}.ts',
          ],
          benchmark: {
            include: [
              'test/e2e/*.{bench,benchmark}.ts',
              '**/*.e2e.{bench,benchmark}.ts',
            ],
          },
          environment: 'node',
          testTimeout: isWindows ? 36_000 : 12_000,
        },
      },
      await defineVitestProject({
        test: {
          name: 'nuxt',
          include: [
            'test/nuxt/*.{test,spec}.ts',
            'app/{layouts,components,composables,pages}/**/*.{test,spec}.ts',
            '**/*.nuxt.{test,spec}.ts',
          ],
          benchmark: {
            include: [
              'test/nuxt/*.{bench,benchmark}.ts',
              'app/{layouts,components,composables,pages}/**/*.{bench,benchmark}.ts',
              '**/*.nuxt.{bench,benchmark}.ts',
            ],
          },
          environment: 'nuxt',
        },
      }),
    ],
  },
})
