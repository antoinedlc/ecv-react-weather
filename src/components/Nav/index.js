import { Link } from 'react-router-dom'
import './index.scss'

export default function Nav() {
    return(
        <nav className="nav glass">
            <Link to="/home" className="nav__link">Home</Link>
            <Link to="/search" className="nav__link">Search</Link>
            <Link to="/saved" className="nav__link">Saved</Link>
        </nav>
    )
}