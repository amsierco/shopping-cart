import { Link } from "react-router-dom";
import React from "react";

import '../styles/navbar.css';

const Nav = () => {
    return (
        <div className="navbar">
            <h2 className="logo">
                Elevation Running
            </h2>
            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/">Cart</Link>
            </nav>
        </div>
    );
}

export default Nav;