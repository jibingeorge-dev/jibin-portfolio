import { useState } from "react";
import "../styles/navbar.css";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <h2 className="logo">jibingeorge</h2>

      {/* HAMBURGER */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* NAV LINKS */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </li>

        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </li>

        <li>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
        </li>

        <li>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </li>
         {/* SOCIAL ICONS */}
      <div className="social-icons">
        <a href="https://github.com/jibingeorge-dev" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/jibgeo" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>

        
      </div>

      </ul>

     

    </nav>
  );
}

export default Navbar;

// import '../styles/navbar.css'
// import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

// function Navbar() {
//   return (
//     <nav className='navbar'>
//       <h1>jibingeorge</h1>

//       <ul className='nav-links'>
//         <li><a href='#home'>Home</a></li>
//         <li><a href='#about'>About</a></li>
//         <li><a href='#skills'>Skills</a></li>
//         <li><a href='#projects'>Projects</a></li>
//         <li><a href='#contact'>Contact</a></li>
//       </ul>

//       <div className='nav-icons'>
//         <FaGithub />
//         <FaLinkedin />
//         <FaTwitter />
//       </div>
//     </nav>
//   )
// }

// export default Navbar