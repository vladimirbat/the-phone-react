import { EventsRegistry, SessionData, SessionRegistry, ShoppingcartItem } from '@the-phone/commons';
import { totalmem } from 'os';
import AlertModal from '../alert-modal/alert-modal';
import { formatPrice } from '../tools/price/price.tools';
import './shoppingcart-table.scss';

/* eslint-disable-next-line */
export interface ShoppingcartTableProps {
  shoppingcartArray: ShoppingcartItem[];
  deleteItem: (item: ShoppingcartItem, index: number) => void;
  onClickPhone: (id: string) => void;
  onEmptyCart: () => void;
}

export function ShoppingcartTable(props: ShoppingcartTableProps) {
  const { shoppingcartArray, deleteItem, onClickPhone, onEmptyCart } = props;
  const emptyArray: boolean = !shoppingcartArray || shoppingcartArray.length === 0;
  return (
    <div className="shoppingcart-table">
      <div className="table">
        {shoppingcartArray.map((item, index) => {
          const { phone, quantity, stringUnitaryPrice, unitaryPrice, colorCode } = item;
          return (
            <div className="tr" key={phone.id}>
              <div className="td">{phone.brand}</div>
              <div className="td cursor-pointer hover-bold model" onClick={() => onClickPhone(phone.id)}>
                {phone.model}
              </div>
              <div className="td">
                <div className="color-ball" style={{ backgroundColor: colorCode }}></div>
              </div>
              <div className="td">{quantity}</div>
              <div className="td">{stringUnitaryPrice}</div>
              <div className="td">{totalLine(unitaryPrice, quantity)}</div>
              <div className="td">
                <img className="dustbin cursor-pointer" src="dustbin.svg" alt="delete" onClick={() => deleteItem(item, index)} />
              </div>
            </div>
          );
        })}
      </div>
      {emptyArray ? renderEmptyModal(onEmptyCart) : null}
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

function renderEmptyModal(onEmptyCart: () => void) {
  return <AlertModal title="Empty Shoping Cart" text="You are going to be redirected to the shearch phones page" closeEvent={() => onEmptyCart()} />;
}
