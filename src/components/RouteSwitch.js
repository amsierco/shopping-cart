import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Homepage from "./Homepage";
import Products from "./Products";
import Cart from "./Cart";
import { useState, createContext } from "react";

import '../styles/global.css';

const CartContext = createContext();

const RouteSwitch = () => {
  const [cart, updateCart] = useState([]);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CartContext.Provider value={cart}>
            <Nav />
            <Homepage />  
            <Cart />
        </CartContext.Provider>}/>

        <Route path="/products" element={<>
            <Nav />
            <Products type={'overview'}/>
            <Cart />
        </>}/>

        <Route path="/products/male-apparal" element={<>
            <Nav />
            <Products type={'male-apparal'}/>
            <Cart />
        </>}/>

        <Route path="/products/female-apparal" element={<>
            <Nav />
            <Products type={'female-apparal'}/>
            <Cart />
        </>}/>
        
        <Route path="/products/footwear" element={<>
            <Nav />
            <Products type={'footwear'}/>
            <Cart />
        </>}/>

        <Route path="/products/watches" element={<>
            <Nav />
            <Products type={'watches'}/>
            <Cart />
        </>}/>

        <Route path="/products/essentials" element={<>
            <Nav />
            <Products type={'essentials'}/>
            <Cart />
        </>}/>
        
        <Route path="/products/nutrition" element={<>
            <Nav />
            <Products type={'nutrition'}/>
            <Cart />
        </>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;