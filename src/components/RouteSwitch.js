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
            <Products type={'overview'}/>
        </>}/>

        <Route path="/products/male-apparal" element={<>
            <Nav />
            <Products type={'male-apparal'}/>
        </>}/>

        <Route path="/products/female-apparal" element={<>
            <Nav />
            <Products type={'female-apparal'}/>
        </>}/>
        
        <Route path="/products/footwear" element={<>
            <Nav />
            <Products type={'footwear'}/>
        </>}/>

        <Route path="/products/watches" element={<>
            <Nav />
            <Products type={'watches'}/>
        </>}/>

        <Route path="/products/essentials" element={<>
            <Nav />
            <Products type={'essentials'}/>
        </>}/>
        
        <Route path="/products/nutrition" element={<>
            <Nav />
            <Products type={'nutrition'}/>
        </>}/>

      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;