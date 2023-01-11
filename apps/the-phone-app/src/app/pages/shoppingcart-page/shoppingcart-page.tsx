import { EventEmitter, EventsRegistry, SessionData, SessionRegistry, ShoppingcartItem, shoppingcartItemsEqual } from '@the-phone/commons';
import { ShoppingcartTable } from '@the-phone/ui';
import { useState } from 'react';
import './shoppingcart-page.scss';

/* eslint-disable-next-line */
export interface ShoppingcartPageProps {}

export function ShoppingcartPage(props: ShoppingcartPageProps) {
  const [shoppingcartArray, setShoppingcartArray] = useState(getShoppingcartArray());
  function deleteItem(item: ShoppingcartItem, index: number): void {
    const newShoppingcartArray = removeFromShoppincartArray(item, index);
    console.log('newShoppingcartArray', newShoppingcartArray);
    setShoppingcartArray(newShoppingcartArray);
  }

  return (
    <div className="shoppingcart-page">
      <h2 className="mb-3 mt-2">Your shoppingcart</h2>
      <ShoppingcartTable shoppingcartArray={shoppingcartArray} deleteItem={(item, index) => deleteItem(item, index)} onEmptyCart={() => onEmptyCart()} onClickPhone={(id) => onClickPhone(id)} />
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

function onEmptyCart(): void {
  EventEmitter.eventEmmiterFactory(EventsRegistry.GO_TO_SEARCH_PHONES).emitEvent();
}

function onClickPhone(id: string): void {
  EventEmitter.eventEmmiterFactory(EventsRegistry.PHONE_SELECTED_FOR_DISPLAY).emitEvent(id);
}
