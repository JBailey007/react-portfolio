import '../styles/Navbar.css';

function Header() {
    return (
        <nav className="navbar">
            <div className="website-title"> Jalen Bailey</div>
            <div className="navbar-links">
                <ul>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Work">Work</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;