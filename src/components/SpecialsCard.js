function SpecialsCard(props) {
    return(
        <div className="specials-card">
            <img src={props.image} className="dish-image" alt="Dish" />
            <div className="specials-card-header">
                <h3 className="specials-card-title">{props.dish}</h3>
                <span className="specials-dish-price">{props.price}</span>
            </div>
            <p className="specials-dish-description">{props.description}</p>
        </div>
    )
}

export default SpecialsCard;