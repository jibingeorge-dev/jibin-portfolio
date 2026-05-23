          import '../styles/projects.css'
import project1 from '../assets/images/project1.png'
import project2 from '../assets/images/project2.png'
import project3 from '../assets/images/project3.png'
import project4 from '../assets/images/project4.png'
import project5 from '../assets/images/project5.png'

function Projects() {
  return (
    <section className='projects' id='projects'>
      <h1 className='reveal'>Projects</h1>

      <div className='project-grid'>
        <div className='project-card reveal'>
          <img src={project1} alt='' />

          <h2>Ecommerce Website</h2>

          <p>Python • Django • MySQL • JS </p>

          <div className='project-buttons'>
            <button>VIEW PROJECT</button>
            <button>VIEW CODE</button>
          </div>
        </div>

        <div className='project-card reveal delay-2'>
          <img src={project2} alt='' />

          <h2>Portfolio Website</h2>

          <p>React.js • HTML • CSS • Animations </p>

          <div className='project-buttons'>
            <button>VIEW PROJECT</button>
            <button>VIEW CODE</button>
          </div>
        </div>

        <div className='project-card reveal delay-2'>
          <img src={project3} alt='' />

          <h2>Dance Studio Landing Page</h2>

          <p>HTML • CSS • Bootstrap</p>

          <div className='project-buttons'>
            <button>VIEW PROJECT</button>
            {/* <button>VIEW CODE</button> */}
            <a href="https://github.com/jibingeorge-dev/projects/blob/main/design.html" target="_blank" rel="noopener noreferrer" className="project-btn">VIEW CODE</a>
          </div>
        </div>

        <div className='project-card reveal delay-2'>
          <img src={project4} alt='' />

          <h2>Receipe Landing Page</h2>

          <p>HTML • CSS • BootStrap • Animations</p>

          <div className='project-buttons'>
            <button>VIEW PROJECT</button>
            <button>VIEW CODE</button>
          </div>
        </div>
        <div className='project-card reveal delay-2'>
          <img src={project5} alt='' />

          <h2>Interactive Quiz App</h2>

          <p>HTML • CSS • Bootstrap • React.js</p>

          <div className='project-buttons'>
            <button>VIEW PROJECT</button>
            <button>VIEW CODE</button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects