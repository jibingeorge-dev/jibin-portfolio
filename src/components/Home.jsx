import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="section-divider"></div>

      <About />

      <div className="section-divider"></div>

      <Skills />

      <div className="section-divider"></div>

      <Projects />

      <div className="section-divider"></div>

      <Contact />
    </>
  )
}

export default Home