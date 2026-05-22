import { layout } from '../components/layout'

export function homePage(): string {
  const content = `
  <!-- Hero Section -->
  <section class="hero" id="hero">
    <div class="hero-overlay"></div>
    <div class="hero-content container">
      <div class="hero-badge"><i class="fas fa-star"></i> Westmoreland's #1 Lawn Care</div>
      <h1 class="hero-title">Your Lawn Deserves<br><span class="hero-accent">Expert Care</span></h1>
      <p class="hero-subtitle">Professional lawn mowing, landscaping, and full property maintenance for residential &amp; commercial clients in Westmoreland, TN and surrounding areas.</p>
      <div class="hero-actions">
        <a href="/booking" class="btn btn-primary btn-lg">
          <i class="fas fa-calendar-check"></i> Book Now — It's Free
        </a>
        <a href="tel:6156039791" class="btn btn-outline-white btn-lg">
          <i class="fas fa-phone"></i> 615-603-9791
        </a>
      </div>
      <div class="hero-stats">
        <div class="hero-stat">
          <span class="stat-number">500+</span>
          <span class="stat-label">Happy Clients</span>
        </div>
        <div class="hero-stat-divider"></div>
        <div class="hero-stat">
          <span class="stat-number">10+</span>
          <span class="stat-label">Years Experience</span>
        </div>
        <div class="hero-stat-divider"></div>
        <div class="hero-stat">
          <span class="stat-number">100%</span>
          <span class="stat-label">Satisfaction</span>
        </div>
      </div>
    </div>
    <div class="hero-scroll-indicator">
      <span>Scroll Down</span>
      <i class="fas fa-chevron-down"></i>
    </div>
  </section>

  <!-- Trust Bar -->
  <section class="trust-bar">
    <div class="container">
      <div class="trust-items">
        <div class="trust-item">
          <i class="fas fa-shield-alt"></i>
          <span>Fully Insured</span>
        </div>
        <div class="trust-item">
          <i class="fas fa-handshake"></i>
          <span>Local &amp; Trusted</span>
        </div>
        <div class="trust-item">
          <i class="fas fa-dollar-sign"></i>
          <span>Free Estimates</span>
        </div>
        <div class="trust-item">
          <i class="fas fa-star"></i>
          <span>5-Star Service</span>
        </div>
        <div class="trust-item">
          <i class="fas fa-leaf"></i>
          <span>Residential &amp; Commercial</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Overview -->
  <section class="section services-overview" id="services">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">What We Do</span>
        <h2 class="section-title">Complete Lawn &amp; Landscaping Services</h2>
        <p class="section-desc">From routine mowing to full property transformations, Murphy's handles it all — so you can enjoy your outdoor space without the hassle.</p>
      </div>

      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon"><i class="fas fa-tractor"></i></div>
          <h3>Lawn Mowing</h3>
          <p>Residential and commercial mowing with precision edging and cleanup. Weekly, bi-weekly, or custom schedules available.</p>
          <a href="/services" class="service-link">Learn More <i class="fas fa-arrow-right"></i></a>
        </div>
        <div class="service-card">
          <div class="service-icon"><i class="fas fa-seedling"></i></div>
          <h3>Spring Cleanups</h3>
          <p>Start the season fresh with debris removal, bed cleanup, edging, and prep work that gets your lawn ready to thrive.</p>
          <a href="/services" class="service-link">Learn More <i class="fas fa-arrow-right"></i></a>
        </div>
        <div class="service-card">
          <div class="service-icon"><i class="fas fa-wind"></i></div>
          <h3>Fall &amp; Leaf Removal</h3>
          <p>Complete fall cleanups including leaf blowing, raking, hauling, and property prep before winter sets in.</p>
          <a href="/services" class="service-link">Learn More <i class="fas fa-arrow-right"></i></a>
        </div>
        <div class="service-card">
          <div class="service-icon"><i class="fas fa-flask"></i></div>
          <h3>Fertilization Programs</h3>
          <p>Customized fertilization plans tailored to Tennessee's soil and climate to keep your grass lush and healthy year-round.</p>
          <a href="/services" class="service-link">Learn More <i class="fas fa-arrow-right"></i></a>
        </div>
        <div class="service-card">
          <div class="service-icon"><i class="fas fa-shield-alt"></i></div>
          <h3>Weed Control</h3>
          <p>Pre-emergent and post-emergent treatments that eliminate weeds and keep your lawn clean, green, and competition-free.</p>
          <a href="/services" class="service-link">Learn More <i class="fas fa-arrow-right"></i></a>
        </div>
        <div class="service-card">
          <div class="service-icon"><i class="fas fa-home"></i></div>
          <h3>Full Property Maintenance</h3>
          <p>Year-round service packages that cover everything — so your property always looks its best, every single month.</p>
          <a href="/services" class="service-link">Learn More <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>

      <div class="services-cta">
        <a href="/services" class="btn btn-primary">View All Services</a>
        <a href="/booking" class="btn btn-outline">Get a Free Quote</a>
      </div>
    </div>
  </section>

  <!-- Why Choose Us -->
  <section class="section why-us">
    <div class="container">
      <div class="why-us-grid">
        <div class="why-us-image">
          <img src="https://sspark.genspark.ai/cfimages?u1=l%2BTCxQTHrFjiCtOnDX53lea1KdkxifEAOMfYPJ13qtm2P7Fxi%2FwhhcMqnPrcflpn%2Bnx6mOQxdAQNz7k0QyzCDxJm%2FegFhO7HKQq9qtADf80UZ%2BYfNAtqZvmrhn%2B%2B3YuKhLj%2BUhi%2BST%2BcvMtTmrju&u2=nCmskng2eWpdh23j&width=2560" alt="Professional lawn care team at work" loading="lazy">
          <div class="why-us-badge">
            <div class="badge-inner">
              <span class="badge-num">10+</span>
              <span class="badge-text">Years in Business</span>
            </div>
          </div>
        </div>
        <div class="why-us-content">
          <span class="section-tag">Why Choose Murphy's</span>
          <h2 class="section-title">Locally Owned &amp; Operated in Westmoreland, TN</h2>
          <p>When you hire Murphy's Lawn &amp; Landscaping, you're not just getting a lawn service — you're supporting a local business that cares deeply about this community.</p>
          <p>Zach Murphy has built his reputation one yard at a time, delivering consistent, reliable service with personal attention that big box companies simply can't match.</p>

          <div class="why-features">
            <div class="why-feature">
              <div class="why-feature-icon"><i class="fas fa-check-circle"></i></div>
              <div>
                <h4>Reliable &amp; On-Time</h4>
                <p>We show up when we say we will, every single time. No excuses.</p>
              </div>
            </div>
            <div class="why-feature">
              <div class="why-feature-icon"><i class="fas fa-check-circle"></i></div>
              <div>
                <h4>Transparent Pricing</h4>
                <p>No hidden fees. What we quote is what you pay — guaranteed.</p>
              </div>
            </div>
            <div class="why-feature">
              <div class="why-feature-icon"><i class="fas fa-check-circle"></i></div>
              <div>
                <h4>Attention to Detail</h4>
                <p>Every edge, every corner — we treat your property like our own.</p>
              </div>
            </div>
            <div class="why-feature">
              <div class="why-feature-icon"><i class="fas fa-check-circle"></i></div>
              <div>
                <h4>Fully Insured</h4>
                <p>Complete peace of mind. We're covered so you don't have to worry.</p>
              </div>
            </div>
          </div>

          <a href="/about" class="btn btn-primary">Meet Zach Murphy</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Gallery Teaser -->
  <section class="section gallery-teaser">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Our Work</span>
        <h2 class="section-title">Real Results for Real Customers</h2>
        <p class="section-desc">See the difference professional lawn care makes. Before and after transformations from right here in Westmoreland and surrounding areas.</p>
      </div>
      <div class="gallery-preview-grid">
        <div class="gallery-prev-item large">
          <img src="https://sspark.genspark.ai/cfimages?u1=O4%2FSqgdnn%2BVkW9V%2FXEJXYaHg3PYAafS2WHrur%2Bc9dlZERvaOu%2BBmR6ECLFgXFdyIu4uW7aBdo04dfw%2FHEiUxkF4SMlyswWA2qflkcTzAUX4yVQmrGZ2yF49N37VnK2Vu4cJcyQ%3D%3D&u2=fRJo9TAS%2FSjupvIv&width=2560" alt="Lawn mowing results" loading="lazy">
          <div class="gallery-overlay"><span>Residential Mowing</span></div>
        </div>
        <div class="gallery-prev-item">
          <img src="https://sspark.genspark.ai/cfimages?u1=vqv7qx8xICiQehIwMhzdbopVjgDcovZTiI%2F8a6ik3%2FdchEgjlgU1T20APOWCvOumGj2L%2BWa%2FIddwDd8HlQ%2FHaWozeYv7lrJ%2FEP72Ae1XGV6W9ZQzoMbMRrW5dzujUqOG&u2=jwv7fGuAmFtL7GkL&width=2560" alt="Fall leaf removal" loading="lazy">
          <div class="gallery-overlay"><span>Fall Leaf Removal</span></div>
        </div>
        <div class="gallery-prev-item">
          <img src="https://sspark.genspark.ai/cfimages?u1=SW8%2FSDwal9DiWykDDRJKsU7%2BB%2B73HFuY9tImtInb7SSC3t8aXKZUnvRxBeZOfir%2BPhydBLDhN%2BgI9PyZMJMpzdPHl21ii02eVPPWuhM6Ps3M4jymcF9Q7U9wRPXcFB2jgIplmVMyIw6FS0p68Ze7BkhYGONF2qy%2BajclvNrVUJBIG%2BvH&u2=dnRllo7849rtZoyO&width=2560" alt="Lawn before and after" loading="lazy">
          <div class="gallery-overlay"><span>Lawn Transformation</span></div>
        </div>
        <div class="gallery-prev-item">
          <img src="https://sspark.genspark.ai/cfimages?u1=wzIuMWQTiXMsPnjrX%2F70vl4IZJ8jiA6z3%2BTNptUIotTqPHRYXp6jRLJmtQT268J%2BfxPR1RdnqaXHMIIqxp0hsZQzryV8jJtRtWh4RTwpINbiEA%3D%3D&u2=%2Byjnt9%2FJHmuYQPra&width=2560" alt="Fertilization results" loading="lazy">
          <div class="gallery-overlay"><span>Fertilization Results</span></div>
        </div>
      </div>
      <div class="text-center" style="margin-top: 2.5rem;">
        <a href="/gallery" class="btn btn-primary">View Full Gallery</a>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="section testimonials">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Customer Reviews</span>
        <h2 class="section-title">What Our Neighbors Are Saying</h2>
        <p class="section-desc">Don't take our word for it — hear from real customers in Westmoreland and across Sumner County.</p>
      </div>

      <div class="testimonials-grid">
        <div class="testimonial-card">
          <div class="testimonial-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
          <p>"Zach has been mowing our yard for two years now. He's always on time, does a fantastic job, and is so easy to work with. Our lawn has never looked better!"</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar">J</div>
            <div>
              <strong>Jennifer T.</strong>
              <span>Westmoreland, TN</span>
            </div>
          </div>
        </div>

        <div class="testimonial-card featured">
          <div class="testimonial-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
          <p>"I've tried three other lawn companies before Murphy's. None of them compare. Zach treats your yard like it's his own. Honest, hardworking, and genuinely cares about quality."</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar">M</div>
            <div>
              <strong>Mike D.</strong>
              <span>Gallatin, TN</span>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <div class="testimonial-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
          <p>"We use Murphy's for our commercial property and couldn't be happier. Professional, reliable, and our property always looks impeccable. Highly recommend!"</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar">S</div>
            <div>
              <strong>Sarah W.</strong>
              <span>Portland, TN</span>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <div class="testimonial-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
          <p>"The fall cleanup Zach did was incredible. He got every single leaf out, cleaned up the beds, and left everything looking perfect. Worth every penny!"</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar">R</div>
            <div>
              <strong>Robert K.</strong>
              <span>Westmoreland, TN</span>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <div class="testimonial-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
          <p>"Great communication, fair prices, and exceptional results. Zach listened to exactly what I wanted and delivered. My neighbors keep asking who does my lawn!"</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar">L</div>
            <div>
              <strong>Lisa M.</strong>
              <span>Hendersonville, TN</span>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <div class="testimonial-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
          <p>"I signed up for the year-round maintenance package and it's been the best decision. No more worrying about my lawn — Zach handles it all, flawlessly."</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar">B</div>
            <div>
              <strong>Brian H.</strong>
              <span>White House, TN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta-section">
    <div class="cta-overlay"></div>
    <div class="container">
      <div class="cta-content">
        <h2>Ready for a Beautiful Lawn?</h2>
        <p>Get your free quote today. No obligation, no pressure — just honest pricing and professional results.</p>
        <div class="cta-actions">
          <a href="/booking" class="btn btn-primary btn-lg">
            <i class="fas fa-calendar-check"></i> Book Now — Free Quote
          </a>
          <a href="tel:6156039791" class="btn btn-outline-white btn-lg">
            <i class="fas fa-phone"></i> Call 615-603-9791
          </a>
        </div>
      </div>
    </div>
  </section>
  `

  return layout("Home", content, "/")
}
