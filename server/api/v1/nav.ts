export default defineEventHandler(() =>
  createResponse<ApiNav.Nav>({
    items: [
      { id: '1', title: 'Home', link: '/' },
      { id: '2', title: 'About', link: '/' },
    ],
  }),
)
