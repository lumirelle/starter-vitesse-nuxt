export default defineNuxtPlugin({
  name: 'api',
  setup(nuxtApp) {
    const runtimeConfig = useRuntimeConfig()
    const headers = useRequestHeaders()
    const locale = useCookie('locale').value ?? 'en'
    const token = useCookie('token').value

    const api = $fetch.create({
      baseURL: runtimeConfig.public.BASE_URL || '/',
      onRequest({ options }) {
        // Forward headers
        if (import.meta.server) {
          for (const [key, value] of Object.entries(headers)) {
            options.headers.set(key, value)
          }
        }
        // Additional headers
        options.headers.set('Language', locale)
        if (token) {
          options.headers.set('X-Token', token)
        }
      },
      async onResponseError({ response }) {
        if (response.status === 401 || response.status === 403) {
          console.error("User doesn't login!")
          await nuxtApp.runWithContext(async () => {
            await navigateTo('/')
          })
        }
      },
    })

    return {
      provide: {
        api,
      },
    }
  },
})
