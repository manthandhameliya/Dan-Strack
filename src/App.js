import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Product from "./Components/Product";
import "./index.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
