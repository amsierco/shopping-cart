import CatagoryCard from "./CatagoryCard";
import ProductCard from "./ProductCard";
import * as DATA from "../data/data";

import '../styles/product.css';

const Products = ({type='overview', cart, updateCart}) => {
    
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
        let tempArr = id.replace('-', ' ').split(' ');
        let final = '';
        for(let i=0; i<tempArr.length; i++){
            final += tempArr[i].charAt(0).toUpperCase().concat(tempArr[i].slice(1));
            if(i+1<tempArr.length){ final += ' '; }
        }
        return final;
    }
    
    const specificProduct = (obj) => {
        return (
            obj !== undefined ? 
            <><header><h1>{headerFromID(type)}</h1></header>
                <section className="product-container">
                {obj.map(el => {
                    return <ProductCard title={el.name} image={el.image} price={el.price} key={el.key} id={el.key} data={el} cart={cart} updateCart={updateCart}/>
                })}
                </section></>
            : null
        );
    };

    return (<>
        <main className="products">
            {type === 'overview' ? overview : null}
            {type === 'male-apparal' ? specificProduct(DATA.maleApparal) : null}
            {type === 'female-apparal' ? specificProduct(DATA.femaleApparal) : null}
            {type === 'footwear' ? specificProduct(DATA.footwear) : null}
            {type === 'watches' ? specificProduct(DATA.watches) : null}
            {type === 'essentials' ? specificProduct(DATA.essentials) : null}
            {type === 'nutrition' ? specificProduct(DATA.nutrition) : null}
        </main>
    </>);
}

export default Products;