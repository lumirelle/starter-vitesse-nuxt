export function usePageviewRepository() {
  return {
    get: () => $api('/v1/pageview'),
  }
}
