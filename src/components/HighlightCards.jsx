import "../styles/home.css";
import "../styles/global.css";
import { Link } from "react-router-dom";

function HighlightCards() {
  return (

    <section className="cards-section">

      <div className="container cards-grid">

        {/* Card 1 */}
        <div className="card">
          <img src="/images/facilities/classrooms.jpg" alt="Programs" />

          <h3>Diploma Programs</h3>

          <p>
            Diploma courses in Mechanical, Civil, Computer, Electrical and
            Electronics Engineering.
          </p>

          <Link to="/Courses">
         <button>View Courses</button>
         </Link>
        </div>


        {/* Card 2 */}
        <div className="card">
          <img src="/images/facilities/library.jpg" alt="Facilities" />

          <h3>Campus Facilities</h3>

          <p>
            Modern laboratories, library, auditorium, playgrounds and internet
            facilities for students.
          </p>

          <Link to="/Facilities">
           <button>Explore Facilities</button>
         </Link>
        </div>


        {/* Card 3 */}
        <div className="card">
          <img src="/images/facilities/auditorium.jpg" alt="Admissions" />

          <h3>Admissions</h3>

          <p>
            Admissions are based on POLYCET conducted by the Andhra Pradesh
            State Board of Technical Education.
          </p>
      
          <Link to="/Admissions">
          <button>Apply Now</button>
          </Link>
        </div>

      </div>

    </section>

  );
}

export default HighlightCards;