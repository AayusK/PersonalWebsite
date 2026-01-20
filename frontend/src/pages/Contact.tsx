import { useForm, ValidationError } from '@formspree/react'
import './Contact.css'
import PixelSnow from '../components/PixelSnow';


function Contact() {
  const [state, handleSubmit] = useForm("xgvrrnja")

  return (
    <div className="contact">
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
        <h1 className="page-title">Get In Touch</h1>
        <p className="page-subtitle">
          Have a question or want to work together? I'd love to hear from you!
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <img src="/images/gmail.png" alt="Gmail" style={{ background: 'transparent' }} />
              <p><a href="aayus.keshri@gmail.com">aayus.keshri@gmail.com</a></p>
            </div>
            <div className="info-card">
              <img src="/images/linkedin.png" alt="LinkedIn" />
              <p><a href="linkedin.com/in/aayus-keshri">linkedin.com/in/aayus-keshri</a></p>
            </div>
            <div className="info-card">
              <img src="/images/github.png" alt="GitHub" />
              <p><a href="github.com/AayusK">github.com/AayusK</a></p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
              />
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button type="submit" className="submit-btn" disabled={state.submitting}>
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>

            {state.succeeded && (
              <div className="status-message" style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', border: '1px solid #555' }}>
                Message sent! I'll get back to you soon.
              </div>
            )}

            {state.errors && Array.isArray(state.errors) && state.errors.length > 0 && (
              <div className="status-message" style={{ background: 'rgba(255, 0, 0, 0.1)', color: '#ff6b6b', border: '1px solid #ff6b6b' }}>
                There was an error sending your message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact