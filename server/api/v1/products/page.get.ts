export default defineEventHandler(() =>
  createPagingResponse<ApiProducts.Product>(
    [
      {
        id: '1',
        name: 'Product A',
        price: 100,
        category: 'Category 1',
      },
      {
        id: '2',
        name: 'Product B',
        price: 150,
        category: 'Category 2',
      },
    ],
    2, // total number of products
    1, // current page
    10, // page size
  ),
)
