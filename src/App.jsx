import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import AddBeerPage from "./pages/AddBeerPage";
import NavBar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [beers, setBeers] = useState([]);
  return (
    <div className="App">
      <h1>LAB | React IronBeers</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/beers"
          element={<AllBeersPage beers={beers} setBeers={setBeers} />}
        />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<AddBeerPage />} />
        <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
