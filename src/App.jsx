import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Products from "./pages/products/products";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/cart" element={<></>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
