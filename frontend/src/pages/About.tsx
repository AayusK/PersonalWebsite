import './About.css'

function About() {
  return (
    <div className="about">
      <div className="container">
        <h1 className="page-title">About Me</h1>
        
        <div className="about-content">
          <div className="about-text">
            <div className="section">
              <h2>Who I Am</h2>
              <p>
                I'm a passionate ECE student at The Ohio State University, with a love for creating full stack solutions.
                I'm interested in robotics, autonomous systems, and computer vision. I'm also currently working on a 
                poker hand recognition project using computer vision and machine learning. 
              </p>
            </div>

            <div className="section">
              <h2>My Skills</h2>
              <div className="skills-grid">
                <div className="skill-category">
                  <h3>Frontend</h3>
                  <ul>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>HTML5 & CSS3</li>
                    <li>Responsive Design</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h3>Backend</h3>
                  <ul>
                    <li>Python</li>
                    <li>C++</li>
                    <li>Java</li>
                    <li>SQL</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h3>Tools</h3>
                  <ul>
                    <li>Git</li>
                    <li>AWS</li>
                    <li>Direct2D</li>
                    <li>Google CoLab</li>
                  </ul>
                </div>
              </div>
            </div>



            <div className="section">
              <h2>Certifications</h2>
              <div className="skills-grid">
                <div className="skill-category">
                  <ul>
                    <li><a href="https://courses.edx.org/certificates/336e1cd52bcb46cda28370d99c7324cf">CS50AI: Introduction to Artifical Intelligence with Python</a></li>
                    <li><a href="https://courses.edx.org/certificates/84935e8c424a472eb415f397f4edea24">SQL for Data Science</a></li>
                    <li><a href="https://courses.edx.org/certificates/4bce843bf1fb498da60592d4d4865d10">The Data Science Method</a></li>
                    <li><a href="https://courses.edx.org/certificates/5190e7ce89834a70b226f8ea77778819">Data Science Tools</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="section">
              <h2>My Journey</h2>
              <p>
              My journey in computer science began back in fourth grade, when my dad gave me a Scratch tutorial book — a small moment that sparked a lasting curiosity about how technology works. Since then, I’ve explored programming through Python and C++, earned IBM’s Data Science Foundations Professional Certificate, and completed HarvardX’s Professional Certificate in Computer Science for Artificial Intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About


