import '../styles/cart.css';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cart = ({cart, updateCart, isCartActive, toggle}) => {


    const finalCost = (() => {
        let total = 0;
        cart.map(p => [p.price]).map(el => {
            return total += el[0];
        });
        return total.toFixed(2);
    })();

    const toggleCart = () => {
        toggle(!isCartActive);
    }

    return (
        isCartActive ? 
            <div className="cart-container">
                <div className='close'>
                    <button className="closebtn" onClick={toggleCart}><FontAwesomeIcon icon={faX} /></button>
                </div>
                <h2 className="title">Checkout</h2>
                <ul className="cart-overview">
                    {cart.map(p => [p.name, p.image, p.price, p.key]).map(el => {
                        return(
                            <li key={el[3]} className="cart-item"> 
                                <img className="thumbnail" src={el[1]} alt=''></img>
                                <div className="cart-name">{el[0]}</div>
                                <div className="cart-item-price">{'$'+el[2]}</div>
                            </li>
                        );
                    })}
                </ul>
                <br/>
                <h4 className="cart-total-price">{'Total $' + finalCost}</h4>
                <br/>
                <button className="checkout">Checkout</button>
                <br/><br/><br/>
                <h2 className="disclaimer-title">Disclaimer!</h2>
                <div className="disclaimer">
                    This is not a real store. All products listed are not actually for sale and cannot be purchased.
                </div>
            </div>
        : null 
        );
}

export default Cart;