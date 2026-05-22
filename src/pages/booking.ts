import { layout } from '../components/layout'

export function bookingPage(submitted: boolean = false, formData: Record<string, unknown> = {}): string {
  const successMessage = submitted ? `
    <div class="form-success-banner">
      <i class="fas fa-check-circle"></i>
      <div>
        <h3>Request Received! Thank You, ${formData.name || 'Friend'}!</h3>
        <p>We'll review your request and contact you within 1 business day to confirm your appointment and provide your free quote. For urgent requests, call us directly at <a href="tel:6156039791">615-603-9791</a>.</p>
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
          <a href="/">Home</a> <i class="fas fa-chevron-right"></i> <span>Get a Quote</span>
        </nav>
        <h1>Get a Free Quote</h1>
        <p>No obligation, no pressure — just honest pricing from your local lawn care expert.</p>
      </div>
    </div>
  </section>

  <!-- Booking Section -->
  <section class="section booking-section">
    <div class="container">
      <div class="booking-grid">

        <!-- Form Side -->
        <div class="booking-form-side">
          <div class="booking-form-card">
            <div class="booking-form-header">
              <i class="fas fa-calendar-check"></i>
              <div>
                <h2>Request Your Free Quote</h2>
                <p>Fill out the form and we'll get back to you quickly!</p>
              </div>
            </div>

            ${successMessage}

            <form class="booking-form" method="POST" action="/booking" id="booking-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Full Name <span class="required">*</span></label>
                  <div class="input-icon">
                    <i class="fas fa-user"></i>
                    <input type="text" id="name" name="name" placeholder="Your Full Name" required>
                  </div>
                </div>
                <div class="form-group">
                  <label for="phone">Phone Number <span class="required">*</span></label>
                  <div class="input-icon">
                    <i class="fas fa-phone"></i>
                    <input type="tel" id="phone" name="phone" placeholder="(615) 000-0000" required>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label for="email">Email Address <span class="required">*</span></label>
                <div class="input-icon">
                  <i class="fas fa-envelope"></i>
                  <input type="email" id="email" name="email" placeholder="your@email.com" required>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="address">Property Address</label>
                  <div class="input-icon">
                    <i class="fas fa-map-marker-alt"></i>
                    <input type="text" id="address" name="address" placeholder="123 Main St, Westmoreland, TN">
                  </div>
                </div>
                <div class="form-group">
                  <label for="property_type">Property Type <span class="required">*</span></label>
                  <div class="input-icon select-wrap">
                    <i class="fas fa-home"></i>
                    <select id="property_type" name="property_type" required>
                      <option value="" disabled selected>Select property type</option>
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="HOA">HOA / Community</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label for="service">Service Requested <span class="required">*</span></label>
                <div class="input-icon select-wrap">
                  <i class="fas fa-leaf"></i>
                  <select id="service" name="service" required>
                    <option value="" disabled selected>Select a service</option>
                    <option value="Lawn Mowing">Lawn Mowing (Residential)</option>
                    <option value="Commercial Mowing">Lawn Mowing (Commercial)</option>
                    <option value="Spring Cleanup">Spring Cleanup</option>
                    <option value="Fall &amp; Leaf Removal">Fall &amp; Leaf Removal</option>
                    <option value="Fertilization Program">Fertilization Program</option>
                    <option value="Weed Control">Weed Control</option>
                    <option value="Full Property Maintenance">Full Property Maintenance Package</option>
                    <option value="Multiple Services">Multiple Services (describe below)</option>
                    <option value="Other">Other / Not Sure</option>
                  </select>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="preferred_date">Preferred Start Date</label>
                  <div class="input-icon">
                    <i class="fas fa-calendar"></i>
                    <input type="date" id="preferred_date" name="preferred_date" min="${new Date().toISOString().split('T')[0]}">
                  </div>
                </div>
                <div class="form-group">
                  <label for="frequency">Service Frequency</label>
                  <div class="input-icon select-wrap">
                    <i class="fas fa-redo"></i>
                    <select id="frequency" name="frequency">
                      <option value="" disabled selected>How often?</option>
                      <option value="Weekly">Weekly</option>
                      <option value="Bi-Weekly">Bi-Weekly</option>
                      <option value="Monthly">Monthly</option>
                      <option value="One-Time">One-Time Service</option>
                      <option value="Seasonal">Seasonal Package</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label for="lot_size">Approximate Lot Size</label>
                <div class="input-icon select-wrap">
                  <i class="fas fa-ruler-combined"></i>
                  <select id="lot_size" name="lot_size">
                    <option value="" disabled selected>Approximate lot size</option>
                    <option value="Under 1/4 acre">Under 1/4 acre (small residential)</option>
                    <option value="1/4 - 1/2 acre">1/4 – 1/2 acre</option>
                    <option value="1/2 - 1 acre">1/2 – 1 acre</option>
                    <option value="1 - 2 acres">1 – 2 acres</option>
                    <option value="2+ acres">2+ acres / large property</option>
                    <option value="Not sure">Not sure</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="notes">Additional Notes or Special Requests</label>
                <div class="input-icon textarea-wrap">
                  <i class="fas fa-comment-dots"></i>
                  <textarea id="notes" name="notes" rows="4" placeholder="Describe your property, any special requirements, access instructions, or questions you have..."></textarea>
                </div>
              </div>

              <div class="form-group checkbox-group">
                <label class="checkbox-label">
                  <input type="checkbox" name="contact_consent" required>
                  <span class="checkbox-custom"></span>
                  <span>I agree to be contacted by Murphy's Lawn &amp; Landscaping about my quote request. <span class="required">*</span></span>
                </label>
              </div>

              <button type="submit" class="btn btn-primary btn-lg btn-block">
                <i class="fas fa-paper-plane"></i> Submit Quote Request
              </button>

              <p class="form-note"><i class="fas fa-lock"></i> Your request is sent directly to <strong>murphylawnandlandscaping@gmail.com</strong>. We'll respond within 1 business day.</p>
            </form>
          </div>
        </div>

        <!-- Info Side -->
        <div class="booking-info-side">
          <div class="booking-info-card">
            <h3><i class="fas fa-phone-alt"></i> Prefer to Call?</h3>
            <a href="tel:6156039791" class="booking-phone">615-603-9791</a>
            <p>Zach answers personally — get your questions answered and schedule your service right over the phone.</p>
          </div>

          <div class="booking-process-card">
            <h3>How It Works</h3>
            <div class="booking-steps">
              <div class="booking-step">
                <div class="step-num">1</div>
                <div class="step-content">
                  <h4>Submit Your Request</h4>
                  <p>Fill out the form with your details and the services you need.</p>
                </div>
              </div>
              <div class="booking-step">
                <div class="step-num">2</div>
                <div class="step-content">
                  <h4>We Contact You</h4>
                  <p>Zach will reach out within 1 business day to discuss your needs and schedule a visit.</p>
                </div>
              </div>
              <div class="booking-step">
                <div class="step-num">3</div>
                <div class="step-content">
                  <h4>Free On-Site Quote</h4>
                  <p>We assess your property and provide an honest, no-pressure price quote.</p>
                </div>
              </div>
              <div class="booking-step">
                <div class="step-num">4</div>
                <div class="step-content">
                  <h4>We Get to Work!</h4>
                  <p>You approve the quote, we show up on schedule and deliver outstanding results.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="booking-guarantee-card">
            <i class="fas fa-award"></i>
            <h3>Our Guarantee</h3>
            <p>If you're not 100% satisfied with our work, we'll make it right — no questions asked. Your satisfaction is our priority.</p>
          </div>

          <div class="booking-hours-card">
            <h3><i class="fas fa-clock"></i> Hours of Operation</h3>
            <div class="hours-list">
              <div class="hours-row"><span>Monday – Friday</span><span>7:00 AM – 7:00 PM</span></div>
              <div class="hours-row"><span>Saturday</span><span>7:00 AM – 5:00 PM</span></div>
              <div class="hours-row dimmed"><span>Sunday</span><span>Closed</span></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  `

  return layout("Book Now - Free Quote", content, "/booking")
}
