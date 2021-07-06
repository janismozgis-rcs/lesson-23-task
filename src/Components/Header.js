import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/article" className="nav-link">Article</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/tags" className="nav-link">Tags</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;