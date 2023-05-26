const ProductCard = ({title, image, price, id}) => {

    return (
        <div className="product-card">
            <img 
                src={image} 
                alt={id} 
                className="product-image" 
                id={id}
            />
            <h2 className="product-title">{title}</h2>
            <h3 className="product-price">{'$'+price}</h3>
        </div>
    );
}

export default ProductCard;