export interface Order {
  _id: string;
  status: string;
  table: string;
  products: {
    _id: string;
    quantity:number;
    product: {
      name: string;
      imagePath: string;
      price: number;
    }
  }[]
}
