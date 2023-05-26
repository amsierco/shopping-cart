import background from '../images/benjamin-huggett-unsplash.jpg';
import '../styles/homepage.css';

const Homepage = () => {
    return (<>
        <main className="homepage">
            <img src={background} alt="" className="hero-background"></img>
            <h1 className='hero'>
                Elevation Running
            </h1>
        </main>
    </>);
}

export default Homepage;