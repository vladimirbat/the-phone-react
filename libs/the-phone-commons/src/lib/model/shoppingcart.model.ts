import { Product } from './products.model';

export interface ShoppingcartItem {
  phone: Product;
  quantity: number;
  colorCode: string;
  unitaryPrice: number;
}
