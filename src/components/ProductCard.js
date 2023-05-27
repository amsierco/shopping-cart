const ProductCard = ({title, image, price, id, data, cart, updateCart}) => {

    const clickHandler = () => {
        let currentQuantitiy = 0;
        let temp = cart;

        cart.map(p => [p.key, p.quantity]).forEach(el => {
            if(el[0] === id){
                currentQuantitiy =  el[1];

                let indx = temp.findIndex(item => item.key === el[0]);
                temp.splice(indx, 1);
            }
        });
        
        updateCart(temp);
        let newData = data;
        let quantity = {quantity: 1+parseInt(currentQuantitiy)};
        Object.assign(newData, quantity);
        updateCart([...cart, newData]);

    }

    return (
        <div className="product-card">
            <div className="product-img-wrapper">
                <img 
                    src={image} 
                    alt={id} 
                    className="product-image" 
                    id={id}
                />
            </div>
            <div className="product-details">
                <h2 className="product-title">{title}</h2>
                <h3 className="product-price">{'$'+price}</h3>
                <button onClick={clickHandler}>Add To Cart</button>
            </div>
        </div>
    );
}

export default ProductCard;