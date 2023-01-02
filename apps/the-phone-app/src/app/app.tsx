// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AppHeader } from '@the-phone/ui';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import PhoneDetailsPage from './pages/phone-details-page/phone-details-page';
import PhonesSearchPage from './pages/phones-search-page/phones-search-page';

export function App() {
  return (
    <BrowserRouter>
      <AppHeader title="The phone store" srcLogo="/src/assets/logo.png" />
      <div className="app container">
        <nav className="app-nav">
          <ul>
            <li>
              <Link to="/">Search</Link>
              <Link to="/phone-detail/1">Detail</Link>
            </li>
          </ul>
        </nav>
        <div className="app-content">
          <div className="app container">
            <Routes>
              <Route path="/" element={<PhonesSearchPage />} />
              <Route path="/phone-detail/:id" element={<PhoneDetailsPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
