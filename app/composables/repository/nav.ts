export function useNavRepository() {
  return {
    get: () => $api('/v1/nav'),
  }
}
