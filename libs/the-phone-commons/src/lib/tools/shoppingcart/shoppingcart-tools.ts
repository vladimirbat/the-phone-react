import { ShoppingcartItem } from '../../model/shoppingcart.model';

export function shoppingcartItemsEqual(sp1: ShoppingcartItem, sp2: ShoppingcartItem): boolean {
  return sp1.phone.id === sp2.phone.id && sp1.colorCode === sp2.colorCode && sp1.stringUnitaryPrice === sp2.stringUnitaryPrice;
}
