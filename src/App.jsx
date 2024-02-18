import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Products from "./pages/products/products";
import PageNotFound from "./components/pagenotfound/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/products" element={<Products></Products>}>
          {/* <Route path="card" element={<Card></Card>}></Route> */}
          {/* <Route path="/19"></Route>
          <Route path="/12"></Route>
          <Route path="/6"></Route>
          <Route path="/7"></Route>
          <Route path="/13"></Route>
          <Route path="/20"></Route>
          <Route path="/16"></Route>
          <Route path="/21"></Route>
          <Route path="/22"></Route>
          <Route path="/24"></Route>
          <Route path="/11"></Route>
          <Route path="/5"></Route>
          <Route path="/9"></Route>
          <Route path="/18"></Route>
          <Route path="/25"></Route>
          <Route path="/10"></Route>
          <Route path="/4"></Route>
          <Route path="/14"></Route>
          <Route path="/15"></Route>
          <Route path="/23"></Route>
          <Route path="/17"></Route>
          <Route path="/9"></Route> */}
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
