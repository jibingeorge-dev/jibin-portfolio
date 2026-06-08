import '../styles/hero.css'
import profile from "../assets/images/profile.png";

function Hero() {
  return (
    <section className='hero' id='home'>
      <div className='hero-left'>
        <h1 className='fade-up delay-1'>
          Nice to meet you! <br />
          I'm <span>Jibin George.</span>
        </h1>
        

        <p className='fade-up delay-2'>
          Full Stack Developer 
        </p>
      <div className="hero-buttons fade-up delay-3">

                 <a href="#contact" onClick={() => setMenuOpen(false)} className="contact-btn">HIRE ME</a>
                 <a href="/Jibin_George_Resume.pdf" download className="cv-btn">DOWNLOAD CV</a>

      </div>
      
       
        {/* <a href="#contact" onClick={() => setMenuOpen(false)}  className='fade-up delay-3'>Hire Me</a> */}
      </div>

      <div className='hero-right'>
      <img src={profile} alt='profile' className='fade-up delay-2 floating-floating-image' />
      </div>

      
      
    </section>
  )
}

export default Hero