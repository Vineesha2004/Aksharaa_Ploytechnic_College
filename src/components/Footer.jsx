import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

import "../styles/footer.css";
import "../styles/global.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        
        <div className="footer-col">

          <div className="footer-logo">
            <img src="/images/logo.png" alt="logo" />
            <h3>Aksharaa Polytechnic College</h3>
          </div>

          <p>Bondipalli, Visakhapatnam</p>

          <p><FaLocationDot /> Bondipalli, Visakhapatnam, AP</p>
          <p><FaPhone /> +91 XXXXXXXX</p>
          <p><FaEnvelope /> info@aksharaa.edu</p>

        </div>


       
        <div className="footer-col">
          <h4>Quick Links</h4>

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About College</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/facilities">Facilities</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>


      
        <div className="footer-col">
          <h4>Diploma Programs</h4>

          <ul>
            <li><Link to="/courses">Mechanical Engineering</Link></li>
            <li><Link to="/courses">Civil Engineering</Link></li>
            <li><Link to="/courses">Computer Engineering</Link></li>
            <li><Link to="/courses">Electrical Engineering</Link></li>
            <li><Link to="/courses">Electronics & Communication</Link></li>
          </ul>
        </div>


       
        <div className="footer-col">
          <h4>Admissions Help</h4>

          <p>Phone: +91 XXXXXXXX</p>
          <p>Email: admissions@aksharaa.edu</p>

          <h4 className="office">Office Hours</h4>
          <p>Mon – Sat</p>
          <p>9:00 AM – 5:00 PM</p>
        </div>

      </div>

      <div className="footer-bottom">

        <div className="social-icons">

          <a href=" "><FaFacebookF /></a>
          <a href=" "><FaInstagram /></a>
          <a href=" "><FaLinkedinIn /></a>
          <a href=" "><FaYoutube /></a>

        </div>

        <p>© 2026 Aksharaa Polytechnic College. All Rights Reserved.</p>

      </div>

    </footer>
  );
}

export default Footer;