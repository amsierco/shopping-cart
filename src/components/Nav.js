import { Link } from "react-router-dom";
import React from "react";

import '../styles/navbar.css';

const Nav = () => {
    return (
        <div className="navbar">
            <div className="logo">
                Fancy Logo
            </div>
            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/">Cart</Link>
            </nav>
        </div>
    );
}

export default Nav;