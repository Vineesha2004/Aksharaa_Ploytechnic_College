import "../styles/hero.css";
import "../styles/global.css";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      <img
        src="/images/campusss1.png"
        alt="Aksharaa Polytechnic College"
        className="hero-image"
      />

      <div className="hero-overlay"></div>

      <div className="hero-content">

        {/* <h1>Aksharaa Polytechnic College</h1> */}

        {/* <p className="hero-tagline">
          Excellence in Technical Education
        </p> */}

        {/* <p className="hero-location">
          Bondapalli, Visakhapatnam
        </p> */}

       {/* <Link to="/admissions">
       <button className="hero-btn">
       Admissions Open
         </button>
         </Link> */}
      </div>
     <a
     href="https://wa.me/919999999999"
     target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
        >
      <FaWhatsapp />
     </a>
     </section>
  );
}

export default Hero;