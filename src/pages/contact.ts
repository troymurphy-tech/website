import { layout } from '../components/layout'

export function contactPage(submitted: boolean = false, formData: Record<string, unknown> = {}): string {
  const successMessage = submitted ? `
    <div class="form-success-banner">
      <i class="fas fa-check-circle"></i>
      <div>
        <h3>Message Sent! Thanks, ${formData.name || 'Friend'}!</h3>
        <p>We received your message and will get back to you shortly. For immediate help, call us at <a href="tel:6156039791">615-603-9791</a>.</p>
      </div>
    </div>
  ` : ''

  const content = `
  <!-- Page Hero -->
  <section class="page-hero">
    <div class="page-hero-overlay"></div>
    <div class="container">
      <div class="page-hero-content">
        <nav class="breadcrumb">
          <a href="/">Home</a> <i class="fas fa-chevron-right"></i> <span>Contact</span>
        </nav>
        <h1>Contact Us</h1>
        <p>Have questions? Ready to get started? We'd love to hear from you.</p>
      </div>
    </div>
  </section>

  <!-- Contact Info Cards -->
  <section class="section contact-info-section">
    <div class="container">
      <div class="contact-info-cards">
        <div class="contact-info-card">
          <div class="contact-card-icon phone-icon">
            <i class="fas fa-phone-alt"></i>
          </div>
          <h3>Call or Text</h3>
          <a href="tel:6156039791" class="contact-card-value">615-603-9791</a>
          <p>Mon–Fri: 7AM–7PM<br>Saturday: 7AM–5PM</p>
        </div>

        <div class="contact-info-card">
          <div class="contact-card-icon location-icon">
            <i class="fas fa-map-marker-alt"></i>
          </div>
          <h3>Service Area</h3>
          <span class="contact-card-value small">Westmoreland, TN</span>
          <p>Serving Sumner County &amp; surrounding communities across Middle Tennessee</p>
        </div>

        <div class="contact-info-card">
          <div class="contact-card-icon hours-icon">
            <i class="fas fa-clock"></i>
          </div>
          <h3>Business Hours</h3>
          <span class="contact-card-value small">Mon–Sat</span>
          <p>Mon–Fri: 7:00 AM – 7:00 PM<br>Saturday: 7:00 AM – 5:00 PM<br>Sunday: Closed</p>
        </div>

        <div class="contact-info-card">
          <div class="contact-card-icon web-icon">
            <i class="fas fa-globe"></i>
          </div>
          <h3>Website</h3>
          <span class="contact-card-value small">murphyslawnnlandscaping.com</span>
          <p>Visit our Facebook page for photos, updates, and reviews from real customers.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Form + Map -->
  <section class="section contact-form-section">
    <div class="container">
      <div class="contact-grid">

        <!-- Contact Form -->
        <div class="contact-form-side">
          <div class="contact-form-card">
            <h2><i class="fas fa-envelope"></i> Send Us a Message</h2>
            <p>Have a question about our services, pricing, or availability? Drop us a message and we'll get back to you quickly!</p>

            ${successMessage}

            <form class="contact-form" method="POST" action="/contact">
              <div class="form-row">
                <div class="form-group">
                  <label for="contact-name">Your Name <span class="required">*</span></label>
                  <div class="input-icon">
                    <i class="fas fa-user"></i>
                    <input type="text" id="contact-name" name="name" placeholder="Your Full Name" required>
                  </div>
                </div>
                <div class="form-group">
                  <label for="contact-phone">Phone Number</label>
                  <div class="input-icon">
                    <i class="fas fa-phone"></i>
                    <input type="tel" id="contact-phone" name="phone" placeholder="(615) 000-0000">
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label for="contact-email">Email Address <span class="required">*</span></label>
                <div class="input-icon">
                  <i class="fas fa-envelope"></i>
                  <input type="email" id="contact-email" name="email" placeholder="your@email.com" required>
                </div>
              </div>

              <div class="form-group">
                <label for="contact-subject">Subject</label>
                <div class="input-icon select-wrap">
                  <i class="fas fa-tag"></i>
                  <select id="contact-subject" name="subject">
                    <option value="" selected>Select a topic</option>
                    <option value="General Question">General Question</option>
                    <option value="Pricing / Quote">Pricing / Quote</option>
                    <option value="Service Availability">Service Availability</option>
                    <option value="Existing Customer">Existing Customer Issue</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="contact-message">Message <span class="required">*</span></label>
                <div class="input-icon textarea-wrap">
                  <i class="fas fa-comment-dots"></i>
                  <textarea id="contact-message" name="message" rows="5" placeholder="Tell us how we can help you..." required></textarea>
                </div>
              </div>

              <button type="submit" class="btn btn-primary btn-lg btn-block">
                <i class="fas fa-paper-plane"></i> Send Message
              </button>

              <p class="form-note"><i class="fas fa-shield-alt"></i> We respond to all messages within 1 business day.</p>
            </form>
          </div>
        </div>

        <!-- Map & Extra Info -->
        <div class="contact-map-side">
          <!-- Map embed - Westmoreland, TN -->
          <div class="contact-map-card">
            <h3><i class="fas fa-map"></i> We're Based in Westmoreland, TN</h3>
            <div class="map-embed">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26197.43!2d-86.2469!3d36.5731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88646b!2sWestmoreland%2C%20TN!5e0!3m2!1sen!2sus!4v1690000000000"
                width="100%"
                height="300"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Westmoreland Tennessee map">
              </iframe>
            </div>
          </div>

          <!-- Quick Contact -->
          <div class="quick-contact-card">
            <h3>Quick Contact Options</h3>
            <div class="quick-contact-options">
              <a href="tel:6156039791" class="quick-contact-btn phone-btn">
                <i class="fas fa-phone-alt"></i>
                <div>
                  <strong>Call Now</strong>
                  <span>615-603-9791</span>
                </div>
              </a>
              <a href="sms:6156039791" class="quick-contact-btn sms-btn">
                <i class="fas fa-comment-sms"></i>
                <div>
                  <strong>Send a Text</strong>
                  <span>615-603-9791</span>
                </div>
              </a>
              <a href="/booking" class="quick-contact-btn quote-btn">
                <i class="fas fa-calendar-check"></i>
                <div>
                  <strong>Book Online</strong>
                  <span>Get a Free Quote</span>
                </div>
              </a>
              <a href="https://www.facebook.com" target="_blank" class="quick-contact-btn fb-btn">
                <i class="fab fa-facebook-f"></i>
                <div>
                  <strong>Message on Facebook</strong>
                  <span>Murphy's Lawn &amp; Landscaping</span>
                </div>
              </a>
            </div>
          </div>

          <!-- Service Area Note -->
          <div class="service-area-note">
            <i class="fas fa-map-marked-alt"></i>
            <div>
              <h4>Serving All of Sumner County</h4>
              <p>Westmoreland · Gallatin · Portland · White House · Hendersonville · Goodlettsville · Bethpage and surrounding areas</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-section">
    <div class="cta-overlay"></div>
    <div class="container">
      <div class="cta-content">
        <h2>Don't Wait — Let's Get Your Lawn Looking Amazing</h2>
        <p>Call or book online today. Fast response, free quotes, no pressure.</p>
        <div class="cta-actions">
          <a href="/booking" class="btn btn-primary btn-lg">
            <i class="fas fa-calendar-check"></i> Book a Free Quote
          </a>
          <a href="tel:6156039791" class="btn btn-outline-white btn-lg">
            <i class="fas fa-phone"></i> 615-603-9791
          </a>
        </div>
      </div>
    </div>
  </section>
  `

  return layout("Contact Us", content, "/contact")
}
