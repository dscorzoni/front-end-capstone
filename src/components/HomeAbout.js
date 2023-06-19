import AboutImg1 from '../assets/restaurant_food.jpg';
import AboutImg2 from '../assets/mario_adrian_a.jpg';

function HomeAbout() {
    return(
        <div className="home-about">
            <div className="container">
                    <div className="about-content">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum eligendi debitis esse velit corrupti?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum eligendi debitis esse velit corrupti?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum eligendi debitis esse velit corrupti?
                    </p>
                </div>
                <div className="about-images">
                    <img src={AboutImg1} alt="Restaurant Food" className="img-restaurant-food" />
                    <img src={AboutImg2} alt="Mario and Adrian" className="img-mario-adrian" />
                </div>
            </div>
        </div>
    )
}

export default HomeAbout;