import "../styles/about.css";
import "../styles/global.css";
function About() {
  return (
    <main className="about-page">

      {/* HERO HEADER */}

      <section className="about-hero">
        <div className="container">
          <h1>About Aksharaa Polytechnic</h1>
          <p>Building technical knowledge and professional skills since 2009.</p>
        </div>
      </section>


      {/* ABOUT INSTITUTION */}

      <section className="about-intro container">

        <div className="intro-grid">

          <div className="intro-image">
            <img src="/images/hero.jpeg" alt="Aksharaa Polytechnic Campus"/>
          </div>

          <div className="intro-text">

            <h2>About the Institution</h2>

            <p>
              Aksharaa Polytechnic, Bondapalli, was established in 2009 with
              the aim of providing quality technical education to aspiring
              students. The institution is approved by AICTE and affiliated
              with SBTET.
            </p>

            <p>
              The college offers diploma programs in various engineering
              disciplines and focuses on developing strong technical skills,
              practical knowledge, and professional confidence among students.
            </p>

            <p>
              With modern laboratories, experienced faculty, and
              industry-oriented training programs, the institution prepares
              students to meet the demands of the modern technical world.
            </p>

          </div>

        </div>

      </section>


{/* 
      <section className="highlights">

        <div className="container">

          <h2 className="section-title">College Highlights</h2>

          <div className="highlight-grid">

            <div className="highlight-card">
              <h3>Established</h3>
              <p>2009</p>
            </div>

            <div className="highlight-card">
              <h3>Approval</h3>
              <p>AICTE Approved</p>
            </div>

            <div className="highlight-card">
              <h3>Affiliation</h3>
              <p>SBTET</p>
            </div>

            <div className="highlight-card">
              <h3>Programs</h3>
              <p>Diploma Engineering</p>
            </div>

          </div>

        </div>

      </section> */}


      {/* VISION MISSION */}

      <section className="vision-mission">

        <div className="container vm-grid">

          <div className="vm-card">

            <h3>Our Vision</h3>

            <p>
              To become a center of excellence in technical education by
              nurturing skilled professionals who contribute to industry
              and society.
            </p>

          </div>

          <div className="vm-card">

            <h3>Our Mission</h3>

            <ul>
              <li>Provide quality technical education.</li>
              <li>Encourage innovation and practical learning.</li>
              <li>Develop industry-ready professionals.</li>
              <li>Promote technical skills and research.</li>
            </ul>

          </div>

        </div>

      </section>
{/* CAMPUS ENVIRONMENT */}

<section className="campus-section">

  <div className="container">

    <h2 className="section-title">Campus Environment</h2>

    <p className="campus-intro">
      Our campus provides a supportive academic environment with modern
      classrooms, laboratories, and infrastructure that help students
      focus on learning, innovation, and technical development.
    </p>

    <div className="campus-grid">

      <div className="campus-card">
        <img src="/images/campus1.jpeg" alt="College Campus"/>
        <span>College Campus</span>
      </div>

      <div className="campus-card">
        <img src="/images/facilities/laboratories.jpeg" alt="Laboratory"/>
        <span>Laboratories</span>
      </div>

      <div className="campus-card">
        <img src="/images/facilities/classrooms.jpg" alt="Classrooms"/>
        <span>Classrooms</span>
      </div>

      <div className="campus-card">
        <img src="/images/facilities/library.jpg" alt="Library"/>
        <span>Library</span>
      </div>

    </div>

  </div>

</section>
    </main>
  );
}

export default About;