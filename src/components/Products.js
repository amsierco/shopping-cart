import CatagoryCard from "./CatagoryCard";
import { catagory } from "../data/data";

import '../styles/product.css';

const Products = () => {
    return (<>
        <main className="products">
            <header><h1>Categories</h1></header>
            <section className="catagory-container">
                {catagory.map(el => {
                    return <CatagoryCard title={el.title} image={el.image} key={el.key} id={el.key}/>
                })}
            </section>
        </main>
    </>);
}

export default Products;