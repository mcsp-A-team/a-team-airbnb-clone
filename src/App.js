import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { NavContext } from "./components/navbar/NavContext";
import HouseDetail from './components/detail/HouseDetail';
import Footer from "./components/Footer";
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

            {/*this will be the search result page, replace CountrySearchResultTest with your component*/}
            <Route
              path={`/${searchInput}`}
              element={<CountrySearchResultTest />}
            />
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
