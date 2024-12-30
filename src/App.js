import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Product from "./Components/Product";
import "./index.css";
import Favorite from "./Components/Favorite";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Product />} />
        <Route path="/Favorite" element={<Favorite />} />
      </Routes>
    </Router>
  );
}

export default App;
