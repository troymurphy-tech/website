import { layout } from '../components/layout'

export function aboutPage(): string {
  const content = `
  <!-- Page Hero -->
  <section class="page-hero">
    <div class="page-hero-overlay"></div>
    <div class="container">
      <div class="page-hero-content">
        <nav class="breadcrumb">
          <a href="/">Home</a> <i class="fas fa-chevron-right"></i> <span>About</span>
        </nav>
        <h1>About Murphy's</h1>
        <p>Local roots. Professional results. A name you can trust in Westmoreland, Tennessee.</p>
      </div>
    </div>
  </section>

  <!-- About Story -->
  <section class="section">
    <div class="container">
      <div class="about-story-grid">
        <div class="about-story-img">
          <img src="https://sspark.genspark.ai/cfimages?u1=PALoIFBIXA3E8gqoDBlevDQDrsKcmF80cbtABUNpvIGlfmzGl0MXhJqiq30aO6ULk3haDrisQdLt8fXAcGc2H5%2BkOTLEp0LMDM3nQ5kA9mXMO%2FHe4uuBJvmelHXnY5Pos%2FZg2%2Fa6fK3GvCdhXpTWaERwKAlJ6CRQeEVwXF%2BBKYWOLKEfLZw5u%2FRtwa0M%2BtC8S6xUrq3%2BQN8d&u2=YzGDf%2BF3Ubleejrk&width=2560" alt="Professional lawn care" loading="lazy">
          <div class="about-img-badge">
            <i class="fas fa-award"></i>
            <div>
              <strong>Zach Murphy</strong>
              <span>Owner &amp; Operator</span>
            </div>
          </div>
        </div>

        <div class="about-story-content">
          <span class="section-tag">Our Story</span>
          <h2 class="section-title">Built on Hard Work and Local Pride</h2>

          <p>Zach Murphy grew up in Westmoreland, Tennessee — and he never left. This community is his home, and he's built his business with one purpose in mind: to serve his neighbors with the same level of pride and dedication he'd want from anyone working on his own property.</p>

          <p>With over a decade of hands-on experience in lawn care and landscaping, Zach started Murphy's Lawn &amp; Landscaping from the ground up. No franchise, no corporate backing — just a hard-working local guy, quality equipment, and an unwavering commitment to doing the job right the first time.</p>

          <p>What began as a few lawns in the neighborhood quickly grew through word-of-mouth referrals. Today, Murphy's serves hundreds of residential and commercial clients across Sumner County, and the business keeps growing — because results speak for themselves.</p>

          <blockquote class="about-quote">
            <i class="fas fa-quote-left"></i>
            "I treat every customer's property like it's my own. That's not just a saying — it's how I was raised and how I run my business."
            <cite>— Zach Murphy, Owner</cite>
          </blockquote>
        </div>
      </div>
    </div>
  </section>

  <!-- Values Section -->
  <section class="section about-values-section">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">What Drives Us</span>
        <h2 class="section-title">Our Core Values</h2>
        <p class="section-desc">These aren't just words on a wall — they're the principles that guide every job, every interaction, and every decision we make.</p>
      </div>

      <div class="values-grid">
        <div class="value-card">
          <div class="value-icon"><i class="fas fa-handshake"></i></div>
          <h3>Integrity</h3>
          <p>We do what we say, say what we mean, and never cut corners. Our word is our contract.</p>
        </div>
        <div class="value-card">
          <div class="value-icon"><i class="fas fa-star"></i></div>
          <h3>Quality</h3>
          <p>Good enough isn't good enough for us. We take pride in the details that make the difference between okay and outstanding.</p>
        </div>
        <div class="value-card">
          <div class="value-icon"><i class="fas fa-users"></i></div>
          <h3>Community</h3>
          <p>We're your neighbors. We live here, shop here, and care deeply about making Westmoreland a beautiful place to live.</p>
        </div>
        <div class="value-card">
          <div class="value-icon"><i class="fas fa-clock"></i></div>
          <h3>Reliability</h3>
          <p>You scheduled it, we'll be there. Rain or shine, we show up and deliver consistent service you can count on.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Experience Section -->
  <section class="section about-experience">
    <div class="container">
      <div class="experience-grid">
        <div class="experience-content">
          <span class="section-tag">Experience &amp; Expertise</span>
          <h2 class="section-title">Why Customers Keep Coming Back</h2>

          <p>Zach has spent over a decade mastering the craft of lawn care in Middle Tennessee's unique climate. He understands the region's soil composition, the grass varieties that thrive here, and the seasonal rhythms that make Tennessee lawns both beautiful and challenging.</p>

          <p>From identifying nutrient deficiencies to knowing exactly when to apply pre-emergent for Tennessee's spring, Zach brings professional-grade knowledge to every property he services. And unlike large companies where you never know who's coming to your door, with Murphy's you get Zach — every time.</p>

          <div class="experience-stats">
            <div class="exp-stat">
              <span class="exp-num">10+</span>
              <span class="exp-label">Years Experience</span>
            </div>
            <div class="exp-stat">
              <span class="exp-num">500+</span>
              <span class="exp-label">Properties Served</span>
            </div>
            <div class="exp-stat">
              <span class="exp-num">100%</span>
              <span class="exp-label">Locally Owned</span>
            </div>
            <div class="exp-stat">
              <span class="exp-num">5★</span>
              <span class="exp-label">Customer Rating</span>
            </div>
          </div>
        </div>

        <div class="experience-image">
          <img src="https://sspark.genspark.ai/cfimages?u1=5vFBpSLNMCxvLmPEg7o%2FmNjnqatyIirhjkXBQi7JKQjeY32sku7FxRVGiJ67%2FpdTN6kixyXEwlqCFnd0pYQn6MRYLz1b4EvwuUTh33zwUz%2FAhtETBfTkhTeXFRPNZA%3D%3D&u2=XxoEFD8NkFVnWKfz&width=2560" alt="Lawn care professional at work" loading="lazy">
        </div>
      </div>
    </div>
  </section>

  <!-- Certifications / Trust -->
  <section class="section trust-section">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Credentials &amp; Trust</span>
        <h2 class="section-title">Why You Can Trust Murphy's</h2>
      </div>
      <div class="trust-cards">
        <div class="trust-card">
          <i class="fas fa-shield-alt"></i>
          <h4>Fully Insured</h4>
          <p>Murphy's carries full liability insurance on every job, protecting your property and giving you total peace of mind.</p>
        </div>
        <div class="trust-card">
          <i class="fas fa-id-badge"></i>
          <h4>Licensed &amp; Professional</h4>
          <p>We operate fully within all Tennessee state regulations and maintain all required professional licenses and certifications.</p>
        </div>
        <div class="trust-card">
          <i class="fas fa-tools"></i>
          <h4>Professional Equipment</h4>
          <p>We invest in commercial-grade equipment and keep it meticulously maintained so every job delivers professional results.</p>
        </div>
        <div class="trust-card">
          <i class="fas fa-comments"></i>
          <h4>Responsive Communication</h4>
          <p>Have a question or need to adjust a service? Zach picks up the phone and responds promptly — always.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-section">
    <div class="cta-overlay"></div>
    <div class="container">
      <div class="cta-content">
        <h2>Ready to Work with Zach?</h2>
        <p>Join hundreds of satisfied customers across Westmoreland and Sumner County.</p>
        <div class="cta-actions">
          <a href="/booking" class="btn btn-primary btn-lg">
            <i class="fas fa-calendar-check"></i> Get a Free Quote
          </a>
          <a href="/contact" class="btn btn-outline-white btn-lg">
            <i class="fas fa-envelope"></i> Contact Us
          </a>
        </div>
      </div>
    </div>
  </section>
  `

  return layout("About Us", content, "/about")
}
