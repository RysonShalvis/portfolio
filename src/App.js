import './App.css';
import FeaturedProjects from './FeaturedProjects';
import Header from './Header'
import Home from './Home';
import Contact from './Contact';
import { HashRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotAvailable from './NotAvailable';

function App() {
  return (
    <div className="App">

      <HashRouter basename="/">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio/yelp-api" component={NotAvailable} />
        <Route exact path="/portfolio/invision-clone" component={NotAvailable} />
        <Route exact path="/portfolio/trick-creator" component={NotAvailable} />
        <Contact />
      </HashRouter>
    </div>
  );
}

export default App;
