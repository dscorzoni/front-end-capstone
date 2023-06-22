import TestimonialCard from './TestimonialCard';

function Testimonials() {
    const TestimonialsList = [
        {
            name: "Josie Cook",
            avatar: "https://i.pravatar.cc/100?img=1",
            stars: "5.0",
            review: "This cozy restaurant has left the best impressions!"
        },
        {
            name: "Benito Sharp",
            avatar: "https://i.pravatar.cc/100?img=12",
            stars: "4.8",
            review: "It’s the cutest little spot with amazing food."
        },
        {
            name: "Travis Lester",
            avatar: "https://i.pravatar.cc/100?img=3",
            stars: "4.5",
            review: "The ambiance is very welcoming and charming."
        },
        {
            name: "Tabatha Vincent",
            avatar: "https://i.pravatar.cc/100?img=4",
            stars: "4.9",
            review: "Food is pretty good, some italian classics and twists."
        },

    ]

    return(
        <section className="testimonials">
            <div className="container">
                <h1>Testimonials</h1>
                <div className="testimonials-list">
                    {
                        TestimonialsList.map((item) => {
                            return(
                                <TestimonialCard key={item.avatar} name={item.name} avatar={item.avatar} stars={item.stars} review={item.review} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Testimonials;