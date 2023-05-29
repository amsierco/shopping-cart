import { Link } from "react-router-dom";
import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/navbar.css';
import { faBagShopping, faMountainSun } from "@fortawesome/free-solid-svg-icons";

const Nav = ({cart, isCartActive, toggle}) => {

    const toggleCart = () => {
        toggle(!isCartActive);
    }

    return (
        <div className="navbar">
            <Link to="/">
                <h2 className="logo">
                    <FontAwesomeIcon icon={faMountainSun} />
                    <div>Elevation Running</div>
                </h2>
            </Link>
            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <button onClick={toggleCart} className="nav-cart"><FontAwesomeIcon icon={faBagShopping} />
                    <div className="cart-counter">{cart.length}</div>
                </button>
            </nav>
        </div>
    );
}

export default Nav;