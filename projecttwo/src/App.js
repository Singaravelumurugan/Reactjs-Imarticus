import logo from './logo.svg';
import './App.css';
import Test from './Test';
import Welcome from './Welcome';
import About from './About';
import Location from './Location';
import Contact from './Contact';
import Additional from './Additional';
import Array from './Array';
import Login from './Login';
import { Routes,Route,Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Routes>
           <Route path="/" element={<About />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/location" element={<Location />} />

     </Routes>
    </div>
  );
}

export default App;
