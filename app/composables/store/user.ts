import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  /**
   * Current named of the user.
   */
  const savedName = ref('')
  /**
   * Set of previously used names.
   */
  const usedNameSet = ref(new Set<string>())
  /**
   * List of previously used names.
   */
  const usedNames = computed(() => [...usedNameSet.value])
  /**
   * List of previously used names, excluding the current one.
   */
  const otherNames = computed(() => usedNames.value.filter((name) => name !== savedName.value))

  /**
   * Changes the current name of the user and saves the one that was used before.
   *
   * @param name new name to set
   */
  function setNewName(name: string): void {
    if (savedName.value) {
      usedNameSet.value.add(savedName.value)
    }
    savedName.value = name
  }

  return {
    setNewName,
    otherNames,
    savedName,
  }
})

/**
 * Support HMR of pinia store in development.
 *
 * @see https://pinia.vuejs.org/cookbook/hot-module-replacement.html#HMR-Hot-Module-Replacement-
 */
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
