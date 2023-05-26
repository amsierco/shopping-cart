import CatagoryCard from "./CatagoryCard";
import ProductCard from "./ProductCard";
import * as DATA from "../data/data";

import '../styles/product.css';

const Products = ({type='overview'}) => {
    
    const overview = (() => {
        return (<>
        <header><h1>Categories</h1></header>
            <section className="catagory-container">
                {DATA.catagory.map(el => {
                    return <CatagoryCard title={el.title} image={el.image} key={el.key} id={el.key}/>
                })}
            </section>
        </>);
    })();

    function headerFromID(id){
        //Go through id removeing '-' and Capitalizing First Letters
        return 'TEMP';
    }
    
    const specificProduct = (obj) => {
        return (
            obj !== undefined ? 
            <><header><h1>{headerFromID(type)}</h1></header>
                <section className="catagory-container">
                {obj.map(el => {
                    return <ProductCard title={el.name} image={el.image} price={el.price} key={el.key} id={el.key}/>
                })}
                </section></>
            : null
        );
    };

    return (<>
        <main className="products">
            {type === 'overview' ? overview : null}
            {type === 'male-apparal' ? specificProduct(DATA.maleApparal) : null}
            {type === 'female-apparal' ? specificProduct() : null}
            {type === 'footwear' ? specificProduct() : null}
            {type === 'watches' ? specificProduct() : null}
            {type === 'essentials' ? specificProduct() : null}
            {type === 'nutrition' ? specificProduct() : null}
        </main>
    </>);
}

export default Products;