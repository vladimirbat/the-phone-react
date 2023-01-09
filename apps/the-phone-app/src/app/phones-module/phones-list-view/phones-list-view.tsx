import './phones-list-view.scss';
import { emmitAndWaitForResponse, EventEmitter, EventsRegistry, Product, SearchPhonesRequest, SearchPhonesResponse } from '@the-phone/commons';
import { PhoneCard, WaitingSpiner } from '@the-phone/ui';

import { useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface PhonesListViewProps {
  products: Product[] | null;
  moreProducts: () => void;
}

export function PhonesListView(props: PhonesListViewProps): JSX.Element {
  const { products, moreProducts } = props;

  return (
    <div className="container-flex">
      <div className="col-flex-xs-12 col-flex-sm-12 col-flex-md-12 col-flex-lg-12">
        {products ? renderList(products) : null}
        {products ? renderButton(moreProducts) : null}
        <WaitingSpiner condition={!products} />
      </div>
    </div>
  );
}

function renderList(products: Product[]) {
  return (
    <div className="phones-list-grid">
      {products.map((product) => {
        return (
          <div key={product.id} className="col-flex-xs-6 col-flex-sm-6 col-flex-md-4 col-flex-lg-3">
            <PhoneCard product={product} selected={(id) => phoneSelected(id)} />
          </div>
        );
      })}
    </div>
  );
}

function renderButton(moreProducts: () => void) {
  return moreProducts ? <button onClick={(event) => moreProducts()}>Más</button> : null;
}

function phoneSelected(id: string): void {
  console.log('PhonesListView#phoneSelected:', id);
  EventEmitter.eventEmmiterFactory(EventsRegistry.PHONE_SELECTED_FOR_DISPLAY).emitEvent(id);
}

export default PhonesListView;
