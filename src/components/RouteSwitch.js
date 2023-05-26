import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Homepage from "./Homepage";
import Products from "./Products";

import '../styles/global.css';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
            <Nav />
            <Homepage />  
        </>}/>
        <Route path="/products" element={<>
            <Nav />
            <Products />
        </>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;