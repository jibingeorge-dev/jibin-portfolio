import '../styles/about.css'

function About() {
  return (
    <section className='about reveal' id='about'>
      <div className='about-content'>
        <h1>About Me</h1>

        <p>
         I’m a Python Full Stack Developer passionate about building modern, responsive, and user-focused web applications. My core skills include Python, Django, JavaScript, React, HTML, and CSS, with experience developing full-stack projects that combine clean UI design with practical backend functionality.

        </p>

        <p>
         I enjoy turning ideas into real applications and continuously improving my development skills through hands-on projects, problem-solving, and learning new technologies. Along with my technical background, my experience in operations and customer-facing roles has helped me develop adaptability, communication, and the ability to work efficiently in fast-paced environments.
        </p>
        
      </div>
      <a href="/certifications"  className="cert-link">View Certifications →</a>
    </section>
  )
}

export default About