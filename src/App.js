import './App.css';
import FeaturedProjects from './FeaturedProjects';
import Header from './Header'
import Home from './Home';
import Contact from './Contact';
import { HashRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <HashRouter basename="/">
        <Header />
        <Route exact path="/" component={Home} />
        <Contact />
      </HashRouter>
    </div>
  );
}

export default App;
