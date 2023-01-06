import { Product, PRODUCT_LABELS } from '@the-phone/commons';
import React from 'react';
import './phone-characteristics.scss';

/* eslint-disable-next-line */
export interface PhoneCharacteristicsProps {
  product: Product;
}

export function PhoneCharacteristics(props: PhoneCharacteristicsProps) {
  const { product } = props;
  const labelValueData = getLabelValueProductData(product);
  return (
    <div className="phone-characteristics">
      <dl>
        {labelValueData.map(({ label, value }) => (
          <React.Fragment key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </React.Fragment>
        ))}
      </dl>
    </div>
  );
}

function getLabelValueProductData(
  product: Product,
  language = 'es'
): { label: string; value: string }[] {
  const labels: { [key: string]: string } = PRODUCT_LABELS[language];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const prod = product as { [key: string]: any };
  return Object.keys(labels).map((key) => {
    const label = labels[key];
    const value = prod[key] ? prod[key] : '';
    return { label, value };
  });
}

export default PhoneCharacteristics;
