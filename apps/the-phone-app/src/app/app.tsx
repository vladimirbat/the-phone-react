// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AppHeader } from '@the-phone/ui';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AppNavigateProvider from './app-navigate-provider/app-navigate-provider';
import PhoneDetailsPage from './pages/phone-details-page/phone-details-page';
import PhonesSearchPage from './pages/phones-search-page/phones-search-page';
import ShoppingcartPage from './pages/shoppingcart-page/shoppingcart-page';

export function App() {
  return (
    <BrowserRouter>
      <AppNavigateProvider />
      <AppHeader title="The phone store" srcLogo="/src/assets/logo.png" />
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
