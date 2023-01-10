import './phones-search-page.scss';
import PhonesListView from '../../phones-module/phones-list-view/phones-list-view';
import { useCallback, useEffect, useState } from 'react';
import { emmitAndWaitForResponse, EventsRegistry, Product, SearchPhonesRequest, SearchPhonesResponse } from '@the-phone/commons';
import { PHONES_CHUNK_SIZE } from '../../phones-module/const/phones.const';
import { SearchInputBox } from '@the-phone/ui';

/* eslint-disable-next-line */
export interface PhonesSearchPageProps {}
interface StateSetters {
  setProducts: (products: Product[] | null) => void;
  setWaitingForPage: (value: boolean) => void;
  setLastPageAchived: (value: boolean) => void;
  setSearch: (value: string) => void;
}

export function PhonesSearchPage(props: PhonesSearchPageProps) {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [waitingForPage, setWaitingForPage] = useState(true);
  const [lastPageAchived, setLastPageAchived] = useState(false);
  const [search, setSearch] = useState('');
  const stateSetters = { setProducts, setWaitingForPage, setLastPageAchived, setSearch };
  const moreProducts = useCallback(() => setCurrentPage(currentPage + 1), [currentPage]);
  const newSearch = (searchText: string) => {
    setSearch(searchText);
    setCurrentPage(1);
    setLastPageAchived(false);
    setProducts(null);
  };
  useEffect(() => {
    searchPhonesEffect(currentPage, products, stateSetters, search);
  }, [currentPage, search]);
  return render(moreProducts, products, waitingForPage, lastPageAchived, newSearch);
}

export default PhonesSearchPage;

function searchPhonesEffect(currentPage: number, products: Product[] | null, stateSetters: StateSetters, search: string) {
  const { setWaitingForPage } = stateSetters;
  setWaitingForPage(true);
  const requestData = new SearchPhonesRequest(currentPage, PHONES_CHUNK_SIZE, search);
  emmitAndWaitForResponse<SearchPhonesRequest, SearchPhonesResponse>(EventsRegistry.REQUEST_PHONES, EventsRegistry.RESPONSE_PHONES, requestData).then((response: SearchPhonesResponse) => {
    handleProductsResponse(response, products, stateSetters);
  });
}

function handleProductsResponse(response: SearchPhonesResponse, products: Product[] | null, stateSetters: StateSetters) {
  const { setProducts, setWaitingForPage, setLastPageAchived } = stateSetters;
  handleProducts(response, products, setProducts);
  handleLastPage(response, products, setLastPageAchived);
  setWaitingForPage(false);
}

function handleProducts(response: SearchPhonesResponse, products: Product[] | null, setProducts: (products: Product[] | null) => void) {
  const haveReceivedProducts = response.products && response.products.length;
  if (haveReceivedProducts) {
    setProducts(appendProducts(products, response.products));
  }
}
function handleLastPage(response: SearchPhonesResponse, products: Product[] | null, setLastPageAchived: (v: boolean) => void) {
  const { total, page, pageSize } = response;
  const haveReceivedProducts = response.products && response.products.length;
  if (!haveReceivedProducts || total <= page * pageSize) {
    setLastPageAchived(true);
  }
}

function appendProducts(products: Product[] | null, newProducts: Product[] | null): Product[] | null {
  const prods = products ? products : [];
  const newProds = newProducts ? newProducts : [];
  const total = [...prods, ...newProds];
  return total.length ? total : null;
}
function render(moreProducts: () => void, products: Product[] | null, waitingForPage: boolean, lastPageAchived: boolean, newSearch: (search: string) => void) {
  return (
    <div className="phones-search-page">
      <div className="container-flex">
        <div className="col-flex-xs-12 mb-3 ml-1 mr-1">
          <SearchInputBox newSearch={(searchText) => newSearch(searchText)} />
        </div>
      </div>
      <PhonesListView products={products} moreProducts={moreProducts} waitForPage={waitingForPage} lastPageAchived={lastPageAchived} />
    </div>
  );
}
