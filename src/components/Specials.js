import { Link } from 'react-router-dom';
import SpecialsCard from './SpecialsCard';
import ImgGreekSalad from '../assets/specials_greek_salad.jpg';
import ImgBruschetta from '../assets/specials_bruschetta.svg';
import ImgLemonDessert from '../assets/specials_lemon_dessert.jpg';

function Specials() {

    const SpecialsItems = [
        {
            dish: "Greek Salad",
            image: ImgGreekSalad,
            price: "$13.00",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum eligendi debitis esse velit corrupti?"
        },
        {
            dish: "Bruschetta",
            image: ImgBruschetta,
            price: "$11.00",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum eligendi debitis esse velit corrupti?"
        },
        {
            dish: "Lemon Dessert",
            image: ImgLemonDessert,
            price: "$9.00",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum eligendi debitis esse velit corrupti?"
        }
    ]


    return(
        <div className="specials">
            <div className="container">
                <div className="specials-header">
                    <h1>Specials</h1>
                    <Link to="menu" className="view-menu-button">View Menu</Link>
                </div>
                <div className="specials-card-list">
                    {
                        /* Mapping over items on SpecialsItems */
                        SpecialsItems.map((item) => {
                            return(
                            <SpecialsCard
                                key={item.dish}
                                image={item.image}
                                dish={item.dish}
                                price={item.price}
                                description={item.description}
                            />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Specials;