// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import PhonesListView from './phones-module/phones-list-view/phones-list-view';

export function App() {
  return (
    <>
    {/* <BrowserRouter> */}
      <div className="app container">
        {/* <nav className="app-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav> */}
        <PhonesListView/>
        <div className="app-content">
          {/* <Routes>
            <Route path="/"> */}
              {/* <PhoneCard/ > */}
            {/* </Route>
          </Routes> */}
        </div>
      </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
