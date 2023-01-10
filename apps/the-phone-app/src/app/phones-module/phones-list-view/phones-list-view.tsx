import { EventEmitter, EventsRegistry, Product } from '@the-phone/commons';
import { DummyPhoneCard, PhoneCard } from '@the-phone/ui';
import './phones-list-view.scss';
import React, { useRef } from 'react';
import { PHONES_CHUNK_SIZE } from '../const/phones.const';
import { IntersectionObserverFactory } from './tools/intersection-observer-factory';
export interface PhonesListViewProps {
  products: Product[] | null;
  waitForPage: boolean;
  moreProducts: () => void;
  lastPageAchived: boolean;
}

export function PhonesListView(props: PhonesListViewProps): JSX.Element {
  const { products, moreProducts, waitForPage, lastPageAchived } = props;
  const intersectionObserver = IntersectionObserverFactory.getIntersectionObserver(moreProducts, waitForPage);
  const listEnd = useRef(null);
  if (listEnd.current && !lastPageAchived) {
    intersectionObserver.observe(listEnd.current);
  }
  return render(products, waitForPage, lastPageAchived, listEnd);
}

function render(products: Product[] | null, waitForPage: boolean, lastPageAchived: boolean, listEnd: React.MutableRefObject<null>) {
  return (
    <div className="container-flex">
      <div className="col-flex-xs-12 col-flex-sm-12 col-flex-md-12 col-flex-lg-12">
        {renderPhonesAndDummies(products, waitForPage, lastPageAchived)}
        {renderEndLine(lastPageAchived, listEnd)}
      </div>
    </div>
  );
}

function renderPhonesAndDummies(products: Product[] | null, waitForPage: boolean, lastPageAchived: boolean) {
  return (
    <div className="phones-list-grid">
      {products ? renderPhones(products) : null}
      {!lastPageAchived ? renderDummies(waitForPage) : null}
    </div>
  );
}

function renderPhones(products: Product[]) {
  return products.map((product) => {
    return (
      <div key={product.id} className="col-flex-xs-6 col-flex-sm-6 col-flex-md-4 col-flex-lg-3">
        <PhoneCard product={product} selected={(id) => phoneSelected(id)} />
      </div>
    );
  });
}

function renderDummies(waitForPage: boolean) {
  const dummiesArray = [...Array(PHONES_CHUNK_SIZE).keys()];
  if (!waitForPage) {
    return null;
  }
  return dummiesArray.map((num) => {
    return (
      <div key={`dummy-${num}`} className="col-flex-xs-6 col-flex-sm-6 col-flex-md-4 col-flex-lg-3">
        <DummyPhoneCard />
      </div>
    );
  });
}

function renderEndLine(lastPageAchived: boolean, listEnd: React.MutableRefObject<null>) {
  return !lastPageAchived && <div ref={listEnd} style={{ marginBottom: '40px' }} />;
}

function phoneSelected(id: string): void {
  EventEmitter.eventEmmiterFactory(EventsRegistry.PHONE_SELECTED_FOR_DISPLAY).emitEvent(id);
}

export default PhonesListView;
