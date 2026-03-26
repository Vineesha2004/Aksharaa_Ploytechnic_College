import "../styles/news.css";
import "../styles/global.css";

function News() {

  const newsData = [
    {
      image: "/images/gallery/campus1.jpeg",
      title: "POLYCET Admissions 2026 Open",
      desc: "Admissions for diploma courses are now open through POLYCET. Apply before the deadline.",
      date: "March 2026",
      category: "Admissions"
    },
    {
      image: "/images/gallery/placement1.png",
      title: "Campus Placement Drive",
      desc: "Top companies visited our campus and selected multiple students for placements.",
      date: "February 2026",
      category: "Placements"
    },
    {
      image: "/images/gallery/ev1.avif",
      title: "Technical Workshop Conducted",
      desc: "Students participated in a hands-on technical workshop to enhance practical skills.",
      date: "January 2026",
      category: "Workshop"
    },
    {
      image: "/images/gallery/campus2.png",
      title: "Semester Results Announced",
      desc: "Results for all diploma semesters have been officially released.",
      date: "December 2025",
      category: "Results"
    },
    {
      image: "/images/gallery/ev2.avif",
      title: "Annual Cultural Fest",
      desc: "Students showcased talents in music, dance, and drama during the fest.",
      date: "November 2025",
      category: "Events"
    },
    {
      image: "/images/gallery/placement2.png",
      title: "Students Achieve Record Placements",
      desc: "This year saw a significant increase in placements with students securing positions in top companies.",
      date: "October 2025",
      category: "Placements"
    },
    {
      image: "/images/gallery/ev3.avif",
      title: "Sports Day Celebrations",
      desc: "Students actively participated in various sports events showcasing teamwork and enthusiasm.",
      date: "September 2025",
      category: "Sports"
    },
    {
      image: "/images/gallery/placement3.png",
      title: "Industry Expert Guest Lecture",
      desc: "An industry expert delivered an insightful session on emerging technologies and career opportunities for students.",
      date: "August 2025",
      category: "Seminar"
    }
  ];

  return (
    <div className="news">

      {/* HERO */}
      <div className="news-hero">
        <h1>Events & Updates</h1>
        <p>
          Stay updated with the latest news, events, and announcements
          from Aksharaa Polytechnic College.
        </p>
      </div>

      {/* NEWS GRID */}
      <section className="news-container">

        {newsData.map((item, index) => (
          <div className="news-card" key={index}>

            {/* IMAGE SECTION */}
            <div className="news-image">
              <img src={item.image} alt="news" />

              {/* CATEGORY TAG */}
              <div className="news-tag">
                {item.category}
              </div>

              {/* DATE BADGE */}
              <div className="news-date">
                {item.date}
              </div>
            </div>

            {/* CONTENT */}
            <div className="news-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>

              <div className="read-more">
                Read More →
              </div>
            </div>

          </div>
        ))}

      </section>

    </div>
  );
}

export default News;