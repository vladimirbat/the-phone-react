// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AppHeader, HEADER_EVENTS } from '@the-phone/ui';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AppNavigateProvider from './app-navigate-provider/app-navigate-provider';
import loadable from '@loadable/component';
import { EventEmitter, EventsRegistry } from '@the-phone/commons';

const PhonesSearchPage = loadable(() => import('./pages/phones-search-page/phones-search-page'));
const PhoneDetailsPage = loadable(() => import('./pages/phone-details-page/phone-details-page'));
const ShoppingcartPage = loadable(() => import('./pages/shoppingcart-page/shoppingcart-page'));

export function App() {
  return (
    <BrowserRouter>
      <AppNavigateProvider />
      <AppHeader title="The phone store" srcLogo="/logo.png" srcShoppingcart="/shoppingcart.svg" headerOnClick={headerOnClick} />
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

const clickEmmiters = {
  SHOPPINGCART_ICON_CLICK: () => EventEmitter.eventEmmiterFactory(EventsRegistry.GO_TO_SHOPPINGCART).emitEvent(),
  TITLE_CLICK: () => EventEmitter.eventEmmiterFactory(EventsRegistry.GO_TO_SEARCH_PHONES).emitEvent(),
  LOGO_ICON_CLICK: () => EventEmitter.eventEmmiterFactory(EventsRegistry.GO_TO_SEARCH_PHONES).emitEvent(),
};
function headerOnClick(event: HEADER_EVENTS) {
  clickEmmiters[event]();
}