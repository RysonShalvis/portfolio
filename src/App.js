import './App.css';
import FeaturedProjects from './FeaturedProjects';
import Header from './Header'
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
        <Header />
        <HomePage />
        <FeaturedProjects />
    </div>
  );
}

export default App;
