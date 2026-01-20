import './About.css'
import PixelSnow from '../components/PixelSnow';


function About() {
  return (
    <div className="about">
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
                  <h3>Languages</h3>
                  <ul>
                    <li>C++</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>HTML/CSS</li>
                    <li>SQL</li>
                    <li>Matlab</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h3>Frameworks/Libraries</h3>
                  <ul>
                    <li>React</li>
                    <li>Flask</li>
                    <li>OpenCV</li>
                    <li>JUnit 4</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h3>Tools/Cloud</h3>
                  <ul>
                    <li>Linux</li>
                    <li>AWS (EC2)</li>
                    <li>Git</li>
                    <li>Roboflow</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h3>Embedded Systems</h3>
                  <ul>
                    <li>Arduino </li>
                    <li>ESP32</li>
                    <li>PWM</li>
                    <li>BLE</li>
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


          </div>
        </div>
      </div>
    </div>
  )
}

export default About


