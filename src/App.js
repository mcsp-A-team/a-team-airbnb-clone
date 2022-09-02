import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { NavContext } from "./components/navbar/NavContext";

import HouseDetail from "./components/detail/HouseDetail";
import Home from './components/homepage/Home';

import Footer from "./components/homepage/Footer";
import Navbar from "../src/components/navbar/NavBar";
import CountrySearchResultTest from './components/navbar/CountrySearchResultTest';


function App() {
  const { searchInput } = useContext(NavContext);
  // console.log(searchInput);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/housedetail" element={<HouseDetail />} />
          {/* <Route path="/" element={<Homepage />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
