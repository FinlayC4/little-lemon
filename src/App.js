import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

import Home from "./pages/Home.js";
import Reservations from "./pages/Reservations.js";
import ReservationConfirmed from "./pages/ReservationConfirmed.js";

function App() {
  return (
    <Router>
      <Header></Header> 
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/reservations" element={<Reservations/>}/>
        <Route path="/reservation-confirmed" element={<ReservationConfirmed/>}/>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
