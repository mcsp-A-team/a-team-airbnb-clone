import "./App.css";
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { useContext } from "react";
import { NavContext } from "./components/navbar/NavContext";

import HouseDetail from "./components/detail/HouseDetail";
import Home from "./components/Home";
import Wishlist from "./components/Wishlist"
import Footer from "./components/Footer";
import Navbar from "../src/components/navbar/NavBar";



function App() {
  const { searchInput } = useContext(NavContext);
  const [wishlist, setWishlist] = useState([]);

  const updateWishlist = (id) => {
    console.log('updated')
    if (wishlist.includes(id)) {
      const newWishlist = wishlist.filter((wish) => wish !== id)
      setWishlist(newWishlist)
    }
    setWishlist(prevWishlist => [...prevWishlist, id])
  } 

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/housedetail/:id" element={<HouseDetail />} />
          <Route path="/home" element={<Home  updateWishlist={updateWishlist}/>} />
          <Route path="/wishlist" element={<Wishlist wishlist={wishlist}/>} />
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
