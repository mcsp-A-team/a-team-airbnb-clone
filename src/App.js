import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HouseDetail from './components/detail/HouseDetail';

import Footer from "./components/Footer";
import Navbar from "../src/components/navbar/NavBar";

function App() {
  return ( 
    <div className="App">
    <Router>
      <Routes>
        <Route path='' element={<HouseDetail/>} />
      </Routes>
    </Router>
      
     <Navbar />
      <Footer />

    </div>
  );
}

export default App;
