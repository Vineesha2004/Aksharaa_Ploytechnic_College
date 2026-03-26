import { Link } from "react-router-dom";
import "../styles/navbar.css";
import "../styles/global.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <ul className="nav-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/admissions">Admissions</Link></li>
          <li><Link to="/facilities">Facilities</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/news">Events </Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;