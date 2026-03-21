/**
 * A custom `$fetch` with additional controls, to avoid repeating the same logic in every API call.
 *
 * 1. Custom `baseURL` for convenience;
 * 2. Manipulate headers (e.g. forward headers from incoming request for server-side requests, and add additional headers like token and locale for both server-side and client-side requests);
 * 3. Error handling (e.g. redirect to login page when user doesn't login or token expires).
 *
 * @see https://nuxt.com/docs/4.x/guide/recipes/custom-usefetch#recipe-custom-fetch-instance
 */

declare module '#app' {
  interface NuxtApp {
    $api: typeof globalThis.$fetch
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $api: typeof globalThis.$fetch
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const locale = useCookie('locale', {
    default: () => 'en',
  }).value
  const token = useCookie('token').value
  const headers = useRequestHeaders()

  const api = $fetch.create({
    // Custom `baseURL` for convenience
    baseURL: '/api',
    // Manipulate headers
    onRequest({ options }) {
      // For server-side requests, forward the headers from the incoming request.
      if (import.meta.server) {
        for (const [key, value] of Object.entries(headers)) {
          options.headers.set(key, value)
        }
      }
      // Additional headers for both server-side and client-side requests
      options.headers.set('Language', locale)
      if (token) {
        options.headers.set('X-Token', token)
      }
    },
    // Error handling
    async onResponseError({ response }) {
      if (response.status === 401 || response.status === 403) {
        console.error('User has not login!')
        await nuxtApp.runWithContext(async () => await navigateTo('/'))
      }
    },
  })

  return {
    provide: {
      api,
    },
  }
})
