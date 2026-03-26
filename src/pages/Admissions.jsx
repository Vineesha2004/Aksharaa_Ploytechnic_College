import "../styles/admissions.css";
import "../styles/global.css";

import { FaUserGraduate, FaClipboardCheck, FaFileAlt, FaStream, FaPaperPlane } from "react-icons/fa";

function Admissions() {

  const scrollToForm = () => {
    document.getElementById("admissionForm").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="admissions">

      {/* HERO */}

      <div className="admissions-hero">
        <h1>Admissions</h1>

        <p>
          Start your academic journey at Aksharaa Polytechnic College.
          Explore diploma programs and apply through the POLYCET admission process.
        </p>

        <button className="apply-btn" onClick={scrollToForm}>
          <FaPaperPlane />  Admission enquiry
        </button>
      </div>


      {/* OVERVIEW */}

      <section className="admission-section overview">

        <h2>
          <FaUserGraduate className="section-icon"/>
          Admission Overview
        </h2>

        <p>
          Aksharaa Polytechnic College offers diploma programs in various
          engineering disciplines. Admissions are conducted through the
          POLYCET entrance examination followed by state counseling procedures.
          Eligible candidates can apply for admission based on their rank
          and seat availability.
        </p>

      </section>


      {/* ELIGIBILITY + DOCUMENTS GRID */}

      <div className="admission-grid">

        {/* ELIGIBILITY */}

        <section className="admission-section">

          <h2>
            <FaClipboardCheck className="section-icon"/>
            Eligibility Criteria
          </h2>

          <ul>
            <li>Candidate must have passed 10th (SSC) or equivalent examination.</li>
            <li>Must qualify in the POLYCET entrance examination.</li>
            <li>Admission is allotted through counseling based on rank.</li>
          </ul>

        </section>


        {/* DOCUMENTS */}

        <section className="admission-section">

          <h2>
            <FaFileAlt className="section-icon"/>
            Required Documents
          </h2>

          <ul>
            <li>10th Marks Memo</li>
            <li>POLYCET Rank Card</li>
            <li>Transfer Certificate</li>
            <li>Caste Certificate (if applicable)</li>
            <li>Aadhaar Card</li>
            <li>Passport Size Photographs</li>
          </ul>

        </section>

      </div>


      {/* PROCESS */}

      <section className="admission-section">

        <h2>
          <FaStream className="section-icon"/>
          Admission Process
        </h2>

        <div className="process-steps">

          <div className="step">
            <span>1</span>
            <p>Appear for POLYCET Examination</p>
          </div>

          <div className="step">
            <span>2</span>
            <p>Register for POLYCET Counseling</p>
          </div>

          <div className="step">
            <span>3</span>
            <p>Select College and Course Options</p>
          </div>

          <div className="step">
            <span>4</span>
            <p>Seat Allotment</p>
          </div>

          <div className="step">
            <span>5</span>
            <p>Document Verification & Fee Payment</p>
          </div>

        </div>

      </section>


      {/* FORM */}

      <section className="admission-form-section" id="admissionForm">

        <h2>Admission Enquiry Form</h2>

        <form className="admission-form">

          <input type="text" placeholder="Full Name" required />

          <input type="tel" placeholder="Phone Number" required />

          <input type="email" placeholder="Email Address" />

          <input type="number" placeholder="10th Percentage" />

          <input type="number" placeholder="POLYCET Rank" />

          <select>
            <option>Preferred Course</option>
            <option>Computer Engineering</option>
            <option>Civil Engineering</option>
            <option>Mechanical Engineering</option>
            <option>Electrical & Electronics Engineering</option>
            <option>Electronics & Communication Engineering</option>
          </select>

          <input type="text" placeholder="City / District" />

          <textarea placeholder="Message (Optional)"></textarea>

          <button type="submit">Submit Application</button>

        </form>

      </section>

    </div>
  );
}

export default Admissions;