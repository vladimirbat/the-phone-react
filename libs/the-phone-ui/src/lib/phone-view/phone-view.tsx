import { PriceOption, Product, PRODUCT_LABELS } from '@the-phone/commons';
import { useState } from 'react';
import PhoneCharacteristics from '../phone-characteristics/phone-characteristics';
import PhoneColors from '../phone-colors/phone-colors';
import PhonePrice from '../phone-price/phone-price';
import { getPriceForColor } from '../tools/price/price.tools';
import './phone-view.scss';

/* eslint-disable-next-line */
export interface PhoneViewProps {
  product: Product;
  iWantIt: (id: string) => void;
}

export function PhoneView(props: PhoneViewProps) {
  const { product, iWantIt } = props;
  const { model, options, imgUrl, id, price } = product;
  const imgSrc = `https://the-phone-api.vercel.app/phone-images/${imgUrl}`;
  const [currentPrice, setCurrentPrice] = useState<string | undefined>(undefined);
  function colorSelected(colorCode: string) {
    const selectedPrice = getPriceFromColor(price, colorCode);
    setCurrentPrice(selectedPrice);
  }
  const alt = `Imagen de ${model}`;
  return (
    <article className="phone-detail-view">
      <div className="container-flex">
        <div className="image-container col-flex-xs-12 col-flex-sm-4 col-flex-md-4 col-flex-lg-3">
          <img src={imgSrc} alt={alt} title={model} />
        </div>
        <div className="description-container col-flex-xs-12 col-flex-sm-8 col-flex-md-8 col-flex-lg-9">
          <div className="upper-text">
            <h2 className="mb-3 mt-2">{model}</h2>
          </div>
          <PhoneCharacteristics product={product} />
          <div className="color-selector">
            <div className="color-selector-text">Selecciona un color</div>
            <div className="color-selector-options">
              <PhoneColors colors={options?.colors} colorSelected={(colorName) => colorSelected(colorName)} />
            </div>
          </div>
          {currentPrice ? (
            <div className="lower-text">
              <p className="small">Desde</p>
              <h5>{currentPrice}</h5>
            </div>
          ) : (
            <PhonePrice price={product.price} />
          )}
          <div>
            <button onClick={(event) => iWantIt(id)}>¡Lo quiero!</button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default PhoneView;

function getPriceFromColor(price: PriceOption[], colorCode: string): string {
  console.log('colorSelected', colorCode);
  return getPriceForColor(price, colorCode);
}
