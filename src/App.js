import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HouseDetail from './components/detail/HouseDetail';

import Footer from "./components/Footer";
import Navbar from "../src/components/navbar/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/housedetail" element={<HouseDetail />} />
          {/* <Route path="/" element={<Homepage />} /> */}
          
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
