export default defineEventHandler(() =>
  createResponse<ApiProducts.Product[]>([
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
  ]),
)
