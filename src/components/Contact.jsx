

import "../styles/contact.css";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section reveal" id="contact">
      <div className="contact-heading">
    <h1 >Get in Touch</h1>
  </div>

    <div className="contact-content reveal">      
      {/* LEFT SIDE */}
      <div className="contact-left fade-up">

        
        
        <h2>
          Let's build 
          something amazing.
        </h2>

        <p className="contact-description">
          Interested in working together or discussing a project?
          Feel free to contact me anytime.
        </p>

        <div className="contact-info">

          <div className="info-card fade-up delay-1">
            <FaPhoneAlt />
            <div>
              <h4>Phone</h4>
              <p>+91 7306410104</p>
            </div>
          </div>

          <div className="info-card fade-up delay-2">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <p>jibingeorge148@gmail.com</p>
            </div>
          </div>

          <div className="info-card fade-up delay-3">
            <FaLinkedin />
            <div>
              <h4>LinkedIn</h4>
              <a href="https://www.linkedin.com/in/jibgeo" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/jibgeo</a>
            </div>
          </div>

          <div className="info-card fade-up delay-4">
            <FaMapMarkerAlt />
            <div>
              <h4>Location</h4>
              <p>Bangalore, India</p>
            </div>
          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="contact-right fade-up delay-2 ">

        <form action="https://formsubmit.co/jibingeorge148@gmail.com"
  method="POST" className="contact-form">

          <div className="input-group">
            <input type="text" name="name" required />
            <label>Name</label>
          </div>

          <div className="input-group">
            <input type="email" name="email" required />
            <label>Email</label>
          </div>

          <div className="input-group">
            <input type="text" name="subject" required />
            <label>Subject</label>
          </div>

          <div className="input-group">
            <textarea rows="5" name="message" required></textarea>
            <label>Message</label>
          </div>

          <button type="submit">
            SEND MESSAGE
          </button>

        </form>

      </div>
     </div>  

    </section>
  );
}

export default Contact;


// import '../styles/contact.css'

// function Contact() {
//   return (
//     <section className='contact reveal' id='contact'>
//       <div className='contact-left'>
//         <h1>Contact</h1>

//         <p>
//           I would love to hear about your project and how I can help.
//         </p>
//       </div>

//       <form className='contact-form'>
//         <input type='text' placeholder='NAME' />
//         <input type='email' placeholder='EMAIL' />
//         <textarea placeholder='MESSAGE'></textarea>

//         <button>SEND MESSAGE</button>
//       </form>
//     </section>
//   )
// }

// export default Contact