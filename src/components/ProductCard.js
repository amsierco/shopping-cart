const ProductCard = ({title, image, price, id}) => {

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
            </div>
        </div>
    );
}

export default ProductCard;