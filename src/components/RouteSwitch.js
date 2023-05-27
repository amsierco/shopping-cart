import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Homepage from "./Homepage";
import Products from "./Products";
import Cart from "./Cart";

import '../styles/global.css';

const RouteSwitch = () => {
  const [cart, updateCart] = useState([]);
  const [isCartActive, toggle] = useState(false);


  return (
    <BrowserRouter>
      <Nav cart={cart} isCartActive={isCartActive} toggle={toggle}/>
      <Routes>
        <Route path="/" element={<Homepage />}/>      
        <Route path="/products" element={<Products type={'overview'} cart={cart} updateCart={updateCart}/>}/>
        <Route path="/products/male-apparal" element={<Products type={'male-apparal'} cart={cart} updateCart={updateCart}/>}/>
        <Route path="/products/female-apparal" element={<Products type={'female-apparal'} cart={cart} updateCart={updateCart}/>}/>
        <Route path="/products/footwear" element={<Products type={'footwear'} cart={cart} updateCart={updateCart}/>}/>
        <Route path="/products/watches" element={<Products type={'watches'} cart={cart} updateCart={updateCart}/>}/>
        <Route path="/products/essentials" element={<Products type={'essentials'} cart={cart} updateCart={updateCart}/>}/>
        <Route path="/products/nutrition" element={<Products type={'nutrition'} cart={cart} updateCart={updateCart}/>}/>
      </Routes>
      <Cart cart={cart} updateCart={updateCart} isCartActive={isCartActive} toggle={toggle}/>
    </BrowserRouter>
  );
};

export default RouteSwitch;