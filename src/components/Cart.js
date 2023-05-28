import '../styles/cart.css';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';

const Cart = ({cart, updateCart, isCartActive, toggle}) => {
    const finalCost = (() => {
        let total = 0;
        cart.map(p => [p.price, p.quantity]).map(el => {
            return total += (el[0]*el[1]);
        });
        return total.toFixed(2);
    })();

    const toggleCart = () => {
        toggle(!isCartActive);
    }

    useEffect(() => {
        setTimeout(function(){
            document.getElementById('root').classList.remove('preload');
        },1000);
    }, []);

    function removeFromCart(rmk = -1){
        let currentQuantitiy = 0;
        let temp = [...cart];
        let index = -1;

        cart.map(p => [p.key, p.quantity]).forEach(el => {
            if(el[0] === rmk){
                currentQuantitiy =  el[1];
                index = temp.findIndex(item => item.key === el[0]);
            }
        });

        let temp2 = {...temp[index]};
        temp2.quantity = parseInt(currentQuantitiy)-1;

        if(temp2.quantity <= 0){
            temp.splice(index, 1);
            updateCart(temp);
        } else {
            temp[index] = temp2;
            updateCart(temp);
        }
    }

    return (
        <div className={(isCartActive ? 'cart-container cart-active' : 'cart-container cart-deactive')}>
            <div className='close'>
                <button className="closebtn" onClick={toggleCart}><FontAwesomeIcon icon={faX} /></button>
            </div>
            <h2 className="title">Checkout</h2>
            <ul className="cart-overview">
                {cart.map(p => [p.name, p.image, p.price, p.key, p.quantity]).map(el => {
                    return(
                        <li key={el[3]} className="cart-item"> 
                            <img className="thumbnail" src={el[1]} alt=''></img>
                            <div className="cart-name">{el[0]}</div>
                            <div className="cart-item-price">
                                {'$'+(el[2]*el[4]).toFixed(2)+' (x'+el[4]+')'}
                            </div>
                            <button className='cart-remove' onClick={() => removeFromCart(el[3])}>rm</button>
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
        );
}

export default Cart;