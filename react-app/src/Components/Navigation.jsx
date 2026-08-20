import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="nav-logo">Library System</h1>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/books" className="nav-link">
              Books
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/borrow" className="nav-link">
              Borrow Book
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}