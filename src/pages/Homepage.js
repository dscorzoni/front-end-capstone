import Hero from '../components/Hero';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';
import HomeAbout from '../components/HomeAbout';

function Homepage() {
    return(
        <main>
            <Hero />
            <Specials />
            <Testimonials />
            <HomeAbout />
        </main>
    )
}

export default Homepage;