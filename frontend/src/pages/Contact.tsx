import { useForm, ValidationError } from '@formspree/react'
import './Contact.css'

function Contact() {
  const [state, handleSubmit] = useForm("xgvrrnja")

  return (
    <div className="contact">
      <div className="container">
        <h1 className="page-title">Get In Touch</h1>
        <p className="page-subtitle">
          Have a question or want to work together? I'd love to hear from you!
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <img src="/images/gmail.png" alt="Gmail" style={{background: 'transparent'}}/>
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
              <div className="status-message">Message sent successfully!</div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact