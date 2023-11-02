
import './App.css';
import { Route,Routes,Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Location from './Location';

function App() {
  return (
    <div>
      <nav>
        <ul> 
          <li> 
        <Link to="/">Home</Link>
        </li><li>
        <Link to="/contact"> Contact</Link>
        </li><li>
        <Link to="/location"> Location</Link>
        </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </div>
  );
}

export default App;
