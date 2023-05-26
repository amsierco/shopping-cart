import { Link } from "react-router-dom";
import React from "react";

const Nav = () => {
    return (
        <div className="navbar">
            <div className="logo">
                Fancy Logo
            </div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/">Cart</Link>
            </nav>
        </div>
    );
}

export default Nav;