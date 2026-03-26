import "../styles/contact.css";
import "../styles/global.css";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact">

      {/* HERO */}

      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          Get in touch with Aksharaa Polytechnic College for admissions,
          courses, and general enquiries.
        </p>
      </div>


      {/* CONTACT SECTION */}

      <section className="contact-container">

        {/* LEFT SIDE - INFO */}

        <div className="contact-info">

          <h2>Get in Touch</h2>

          <div className="info-item">
            <FaMapMarkerAlt className="icon"/>
            <div>
              <h4>Address</h4>
              <p>Bondipalli, Visakhapatnam, Andhra Pradesh</p>
            </div>
          </div>

          <div className="info-item">
            <FaPhoneAlt className="icon"/>
            <div>
              <h4>Phone</h4>
              <p>+91 XXXXXXXX</p>
            </div>
          </div>

          <div className="info-item">
            <FaEnvelope className="icon"/>
            <div>
              <h4>Email</h4>
              <p>info@aksharaa.edu</p>
            </div>
          </div>

          <div className="info-item">
            <FaClock className="icon"/>
            <div>
              <h4>Office Hours</h4>
              <p>Mon - Sat: 9:00 AM – 5:00 PM</p>
            </div>
          </div>

        </div>


        {/* RIGHT SIDE - FORM */}

        <div className="contact-form-box">

          <h2>Send Message</h2>

          <form className="contact-form">

            <input type="text" placeholder="Full Name" required />

            <input type="tel" placeholder="Phone Number" required />

            <input type="email" placeholder="Email Address" />

            <input type="text" placeholder="Subject" />

            <textarea placeholder="Your Message"></textarea>

            <button type="submit">Send Message</button>

          </form>

        </div>

      </section>


      {/* GOOGLE MAP */}

      <section className="map-section">

        <iframe
          src="https://maps.google.com/maps?q=visakhapatnam&t=&z=13&ie=UTF8&iwloc=&output=embed"
          title="map"
          loading="lazy"
        ></iframe>

      </section>

    </div>
  );
}

export default Contact;