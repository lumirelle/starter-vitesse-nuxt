import { acceptHMRUpdate, defineStore, skipHydrate } from 'pinia'

export const useColorStore = defineStore('color', () => {
  const { isSupported, open, sRGBHex } = useEyeDropper() // Relay on Browser API
  const lastColor = useLocalStorage('lastColor', sRGBHex) // It's undefined in server side

  return {
    lastColor: skipHydrate(lastColor), // So we should not hydrate this value from SSR, use `skipHydrate` to do that
    open,
    isSupported,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useColorStore, import.meta.hot))
