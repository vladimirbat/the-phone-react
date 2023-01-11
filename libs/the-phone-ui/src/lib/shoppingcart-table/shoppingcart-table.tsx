import { SessionData, SessionRegistry, ShoppingcartItem } from '@the-phone/commons';
import { totalmem } from 'os';
import { formatPrice } from '../tools/price/price.tools';
import './shoppingcart-table.scss';

/* eslint-disable-next-line */
export interface ShoppingcartTableProps {
  shoppingcartArray: ShoppingcartItem[];
  deleteItem: (item: ShoppingcartItem, index: number) => void;
}

export function ShoppingcartTable(props: ShoppingcartTableProps) {
  const { shoppingcartArray, deleteItem } = props;
  return (
    <div className="shoppingcart-table">
      <div className="table">
        {shoppingcartArray.map((item, index) => {
          const { phone, quantity, stringUnitaryPrice, unitaryPrice, colorCode } = item;
          return (
            <div className="tr" key={phone.id}>
              <div className="td">{phone.brand}</div>
              <div className="td">{phone.model}</div>
              <div className="td">
                <div className="color-ball" style={{ backgroundColor: colorCode }}></div>
              </div>
              <div className="td">{quantity}</div>
              <div className="td">{stringUnitaryPrice}</div>
              <div className="td">{totalLine(unitaryPrice, quantity)}</div>
              <div className="td">
                <img className="dustbin" src="dustbin.svg" alt="delete" onClick={() => deleteItem(item, index)} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShoppingcartTable;

function totalLine(unitaryPrice: number | undefined, quantity: number): string {
  if (typeof unitaryPrice === 'number' && typeof quantity === 'number') {
    return formatPrice(unitaryPrice * quantity);
  }
  return '-';
}
