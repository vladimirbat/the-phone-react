import { SessionData, SessionRegistry, ShoppingcartItem } from '@the-phone/commons';
import { useState } from 'react';
import './shoppingcart-icon.scss';

/* eslint-disable-next-line */
export interface ShoppingcartIconProps {
  srcShoppingcart: string;
}

export function ShoppingcartIcon(props: ShoppingcartIconProps) {
  const { srcShoppingcart } = props;
  const [num, setNum] = useState(getNumFromSession());
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
