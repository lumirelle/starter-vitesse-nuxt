export default defineEventHandler(() =>
  createServerResponse<ApiNav.Nav>({
    items: [
      { id: '1', title: 'Home', link: '/' },
      { id: '2', title: 'About', link: '/about' },
    ],
  }),
)
