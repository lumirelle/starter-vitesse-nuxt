export default defineEventHandler(() =>
  createResponse<ApiNavV1.Nav>({
    items: [
      { id: '1', title: 'Home', link: '/' },
      { id: '2', title: 'About', link: '/' },
    ],
  }),
)
