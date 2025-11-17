import { Link } from 'react-router-dom'
import './Home.css'


function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Aayus Keshri</span>
          </h1>
          <p className="hero-subtitle">
            Full Stack Developer | ECE Student @ tOSU 
          </p>
          <p className="hero-description">
            I am a sophmore at The Ohio State University pursuing a B.S. in Electrical and Computer Engineering, with minors in Computational Science and Robotics and Autonomous Systems.
          </p>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary">
              Learn More About Me
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
      </div> 
  )
}

export default Home


