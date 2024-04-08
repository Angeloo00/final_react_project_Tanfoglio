import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contatti from './pages/Contatti';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/menu' element={<Menu />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contatti' element={<Contatti />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
