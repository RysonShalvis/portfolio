import './App.css';
import FeaturedProjects from './FeaturedProjects';
import Header from './Header'
import HomePage from './HomePage';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
        <Header />
        <HomePage />
        <FeaturedProjects />
        <Contact />
    </div>
  );
}

export default App;
