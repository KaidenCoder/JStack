import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">JStack</Link>
      <nav className="nav">
        <Link to="/JStack" className="nav-link">
          Leetcode Questions
        </Link>
        <Link to="/JStack/designpatterns" className="nav-link">
          Design Patterns
        </Link>
      </nav>
    </header>
  );
}
