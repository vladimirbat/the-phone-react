import { PhoneCard, Product } from '@the-phone/ui';
import './phones-list-view.scss';

const product: Product = {
  brand: 'Samsung',
  battery: '',
  model: 'televisor 55 Smart TV QLED 4K QE55Q60AAU negro outlet',
  cpu: '',
  ram: '',
  dimentions: '1232.1 x 747.8 x 228.8 (largo x ancho x fondo mm)',
  displayResolution: 'px/inch',
  id: '553630257',
  imgUrl: 'samsung_smart_tv_qled_q60aau_outlet_Front.webp',
  options: {
    colors: [{ name: 'Gris', code: '#808080' },{ name: 'Gris', code: 'red' },{ name: 'Gris', code: 'olive' }],
    storage: [{ code: '32.0 GB', name: '32.0 GB' }],
  },
  price: [
    {
      color: { name: 'Gris', code: '#808080' },
      storage: { name: '32.0 GB', code: '32.0 GB' },
      price: 216,
    },
  ],
  primaryCamera: '',
  secondaryCamera: '',
  so: '',
  weight: '16200 gr',
};

/* eslint-disable-next-line */
export interface PhonesListViewProps {

}

export function PhonesListView(props: PhonesListViewProps) {
  return (
    <div className="container-flex">
      <div className="col-flex-xs-12 col-flex-sm-12 col-flex-md-12 col-flex-lg-12">
        <div className="phones-list-grid">
          <div className="col-flex-xs-6 col-flex-sm-6 col-flex-md-4 col-flex-lg-3">
            <PhoneCard product={product}/>
          </div>
          <div className="col-flex-xs-6 col-flex-sm-6 col-flex-md-4 col-flex-lg-3">
            <PhoneCard product={product}/>
          </div>
          <div className="col-flex-xs-6 col-flex-sm-6 col-flex-md-4 col-flex-lg-3">
            <PhoneCard product={product}/>
          </div>
          <div className="col-flex-xs-6 col-flex-sm-6 col-flex-md-4 col-flex-lg-3">
            <PhoneCard product={product}/>
          </div>
          <div className="col-flex-xs-6 col-flex-sm-6 col-flex-md-4 col-flex-lg-3">
            <PhoneCard product={product}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhonesListView;
