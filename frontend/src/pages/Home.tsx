import { Link } from 'react-router-dom'
import './Home.css'
import PixelSnow from '../components/PixelSnow';



function Home() {
  return (
    <div className="home">
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
      <div className="hero" style={{ position: 'relative', overflow: 'hidden', zIndex: 1 }}>
        <div className="hero-content" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Aayus Keshri</span>
          </h1>
          <p className="hero-subtitle">
            Full Stack Developer | Computer Engineering Student @ tOSU
          </p>
          <p className="hero-description">
            I am a sophmore at The Ohio State University pursuing a B.S. in Computer Engineering, with a minor in Robotics and Autonomous Systems.
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


