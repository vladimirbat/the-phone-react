import { Product } from '@the-phone/commons';
import PhoneColors from '../phone-colors/phone-colors';
import PhonePrice from '../phone-price/phone-price';
import './phone-view.scss';

/* eslint-disable-next-line */
export interface PhoneViewProps {
  product: Product;
  iWantIt: (id: string) => void;
}

export function PhoneView(props: PhoneViewProps) {
  const { product, iWantIt } = props;
  const { brand, model, options, imgUrl, id } = product;
  const imgSrc = `https://the-phone-api.vercel.app/phone-images/${imgUrl}`;
  const alt = `Imagen de ${model}`;
  return (
    <article className="phone-card" onClick={(event) => iWantIt(id)}>
      <div className="image-container">
        <img src={imgSrc} alt={alt} title={model} />
      </div>
      <div className="description-container">
        <div className="upper-text">
          <h5>{brand}</h5>
          <span className="text-family">{model}</span>
        </div>
        <PhonePrice price={product.price} />
        <PhoneColors colors={options?.colors} />
      </div>
    </article>
  );
}

export default PhoneView;
