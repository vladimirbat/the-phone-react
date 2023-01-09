import './phones-search-page.scss';
import PhonesListView from '../../phones-module/phones-list-view/phones-list-view';
import { useCallback, useEffect, useState } from 'react';
import { emmitAndWaitForResponse, EventsRegistry, Product, SearchPhonesRequest, SearchPhonesResponse } from '@the-phone/commons';

/* eslint-disable-next-line */
export interface PhonesSearchPageProps {}

export function PhonesSearchPage(props: PhonesSearchPageProps) {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const moreProducts = useCallback(() => setCurrentPage(currentPage + 1), [currentPage]);
  console.log('Current Page', currentPage);
  useEffect(() => {
    const requestData = new SearchPhonesRequest(currentPage);
    emmitAndWaitForResponse<SearchPhonesRequest, SearchPhonesResponse>(EventsRegistry.REQUEST_PHONES, EventsRegistry.RESPONSE_PHONES, requestData).then((response: SearchPhonesResponse) => {
      setProducts(appendProducts(products, response.products));
    });
  }, [currentPage]);
  return (
    <div className="phones-search-page">
      <PhonesListView products={products} moreProducts={moreProducts} />
    </div>
  );
}

export default PhonesSearchPage;

function appendProducts(products: Product[] | null, newProducts: Product[] | null): Product[] | null {
  const prods = products ? products : [];
  const newProds = newProducts ? newProducts : [];
  const total = [...prods, ...newProds];
  return total.length ? total : null;
}
