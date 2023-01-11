// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AppHeader } from '@the-phone/ui';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AppNavigateProvider from './app-navigate-provider/app-navigate-provider';
import loadable from '@loadable/component';

const PhonesSearchPage = loadable(() => import('./pages/phones-search-page/phones-search-page'));
const PhoneDetailsPage = loadable(() => import('./pages/phone-details-page/phone-details-page'));
const ShoppingcartPage = loadable(() => import('./pages/shoppingcart-page/shoppingcart-page'));

export function App() {
  return (
    <BrowserRouter>
      <AppNavigateProvider />
      <AppHeader title="The phone store" srcLogo="/logo.png" srcShoppingcart="/shoppingcart.svg" />
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
