import '../styles/skills.css'
import { VscVscode } from "react-icons/vsc";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiVercel,
  
  SiClaude,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";

function Skills() {

  const frontend = [
    { name: "React", icon: <FaReact /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  ];

  const backend = [
    { name: "Python", icon: <FaPython /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "REST APIs", icon: <TbApi /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
  ];

  const tools = [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "VS Code", icon: <VscVscode /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Claude", icon: <SiClaude /> },
  ];

  const renderSkills = (skills) =>
    skills.map((skill, index) => (
      <div className={`skill-pill -${index % 4}`} key={index}>
        <span className="skill-icon">{skill.icon}</span>
        <span>{skill.name}</span>
      </div>
    ));

  return (
    <section className="skills-section" id="skills">

      <h1 className="skills-title reveal">Skills</h1>

      <div className="skills-category">
        <h2 className="category-title reveal">FRONTEND</h2>
        <div className="skills-row reveal delay">
          {renderSkills(frontend)}
        </div>
      </div>

      <div className="skills-category">
        <h2 className="category-title reveal">BACKEND & DATABASE</h2>
        <div className="skills-row reveal delay">
          {renderSkills(backend)}
        </div>
      </div>

      <div className="skills-category">
        <h2 className="category-title reveal">TOOLS & DEPLOYMENT</h2>
        <div className="skills-row reveal delay">
          {renderSkills(tools)}
        </div>
      </div>

    </section>
  )
}

export default Skills
// import '../styles/skills.css'

// function Skills() {
//   const skills = [
//     'React',
//     'JavaScript',
//     'HTML5',
//     'BootStrap',
//     'Tailwind CSS',
//     'CSS3',
//     'Python',
//     'Django',
//     'REST APIs',
//     'MongoDB',
//     'MySql',
//     'Git',
//     'GitHub',
//     'VS Code',
//     'Vercel',
//     'Claude',
//     'GitHub Copilot'

//   ]

//   return (
//     <section className='skills-section' id='skills'>
//       <h1 className='skills-title reveal'>Skills</h1>

//       <div className='skills-grid'>
//         {skills.map((skill, index) => (
//           <div className={`skill-card reveal delay-${index % 4}`} key={index}>
//             <h2>{skill}</h2>
//             {/* <p>Professional Experience</p> */}
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Skills