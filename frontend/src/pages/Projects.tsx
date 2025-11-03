import './Projects.css'

function Projects() {
  const projects = [
    {
      title: 'Speedy: Collaborative Text Editor',
      description: 'A full-stack e-commerce solution with user authentication, product management, and secure payment integration.',
      tech: ['C++', 'Direct2D', 'AWS'],
      link: 'https://github.com/tjmers/Speedy'
    },
    {
      title: 'NebulaNest: Custom Java Component',
      description: 'Models a nested, tree structure for clustering data points, with a simple kernel for basic additions/removals and proximity checks. Secondary methods build on this for advanced grouping and queries.',
      tech: ['Java'] ,
      link: 'https://github.com/AayusK/ComponentProject'
    },
  ]

  return (  
    <div className="projects">
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


