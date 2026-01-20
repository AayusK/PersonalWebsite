import './Projects.css'
import PixelSnow from '../components/PixelSnow';


function Projects() {
  const projects = [
    {
      title: 'Speedy: Collaborative Text Editor',
      description: 'Speedy is a customizable text editor for Windows designed for fast, keyboard-driven editing. It supports rich text formatting like bold, italic, and highlighting, along with smart features like word-jumping, intelligent deletion, and full undo/redo. All keyboard shortcuts can be configured to match your workflow. The editor includes real-time collaboration through a built-in sync system, allowing multiple users to edit files simultaneously. Built with Direct2D for smooth rendering and a clean interface with customizable colors and fonts.',
      tech: ['C++', 'Direct2D', 'AWS (EC2)'],
      link: 'https://github.com/tjmers/Speedy'
    },
    {
      title: 'NebulaNest: Custom Java Component',
      description: 'NebulaNest is a custom Java component that organizes spatial data points in a tree structure based on proximity. It provides kernel methods for adding nodes and checking hierarchy state, with secondary methods built on top for advanced operations like proximity-based clustering, density queries around anchor points, and subtree management. Designed following the OSU software sequence discipline with layered interfaces and abstract classes, it demonstrates practical applications like star mapping systems where objects naturally group by location.',
      tech: ['Java', 'JUnit 4'],
      link: 'https://github.com/AayusK/ComponentProject'
    },
  ]

  return (
    <div className="projects">
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
        <PixelSnow
          color="#ffffff"
          flakeSize={0.01}
          minFlakeSize={1.25}
          pixelResolution={200}
          speed={1.25}
          density={0.3}
          direction={125}
          brightness={1}
          style={{ height: '100%' }}
        />
      </div>
      <div className="container">
        <h1 className="page-title">My Projects</h1>
        <p className="page-subtitle">
          Here are some of my recent projects showcasing my skills and creativity
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <div className="project-body">
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-footer">
                <a href={project.link} className="project-link">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects


