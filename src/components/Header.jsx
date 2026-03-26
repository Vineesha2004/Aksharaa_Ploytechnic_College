import "../styles/header.css";
import "../styles/global.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">

        {/* LEFT */}
        <div className="main-info">
          <img
            src="/images/logo.png"
            alt="Aksharaa Polytechnic College"
            className="logo"
          />

          <div className="college-block">
            <h1 className="college-name">
              Aksharaa <span>Polytechnic College</span>
            </h1>

            <p className="college-location">
              Bondapalli, Visakhapatnam
            </p>
          </div>
        </div>


        {/* CENTER */}
        <div className="accreditation">

          <div className="accred-item">
            <img  
              src="/images/sbtet.png"
              alt="SBTET"
            />
            <div className="accred-tooltip">
              Affiliated to State Board of Technical Education & Training (SBTET)
            </div>
          </div>

          <div className="accred-item">
            <img className="aicte-logo"
              src="/images/aicte.png"
              alt="AICTE"
            />
            <div className="accred-tooltip">
              Approved by All India Council for Technical Education (AICTE)
            </div>
          </div>

        </div>


        {/* RIGHT (UNCHANGED) */}
        <div className="contact-section">

          <div className="college-code">
            <p>POLYCET CODE</p>
            <h2>ARPV</h2>
          </div>

          <div className="admission">
            <p className="admission-title">Admissions</p>
            <p>+91 9988776654</p>
            <p>+91 9876544322</p>
          </div>

        </div>

      </div>
    </header>
  );
}

export default Header;