import HeroImage from '../assets/restaurant_hero.jpg';
import { Link } from 'react-router-dom';

function Hero() {
    return(
        <div className="hero">
            <div className="container">
                <div className="hero-content">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum eligendi debitis esse velit corrupti?</p>
                    <Link className="hero-cta" to="/reservations">Reserve a Table</Link>
                </div>
                <img className="hero-image" alt="Chef preparing a salad" src={HeroImage} />
            </div>
        </div>
    )
}

export default Hero;