import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LandingPage from './pages/LandingPage';
import DetailsPage from './pages/DetailsPage';
import NotFound from './pages/404';
import Example from './pages/Example';

import './assets/scss/style.scss';
import Checkout from 'pages/Checkout';
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/properties/:id" element={<DetailsPage />}></Route>
        <Route exact path="/checkout" element={<Checkout />}></Route>
        <Route path="/example" component={<Example />} />
        <Route path="*" component={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
