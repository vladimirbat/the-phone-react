import { stringify } from 'querystring';
import { PriceOption } from '../../../../the-phone-commons/src/lib/model/products.model';
import { getFirstPrice } from '../tools/price/price.tools';
import './phone-price.scss';

/* eslint-disable-next-line */
export interface PhonePriceProps {
  price: PriceOption[];
}

export function PhonePrice(props: PhonePriceProps) {
  const { price } = props;
  return (
    <div className="lower-text">
      <p className="small">Desde</p>
      <h5>{getFirstPrice(price)}</h5>
    </div>
  );
}

export default PhonePrice;

