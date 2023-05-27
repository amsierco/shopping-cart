const ProductCard = ({title, image, price, id, data, cart, updateCart}) => {

    const clickHandler = () => {
        updateCart([...cart, data]);
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