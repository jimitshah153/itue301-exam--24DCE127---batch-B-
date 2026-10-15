import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-container">

                <NavLink to="/" className="brand">
                    <div className="brand-icon">📚</div>

                    <div>
                        <h2>Libra<span>ry</span></h2>
                        <p>Book Management</p>
                    </div>
                </NavLink>

                <div className="nav-links">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/books"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Books
                    </NavLink>

                    <NavLink
                        to="/borrow"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Borrow
                    </NavLink>

                </div>

                <NavLink to="/borrow" className="nav-button">
                    Borrow a Book →
                </NavLink>

            </div>
        </nav>
    );
}

export default Navbar;