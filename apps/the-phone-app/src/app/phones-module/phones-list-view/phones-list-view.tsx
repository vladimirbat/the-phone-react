import './phones-list-view.scss';
import {
  emmitAndWaitForResponse,
  EventsRegistry,
  SearchPhonesRequest,
  SearchPhonesResponse,
} from '@the-phone/commons';
import { PhoneCard, Product } from '@the-phone/ui';

import { useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface PhonesListViewProps {}

export function PhonesListView(props: PhonesListViewProps): JSX.Element {
  console.log('render');
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    const requestData = SearchPhonesRequest.createDefaultRequest();
    emmitAndWaitForResponse<SearchPhonesRequest, SearchPhonesResponse>(
      EventsRegistry.REQUEST_PHONES,
      EventsRegistry.RESPONSE_PHONES,
      requestData
    ).then((response: SearchPhonesResponse) => {
      console.log('Search api response', response);
      setProducts(response.products);
    });
  }, []);
  return (
    <div className="container-flex">
      <div className="col-flex-xs-12 col-flex-sm-12 col-flex-md-12 col-flex-lg-12">
        {products ? renderList(products) : null}
        {!products ? renderSpinner() : null}
      </div>
    </div>
  );
}

function renderList(products: Product[]) {
  return (
    <div className="phones-list-grid">
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="col-flex-xs-6 col-flex-sm-6 col-flex-md-4 col-flex-lg-3"
          >
            <PhoneCard product={product} />
          </div>
        );
      })}
    </div>
  );
}

function renderSpinner(): JSX.Element {
  return <img src="/src/assets/spinner.svg" alt="loading ..." />;
}

export default PhonesListView;
