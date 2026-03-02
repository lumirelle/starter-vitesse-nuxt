import { acceptHMRUpdate, defineStore, skipHydrate } from 'pinia'

export const useColorStore = defineStore('color', () => {
  // Relay on Browser API
  const { isSupported, open, sRGBHex } = useEyeDropper()
  // It's undefined in server side
  const lastColor = useLocalStorage('lastColor', sRGBHex)

  return {
    // So we should not hydrate this value from SSR, use `skipHydrate` to do that
    lastColor: skipHydrate(lastColor),
    open,
    isSupported,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useColorStore, import.meta.hot))
}
