export type Category = 'shoes' | 'clothes' | 'book'
export type Condition = 'new' | 'used'

export type User = {
  id: number
  username: string
  displayName: string
  email: string
  profileImageUrl: string
  description: string
}

export type Production = {
  id: number
  category: Category
  title: title
  description: string
  imageUrl: string
  blurDataUrl: string
  price: number
  condition: Condition
  owner: owner
}

export type ApiContext = {
  apiRootUrl: string
}
