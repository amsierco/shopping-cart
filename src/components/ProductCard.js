const ProductCard = ({title, image, price, id, data, cart, updateCart}) => {

    const clickHandler = () => {
        let currentQuantitiy = 0;
        let temp = [...cart];
        let index = -1;
        let dup = false;

        cart.map(p => [p.key, p.quantity]).forEach(el => {
            if(el[0] === id){
                currentQuantitiy =  el[1];

                index = temp.findIndex(item => item.key === el[0]);
                dup = true;
            }
        });

        if(dup){
            let temp2 = {...temp[index]};
            temp2.quantity = 1+parseInt(currentQuantitiy);
            temp[index] = temp2;
            updateCart(temp);
        } else {
            let newData = data;
            let quantity = {quantity: 1+parseInt(currentQuantitiy)};
            Object.assign(newData, quantity);
            updateCart([...cart, newData]);
        }
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
                <h3 className="product-price">{'$'+price}
                    <button onClick={clickHandler}>Add To Cart</button>
                </h3>
            </div>
        </div>
    );
}

export default ProductCard;