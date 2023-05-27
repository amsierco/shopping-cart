import { useState, useContext, createContext } from "react";

import '../styles/cart.css';

const Cart = () => {
    // const [cart, updateCart] = useContext([]);
    // const cartContext = createContext([]);
    // const [isCartActive, toggle] = useContext(true); //CHANGE TO FALSE IN PRODUCTION

    // const test = useContext(CartContext);

    const [totalCost, updateTotalCost] = useState(0);

    return (
        <div className="cart-container">
            <ul className="cart-overview">
                {/* {cart.map(el => {
                    return(
                        <li className="cart-item"> 
                            <div className="thumbnail">{el.image}</div>
                            <div className="cart-name">{el.name}</div>
                            <div className="cart-item-price">{el.price}</div>
                        </li>
                    );
                })} */}
            </ul>
            {/* <div>1{test}2</div> */}
            <div className="cart-total-price">{'$' + totalCost}</div>
            <button className="checkout">Checkout</button>
            <div className="disclaimer">
                This is not a real store. All products listed are not actually for sale and cannot be purchased.
            </div>
        </div>
        );
}

export default Cart;