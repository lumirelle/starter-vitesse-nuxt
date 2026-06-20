namespace ApiNavV1 {
  interface Nav {
    items: NavItem[]
  }
  interface NavItem {
    id: string
    title: string
    link: string
  }
}
