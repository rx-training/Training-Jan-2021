import logo from '../../logo.svg'
import './navbar.scss'

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="tours logo" width="60" height="60" />
            <ul className="navbar-links">
                <li>
                    <a href="/" className="navbar-link">home</a>
                </li>
                <li>
                    <a href="/" className="navbar-link">about</a>
                </li>
                <li>
                    <a href="/" className="navbar-link">tours</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar