import { FaStar } from 'react-icons/fa';

function TestimonialCard(props) {
    return(
        <div className="testimonial-card">
            <h2>{props.name}</h2>
            <img src={props.avatar} alt="Profile Avatar" />
            <p className="testimonial-stars">{props.stars} <FaStar className="star-icon" /></p>
            <p className="testimonial-review">{props.review}</p>
        </div>
    )
}

export default TestimonialCard;