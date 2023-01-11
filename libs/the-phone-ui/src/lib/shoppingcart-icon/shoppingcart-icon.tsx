import { SessionData, SessionRegistry, ShoppingcartItem } from '@the-phone/commons';
import { useEffect, useState } from 'react';
import './shoppingcart-icon.scss';

/* eslint-disable-next-line */
export interface ShoppingcartIconProps {
  srcShoppingcart: string;
}

const SHOPPINGCART_ARRAY = SessionRegistry.SHOPPINGCART_ARRAY;

export function ShoppingcartIcon(props: ShoppingcartIconProps) {
  const { srcShoppingcart } = props;
  const [num, setNum] = useState(getNumFromSession());
  useEffect(() => changeCartEfect(setNum), []);
  return (
    <div className="shoppingcart-icon">
      {num ? <div className="num-products">{num}</div> : null}
      <img src={srcShoppingcart} alt={`The shopping cart has 0 products`} />
    </div>
  );
}

export default ShoppingcartIcon;

function getNumFromSession(): number {
  const shoppingcartArray = SessionData.getObject<ShoppingcartItem[]>(SessionRegistry.SHOPPINGCART_ARRAY);
  return shoppingcartArray ? shoppingcartArray.length : 0;
}

function changeCartEfect(setNum: (num: number) => void) {
  const subscription = SessionData.getObservable<ShoppingcartItem[]>(SHOPPINGCART_ARRAY).subscribe((spArray) => {
    setNum(spArray.length);
  });
  return () => subscription.unsubscribe();
}
