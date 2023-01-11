import { SessionData, SessionRegistry, ShoppingcartItem, shoppingcartItemsEqual } from '@the-phone/commons';
import { ShoppingcartTable } from '@the-phone/ui';
import { useState } from 'react';
import './shoppingcart-page.scss';

/* eslint-disable-next-line */
export interface ShoppingcartPageProps {}

export function ShoppingcartPage(props: ShoppingcartPageProps) {
  const [shoppingcartArray, setShoppingcartArray] = useState(getShoppingcartArray());
  function deleteItem(item: ShoppingcartItem, index: number): void {
    const newShoppingcartArray = removeFromShoppincartArray(item, index);
    setShoppingcartArray(newShoppingcartArray);
  }

  return (
    <div className="shoppingcart-page">
      <h2 className="mb-3 mt-2">Su compra</h2>
      <ShoppingcartTable shoppingcartArray={shoppingcartArray} deleteItem={(item, index) => deleteItem(item, index)} />
    </div>
  );
}

export default ShoppingcartPage;

function getShoppingcartArray(): ShoppingcartItem[] {
  const SHOPPINGCART_ARRAY = SessionRegistry.SHOPPINGCART_ARRAY;
  const shoppingcartArray = SessionData.getObject<ShoppingcartItem[]>(SHOPPINGCART_ARRAY);
  return shoppingcartArray ? shoppingcartArray : [];
}
function removeFromShoppincartArray(itemToRemove: ShoppingcartItem, index: number): ShoppingcartItem[] {
  let shoppingcartArray = getShoppingcartArray();
  shoppingcartArray = shoppingcartArray.filter((item) => !shoppingcartItemsEqual(item, itemToRemove));
  SessionData.setObject(SessionRegistry.SHOPPINGCART_ARRAY, shoppingcartArray);
  return shoppingcartArray;
}
