import { Link } from 'react-router-dom'
import './index.scss'

export default function Nav() {
    return(
        <nav className="nav glass">
            <div className="nav__logo"></div>
            <div className="nav__links">
                <Link to="/" className="nav__link">Home</Link>
                <Link to="/search" className="nav__link">Search</Link>
                <Link to="/saved" className="nav__link">Saved</Link>
                <Link to="/map" className="nav__link">Map</Link>
            </div>
            <div className="nav__copyright">© adelcourte - 2022</div>
        </nav>
    )
}