import Logo from '../assets/littlelemon_footer.png';
import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';

function Footer() {
    return(
        <footer>
            <div className="container">
                <img src={Logo} width="50" alt="Little Lemon Logo" />
                <div className="social-media-icons">
                    <a href="http://www.facebook.com/littlelemon"><FaFacebook size="30" /></a>
                    <a href="http://www.instagram.com/littlelemon"><FaInstagram size="30" /></a>
                    <a href="http://www.whatsapp.com/littlelemon"><FaWhatsapp size="30" /></a>
                    <a href="http://www.tiktok.com/littlelemon"><FaTiktok size="30" /></a>
                </div>
                <div className="contact-info">
                    <h1>Contact Us</h1>
                    <p>(999) 999-9999</p>
                    <p>1 Main St, Chicago</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;