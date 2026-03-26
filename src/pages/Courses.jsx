import "../styles/courses.css";
import "../styles/global.css";
import { Link } from "react-router-dom";

function Courses() {

  const courses = [
    {
      code: "CME",
      title: "Diploma in Computer Engineering",
      seats: 60,
      duration: "3 Years"
    },
    {
      code: "CE",
      title: "Diploma in Civil Engineering",
      seats: 60,
      duration: "3 Years"
    },
    {
      code: "ME",
      title: "Diploma in Mechanical Engineering",
      seats: 180,
      duration: "3 Years"
    },
    {
      code: "EEE",
      title: "Diploma in Electrical & Electronics Engineering",
      seats: 120,
      duration: "3 Years"
    },
    {
      code: "ECE",
      title: "Diploma in Electronics & Communication Engineering",
      seats: 30,
      duration: "3 Years"
    }
  ];

  return (
    <main className="courses-page">

      <div className="container">

        <h1 className="courses-title">Diploma Programs</h1>

        <p className="courses-subtitle">
          Industry-focused diploma programs designed to build strong technical
          skills and prepare students for successful engineering careers.
        </p>


        {/* PROGRAM OVERVIEW */}

        <div className="program-overview">

          <div className="overview-item">
            <h4>Programs Offered</h4>
            <p>5 Diploma Courses</p>
          </div>

          <div className="overview-item">
            <h4>Course Duration</h4>
            <p>3 Years</p>
          </div>

          <div className="overview-item">
            <h4>Affiliation</h4>
            <p>SBTET Andhra Pradesh</p>
          </div>

          <div className="overview-item">
            <h4>Mode of Study</h4>
            <p>Full Time</p>
          </div>

        </div>


        {/* COURSES TABLE */}

        <div className="courses-table-wrapper">

          <table className="courses-table">

            <thead>
              <tr>
                <th>S.No</th>
                <th>Code</th>
                <th>Course Name</th>
                <th>Duration</th>
                <th>Intake</th>
              </tr>
            </thead>

            <tbody>

              {courses.map((course, index) => (

                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{course.code}</td>
                  <td>{course.title}</td>
                  <td>{course.duration}</td>
                  <td>{course.seats}</td>
                </tr>

              ))}

            </tbody>

          </table>

        </div>


        {/* PROGRAM NOTE */}

        <p className="program-note">
          All diploma programs are approved by AICTE and affiliated to the
          State Board of Technical Education and Training (SBTET),
          Andhra Pradesh.
        </p>


        {/* ADMISSION BUTTON */}

        <div className="admission-btn-wrap">
          <Link to="/admissions"> <button className="admission-btn">
            View Admission Process
          </button></Link>
         
        </div>


      </div>

    </main>
  );
}

export default Courses;