import Hero from "../components/Hero";
import HighlightCards from "../components/HighlightCards";
import "../styles/home.css";
import "../styles/global.css";
import { Link } from "react-router-dom";



function Home() {
  return (
    <main>

      {/* HERO */}
      <Hero />
{/* ABOUT COLLEGE */}
<section className="about-section">

  <div className="container about-grid">

    {/* LEFT SIDE TEXT */}
    <div className="about-text">

      <h2>About Aksharaa Polytechnic, Bondapalli</h2>

      <p>
      Aksharaa Polytechnic, Bondapalli, established in 2009, is a technical institute in Vijayawada District, Andhra Pradesh. The college is approved by AICTE and offers diploma courses in various engineering streams, focusing on providing quality technical education and building strong academic foundations for students.
        </p>

     <p>
      The campus is equipped with essential facilities such as laboratories, library resources, and modern technical infrastructure to support both theoretical and practical learning. The institution also organizes seminars, workshops, and technical events to help students develop industry-ready skills and professional confidence.
      </p>
 
        <Link to="/about" className="about-link">
         Read More →
      </Link>
    </div>


    {/* RIGHT SIDE HIGHLIGHTS */}
    <div className="about-highlights">

      <h3>Key Highlights</h3>

      <ul>
        <li>Established in 2009</li>
        <li>AICTE Approved Institution</li>
        <li>Affiliated to SBTET</li>
        <li>Diploma in Computer Engineering</li>
        <li>Diploma in Civil Engineering</li>
        <li>Modern Library & Laboratories</li>
        <li>Seminars & Technical Workshops</li>
      </ul>

    </div>

  </div>

</section>

      {/* HIGHLIGHT CARDS */}
      <HighlightCards />

    </main>
  );
}

export default Home;