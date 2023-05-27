import { Link } from "react-router-dom";
import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/navbar.css';
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const Nav = ({cart, isCartActive, toggle}) => {

    const toggleCart = () => {
        toggle(!isCartActive);
    }

    return (
        <div className="navbar">
            <h2 className="logo">
                Elevation Running
            </h2>
            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <button onClick={toggleCart} className="nav-cart"><FontAwesomeIcon icon={faBagShopping} /></button>
            </nav>
        </div>
    );
}

export default Nav;