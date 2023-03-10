export interface Order {
  _id: string;
  status: 'WAITING' | 'IN_PRODUCTION' | 'DONE';
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
