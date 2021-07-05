import './App.css';
import Header from './Header'
import Home from './Home';
import Contact from './Contact';
import { HashRouter, Route } from 'react-router-dom';
//import NotAvailable from './NotAvailable';
import YelpApi from './YelpApi';
import fullpageInvision from './fullpageInvision';
import FullPageTrickCreator from './FullPageTrickCreator';

function App() {
  return (
    <div className="App">

      <HashRouter basename="/">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio/yelp-api" component={YelpApi} />
        <Route exact path="/portfolio/invision-clone" component={fullpageInvision} />
        <Route exact path="/portfolio/trick-creator" component={FullPageTrickCreator} />
        <Contact />
      </HashRouter>
    </div>
  );
}

export default App;
