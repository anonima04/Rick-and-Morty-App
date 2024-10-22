import "./App.css";
import Header from "./Components/Header/Header";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import AboutPage from "./Pages/AboutPages/AboutPages";
import HomePage from "./Pages/HomePage/HomePage";
import PersonajePage from "./Pages/PersonajePage/PersonajePage";
import FilterPage from "./Pages/FilterPage/FilterPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/filter" element={<FilterPage />} />
          <Route path="/personaje" element={<PersonajePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
