import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HouseDetail from './components/detail/HouseDetail';

function App() {
  return (
    <div className="App">
    <div> Navbar </div>
    <hr></hr>
    <Router>
      <Routes>
        <Route path='' element={<HouseDetail/>} />
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
