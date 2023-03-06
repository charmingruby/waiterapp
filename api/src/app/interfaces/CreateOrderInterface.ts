interface ProductInterface {
  product: string
  quantity: number
}

export interface CreateOrderInterface {
  table: number
  products: ProductInterface[]
}
