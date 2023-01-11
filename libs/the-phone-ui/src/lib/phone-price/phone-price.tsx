import { PriceOption } from '@the-phone/commons';
import { getCheapestPrice, getFirstPrice } from '../tools/price/price.tools';
import './phone-price.scss';

export interface PhonePriceProps {
  price: PriceOption[];
}

export function PhonePrice(props: PhonePriceProps) {
  const { price } = props;
  return (
    <div className="lower-text">
      <p className="small">Desde</p>
      <h5>{getCheapestPrice(price)}</h5>
    </div>
  );
}

export default PhonePrice;
