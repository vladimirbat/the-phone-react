import { stringify } from 'querystring';
import { PriceOption } from '../../../../the-phone-commons/src/lib/model/products.model';
import './phone-price.scss';

/* eslint-disable-next-line */
export interface PhonePriceProps {
  price: PriceOption[]
}

export function PhonePrice(props: PhonePriceProps) {
  const {price} = props;
  return (
    <div className="lower-text">
        <p className="small">Desde</p>
        <h5>{getFirstPrice(price)}</h5>
    </div>
  );
}

export default PhonePrice;

function getFirstPrice(price: PriceOption[]): string {
  if(!price || price.length === 0) {
    return 'Consultar cuota';
  }
  const value = price.find((option) => option?.price);
  return formatPrice(value?.price);
}

function formatPrice(value:number | undefined): string {
  if(!value) {
    return 'Consultar cuota';
  }
  return value.toLocaleString() + '€';
}
