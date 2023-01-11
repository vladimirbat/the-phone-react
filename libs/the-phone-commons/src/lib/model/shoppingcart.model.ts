import { Product } from './products.model';

export interface ShoppingcartItem {
  phone: Product;
  quantity: number;
  colorCode: string;
  stringUnitaryPrice: string | undefined;
  unitaryPrice: number | undefined;
}
