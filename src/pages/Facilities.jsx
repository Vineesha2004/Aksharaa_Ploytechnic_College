import "../styles/facilities.css";
import "../styles/global.css";

const facilities = [
  {
    title: "Library",
    image: "/images/facilities/library.jpg",
    desc: "The college provides a well-equipped library with an extensive collection of academic books, reference materials, journals, and digital learning resources. It serves as an important hub for knowledge and self-learning, supporting students in their academic activities. The library offers a quiet and comfortable reading environment where students can study, explore new ideas, and strengthen their understanding of various subjects."
  },
  {
    title: "Laboratories",
    image: "/images/facilities/laboratories.jpeg",
desc: "Department-wise laboratories are equipped with modern instruments and equipment to support practical learning for students. These laboratories provide hands-on experience that helps students understand engineering principles and technical concepts more effectively. Through real-time experimentation and guided practice, students develop analytical skills, problem-solving abilities, and practical knowledge that complement their classroom learning."  },
  {
    title: "Auditorium",
    image: "/images/facilities/auditorium.jpg",
desc: "The college auditorium serves as an important venue for seminars, workshops, conferences, cultural programs, and technical events. It is designed to accommodate large gatherings and provides a comfortable environment for presentations and performances. The auditorium plays a key role in encouraging student participation in extracurricular activities, academic discussions, and institutional events."  },
  {
    title: "IT Infrastructure",
    image: "/images/facilities/it-lab.jpeg",
desc: "The college provides modern IT infrastructure with well-equipped computer laboratories, updated systems, and reliable internet connectivity. These facilities support programming, project work, research activities, and digital learning. Students gain practical exposure to various software tools and technologies, helping them build essential technical skills required in today’s digital world."  },
  {
    title: "Sports",
    image: "/images/facilities/sports.png",
desc: "The campus promotes physical fitness and overall well-being by providing facilities for both indoor and outdoor sports. Students are encouraged to participate in various games and athletic activities that help build teamwork, discipline, and leadership skills. Regular sports activities and events contribute to a healthy and active campus life."  },
  {
    title: "Classrooms",
    image: "/images/facilities/classrooms.jpg",
desc: "The college offers spacious, well-ventilated, and well-lit classrooms that create a comfortable environment for learning. Equipped with modern teaching aids and organized seating arrangements, the classrooms support effective interaction between faculty and students. These facilities help ensure a productive and engaging academic experience."  },
  {
    title: "Training & Placement Cell",
    image: "/images/facilities/placement-cell.jpeg",
desc: "The Training and Placement Cell plays an important role in preparing students for successful careers. It organizes training programs, skill development workshops, personality development sessions, and campus recruitment drives. The cell works closely with industries and companies to provide students with placement opportunities and career guidance."  },
  {
    title: "Boys Hostel",
    image: "/images/facilities/boys-hostel.webp",
desc: "The college provides comfortable hostel accommodation for boys with essential facilities to support a convenient residential experience. The hostel offers a safe and disciplined environment with proper supervision, basic amenities, and a supportive atmosphere that helps students focus on their studies and personal development."  },
  {
    title: "Girls Hostel",
    image: "/images/facilities/girls-hostel.jpg",
desc: "Separate hostel facilities for girls provide a secure, comfortable, and well-maintained living environment. The hostel includes essential amenities, proper supervision, and safety measures to ensure the well-being of students. It creates a supportive residential atmosphere where students can focus on their academics and campus life."  }
];

function Facilities() {
  return (
    <section className="facilities">

      <h2 className="facilities-title">Discover Our Campus</h2>
      <p className="facilities-subtitle">
      Our campus provides modern facilities that support learning, innovation,
       and student development in a comfortable environment.
      </p>

      {facilities.map((facility, index) => (

        <div
          className={`facility-row ${index % 2 !== 0 ? "reverse" : ""}`}
          key={index}
        >

          <div className="facility-image">
            <img src={facility.image} alt={facility.title} />
          </div>

          <div className="facility-text">
            <h3>{facility.title}</h3>
            <p>{facility.desc}</p>
          </div>

        </div>

      ))}

    </section>
  );
}

export default Facilities;