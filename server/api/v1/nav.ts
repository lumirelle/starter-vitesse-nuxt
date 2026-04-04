// This comment cannot let unocss generate the CSS, but can enable the IDE support.
// We use `safelist` to generate the CSS instead.
// @unocss-include
export default defineEventHandler(() =>
  createServerResponse<ApiNav.Nav>({
    items: [
      { id: '1', title: 'Home', link: '/' },
      { id: '2', title: 'About', link: '/' },
    ],
  }),
)
