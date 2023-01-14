// eslint-disable-next-line @typescript-eslint/no-unused-vars
import loadable from '@loadable/component';
import { EventEmitter, EventsRegistry, SessionData, SessionRegistry } from '@the-phone/commons';
import { AppBreadcumb, AppHeader, HEADER_EVENTS } from '@the-phone/ui';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { convertViewRegistryToFlowLevel, ViewsRegistry } from '../domain/requested-interfaces/views-registry';
import AppNavigateProvider from './app-navigate-provider/app-navigate-provider';

const breadcumbActions: { [key: string]: () => void } = {
  Search: () => EventEmitter.eventEmmiterFactory(EventsRegistry.GO_TO_SEARCH_PHONES).emitEvent(),
  Detail: () => EventEmitter.eventEmmiterFactory(EventsRegistry.GO_TO_PHONE_DETAIL).emitEvent(),
  Shoppingcart: () => EventEmitter.eventEmmiterFactory(EventsRegistry.GO_TO_SHOPPINGCART).emitEvent(),
};

const breadcumbLevels = Object.keys(breadcumbActions);

const clickEmmiters = {
  SHOPPINGCART_ICON_CLICK: () => EventEmitter.eventEmmiterFactory(EventsRegistry.GO_TO_SHOPPINGCART).emitEvent(),
  TITLE_CLICK: () => EventEmitter.eventEmmiterFactory(EventsRegistry.GO_TO_SEARCH_PHONES).emitEvent(),
  LOGO_ICON_CLICK: () => EventEmitter.eventEmmiterFactory(EventsRegistry.GO_TO_SEARCH_PHONES).emitEvent(),
};

const PhonesSearchPage = loadable(() => import('./pages/phones-search-page/phones-search-page'));
const PhoneDetailsPage = loadable(() => import('./pages/phone-details-page/phone-details-page'));
const ShoppingcartPage = loadable(() => import('./pages/shoppingcart-page/shoppingcart-page'));

export function App() {
  const [flowLevel, setFlowLevel] = useState(0);
  useEffect(() => subscribeToFlowLevelUpdates(setFlowLevel), []);

  return (
    <BrowserRouter>
      <AppNavigateProvider />
      <AppHeader
        title="The phone store"
        srcLogo="/logo.png"
        srcShoppingcart="/shoppingcart.svg"
        headerOnClick={headerOnClick}
      />
      <AppBreadcumb
        level={flowLevel}
        goToView={(bread) => breadcumbActions[bread]()}
        breadcumbLevels={breadcumbLevels}
      />
      <div className="app container mt-4">
        <div className="app-content">
          <div className="app container">
            <Routes>
              <Route path="/" element={<PhonesSearchPage />} />
              <Route path="/phone-detail/:id" element={<PhoneDetailsPage />} />
              <Route path="/shoppingcart" element={<ShoppingcartPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

function headerOnClick(event: HEADER_EVENTS) {
  clickEmmiters[event]();
}

function subscribeToFlowLevelUpdates(setFlowLevel: (level: number) => void): () => void {
  const subscription = SessionData.getObservable<ViewsRegistry>(SessionRegistry.CURRENT_PAGE).subscribe((currentPage) =>
    setFlowLevel(convertViewRegistryToFlowLevel(currentPage))
  );
  return () => subscription.unsubscribe();
}
