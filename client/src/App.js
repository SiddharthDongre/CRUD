// import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar/Navbar.js';
import Home from "./Components/Home/Home.js";
import Footer from './Components/Footer/Footer.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={ <Home /> }></Route>
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
