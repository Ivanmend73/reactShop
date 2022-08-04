import React from "react";
import Header from "./components/Header";
import "./App.css"
//router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<ProductListing/>}/>
          <Route path="/products/:productId" element={<ProductDetail/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
