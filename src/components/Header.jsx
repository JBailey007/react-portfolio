import '../styles/Navbar.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar">
            <div className="website-title"> Jalen Bailey</div>
            <div className="navbar-links">
                <ul>
                    <li><Link to ={`/`}>About</Link></li>
                    <li><Link to ={`/work`}>Work</Link></li>
                    <li><Link to ={`/contact`}>Contact Me</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;