import './App.css';
import FeaturedProjects from './FeaturedProjects';
import Header from './Header'
import Home from './Home';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Home />
        <Contact />
      </Router>
    </div>
  );
}

export default App;
