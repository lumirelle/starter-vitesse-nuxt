/**
 * An example of API composable for paging query products
 *
 * @param params Query parameters for fetching products
 * @returns A paging products
 */
export function usePagingProducts(params?: ApiProducts.QueryParams) {
  return useApiGet('/api/v1/products/page', params)
}

/**
 * An example of API composable for listing query products
 *
 * @param params Query parameters for fetching products
 * @returns A listing products
 */
export function useListingProducts(params?: ApiProducts.QueryParams) {
  return useApiGet('/api/v1/products/list', params)
}

/**
 * An example of API composable for upserting a product
 * @param body Product data to upsert
 * @returns Whether the upsert operation was successful
 */
export function useUpsertProducts(body?: ApiProducts.UpsertBody) {
  return useApiPost('/api/v1/products/upsert', body)
}
