import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import DetailsPage from './pages/DetailsPage'

import './assets/scss/style.scss'
function App() {
  return <>
    <Router>
      <Route exact path="/" component={LandingPage}></Route>
      <Route exact path="/properties/:id" component={DetailsPage}></Route>
    </Router>
  </>
}

export default App;
