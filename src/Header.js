import Logo from './assets/Logo.svg';
import Nav from './Nav';

function Header() {
    return(
        <header>
            <div className="container">
                <img src={Logo} alt="Little Lemon Logo"/>
                <Nav />
            </div>
        </header>
    )
}

export default Header;