import { acceptHMRUpdate, defineStore } from 'pinia'

export interface Nav {
  items: Array<{ title: string, link: string }>
}

export const useNavStore = defineStore('nav', () => {
  const navData = ref<Nav>()

  /**
   * Fetch navigation data from an API or other sources.
   */
  async function fetchNavData() {
    try {
      navData.value = await $fetch('/api/nav')
    }
    catch (error) {
      console.error(error)
    }
  }

  return {
    navData,
    fetchNavData,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNavStore, import.meta.hot))
}
