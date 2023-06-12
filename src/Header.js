import Logo from './assets/Logo.svg';
import Nav from './Nav';

function Header() {
    return(
        <header>
            <img src={Logo} alt="Little Lemon Logo"/>
            <Nav />
        </header>
    )
}

export default Header;