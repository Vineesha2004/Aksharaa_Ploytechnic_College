import "../styles/gallery.css";
import "../styles/global.css";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function Gallery() {

  const banner = "/images/gallery/placement-banner.png";

  const placements = [
    "/images/gallery/placement1.png",
    "/images/gallery/placement2.png",
    "/images/gallery/placement3.png",
    "/images/gallery/placement4.png"
  ];

  const campus = [
    "/images/gallery/campus1.jpeg",
    "/images/gallery/campus2.png",
    "/images/gallery/campus3.png",
    "/images/gallery/campus4.png"
  ];

  const events = [
    "/images/gallery/ev1.avif",
    "/images/gallery/ev2.avif",
    "/images/gallery/ev3.avif",
    "/images/gallery/ev4.avif",
    "/images/gallery/ev5.avif"
  ];

  const allImages = [...placements, ...campus, ...events];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openImage = (img) => {
    const i = allImages.indexOf(img);
    setIndex(i);
    setOpen(true);
  };

  return (
    <div className="gallery">

      {/* HERO */}

      <section className="gallery-hero">

        <h1>College Gallery</h1>

        <p>
          Explore our vibrant campus, successful placements,
          and memorable student activities at
          <strong> Aksharaa Polytechnic College.</strong>
        </p>

      </section>


      {/* PLACEMENT BANNER */}

      <section className="placement-banner">
        <img src={banner} alt="placements banner" />
      </section>


      {/* PLACEMENTS */}

      <section className="gallery-section">

        <div className="section-header">
          <h2>Student Placements</h2>
          <p>
            Our students achieve excellent placements in top companies,
            reflecting the quality education and training at our college.
          </p>
        </div>

        <div className="placement-grid">

          {placements.map((img, i) => (

            <div
              className="placement-card"
              key={i}
              onClick={() => openImage(img)}
            >

              <img src={img} alt="placement" />

              <div className="placement-info">
                <h4>Placed Student</h4>
                <span>Campus Recruitment</span>
              </div>

            </div>

          ))}

        </div>

      </section>


      {/* CAMPUS LIFE */}

      <section className="gallery-section">

        <div className="section-header">
          <h2>Campus Life</h2>
          <p>
            Experience our modern infrastructure, green campus,
            and student-friendly learning environment.
          </p>
        </div>

        <div className="gallery-grid">

          {campus.map((img, i) => (

            <div
              className="gallery-card"
              key={i}
              onClick={() => openImage(img)}
            >

              <img src={img} alt="campus" />

              <div className="overlay">
                <span>Campus View</span>
              </div>

            </div>

          ))}

        </div>

      </section>


      {/* STUDENT ACTIVITIES */}

      <section className="gallery-section">

        <div className="section-header">
          <h2>Student Activities</h2>
          <p>
            Our students actively participate in cultural events,
            workshops, seminars, and technical activities.
          </p>
        </div>

        <div className="gallery-grid">

          {events.map((img, i) => (

            <div
              className="gallery-card"
              key={i}
              onClick={() => openImage(img)}
            >

              <img src={img} alt="event" />

              <div className="overlay">
                <span>College Event</span>
              </div>

            </div>

          ))}

        </div>

      </section>


      {/* LIGHTBOX */}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={allImages.map((img) => ({ src: img }))}
        index={index}
      />

    </div>
  );
}

export default Gallery;