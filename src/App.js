import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import DetailsPage from './pages/DetailsPage'

import './assets/scss/style.scss'
import Checkout from 'pages/Checkout'
function App() {
  return <>
    <Router>
      <Route exact path="/" component={LandingPage}></Route>
      <Route exact path="/properties/:id" component={DetailsPage}></Route>
      <Route exact path="/checkout" component={Checkout}></Route>

    </Router>
  </>
}

export default App;
