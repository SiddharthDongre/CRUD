import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.js';
import Home from './Components/Home/Home.js';
import Footer from './Components/Footer/Footer.js';

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;
