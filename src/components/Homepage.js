import { Link } from 'react-router-dom';

import background from '../images/benjamin-huggett-unsplash.jpg';
import '../styles/homepage.css';

const Homepage = () => {
    return (<>
        <main className="homepage">
            <div className='hero'>
                <img src={background} alt="" className="hero-background"></img>
                <div className='hero-text'>
                    <h1>Elevation Running</h1>
                    <Link to='/products' className='catalog-link'>Expore our catalog</Link>
                </div>
            </div>
            {/* <div className='explore'>
                Explore our catalog
            </div> */}
        </main>
    </>);
}

export default Homepage;