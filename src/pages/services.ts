import { layout } from '../components/layout'

export function servicesPage(): string {
  const content = `
  <!-- Page Hero -->
  <section class="page-hero">
    <div class="page-hero-overlay"></div>
    <div class="container">
      <div class="page-hero-content">
        <nav class="breadcrumb">
          <a href="/">Home</a> <i class="fas fa-chevron-right"></i> <span>Services</span>
        </nav>
        <h1>Our Services</h1>
        <p>Complete lawn and landscaping solutions for residential and commercial properties across Westmoreland, TN</p>
      </div>
    </div>
  </section>

  <!-- Services Intro -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Full-Service Lawn Care</span>
        <h2 class="section-title">Everything Your Property Needs</h2>
        <p class="section-desc">Murphy's Lawn &amp; Landscaping offers a comprehensive range of services designed to keep your property looking its absolute best — every season of the year.</p>
      </div>
    </div>
  </section>

  <!-- Service Detail Cards -->
  <section class="section pt-0">
    <div class="container">

      <!-- Lawn Mowing -->
      <div class="service-detail-card" id="mowing">
        <div class="service-detail-img">
          <img src="https://sspark.genspark.ai/cfimages?u1=r3EMwrpEKx2slXlvNRzOlCUbP7GNi6kCxcsjGaUxeOrcsraqZJUemHZ%2FnTgVxBjhZFjbPkflHay%2F2t12adD9j2EBocWas2Imo9Ruvqzr0PRLPXidkNzFF4YVZ0wR&u2=ImR8U80N5edgnixN&width=2560" alt="Professional lawn mowing service" loading="lazy">
        </div>
        <div class="service-detail-content">
          <div class="service-detail-icon"><i class="fas fa-tractor"></i></div>
          <h2>Lawn Mowing</h2>
          <p class="service-detail-lead">Residential &amp; Commercial Mowing</p>
          <p>A consistently well-mowed lawn is the foundation of great curb appeal. Murphy's provides precision mowing services for homes and businesses throughout Westmoreland and Sumner County. We don't just cut grass — we create beautifully manicured outdoor spaces.</p>
          <ul class="service-features">
            <li><i class="fas fa-check"></i> Precision mowing at the correct cutting height for your grass type</li>
            <li><i class="fas fa-check"></i> Clean edging along driveways, sidewalks, and beds</li>
            <li><i class="fas fa-check"></i> Blow-off of all hard surfaces after mowing</li>
            <li><i class="fas fa-check"></i> Weekly, bi-weekly, or custom scheduling</li>
            <li><i class="fas fa-check"></i> Residential and commercial properties</li>
            <li><i class="fas fa-check"></i> Consistent same-day-of-week scheduling</li>
          </ul>
          <a href="/booking" class="btn btn-primary">Get a Mowing Quote</a>
        </div>
      </div>

      <!-- Spring Cleanups -->
      <div class="service-detail-card reverse" id="spring">
        <div class="service-detail-img">
          <img src="https://sspark.genspark.ai/cfimages?u1=ElFQBG243PPCy2yi0d3k0XqilLQbK7rtZVEbshl1PmYdkFqZKHYoUimabZLjrGF0AQYKWYsGQ9eSxHnkJQIiPLHT38oMqYHr1tZ6T7VqoSbRiy0WIOIIKvuZVc9orCM9Rv3eonRgfHiDDW08MyKjMmKEWT08je4oPIV3vW3%2F4hVAQe1pDPpZ&u2=qzVI9XxJ%2FlH9AVWZ&width=2560" alt="Spring lawn cleanup service" loading="lazy">
        </div>
        <div class="service-detail-content">
          <div class="service-detail-icon"><i class="fas fa-seedling"></i></div>
          <h2>Spring Cleanups</h2>
          <p class="service-detail-lead">Seasonal Property Revitalization</p>
          <p>After a long Tennessee winter, your lawn and landscape beds need some love. Our spring cleanup service prepares your property for the growing season, removing winter debris and getting everything looking fresh and healthy.</p>
          <ul class="service-features">
            <li><i class="fas fa-check"></i> Winter debris removal and haul-off</li>
            <li><i class="fas fa-check"></i> Leaf clearing from turf and beds</li>
            <li><i class="fas fa-check"></i> Bed edging and border definition</li>
            <li><i class="fas fa-check"></i> Shrub trimming and shaping</li>
            <li><i class="fas fa-check"></i> First mow of the season with detail work</li>
            <li><i class="fas fa-check"></i> Property walkthrough and inspection</li>
          </ul>
          <a href="/booking" class="btn btn-primary">Book Spring Cleanup</a>
        </div>
      </div>

      <!-- Fall & Leaf Removal -->
      <div class="service-detail-card" id="fall">
        <div class="service-detail-img">
          <img src="https://sspark.genspark.ai/cfimages?u1=vqv7qx8xICiQehIwMhzdbopVjgDcovZTiI%2F8a6ik3%2FdchEgjlgU1T20APOWCvOumGj2L%2BWa%2FIddwDd8HlQ%2FHaWozeYv7lrJ%2FEP72Ae1XGV6W9ZQzoMbMRrW5dzujUqOG&u2=jwv7fGuAmFtL7GkL&width=2560" alt="Fall leaf removal service" loading="lazy">
        </div>
        <div class="service-detail-content">
          <div class="service-detail-icon"><i class="fas fa-wind"></i></div>
          <h2>Fall &amp; Leaf Removal</h2>
          <p class="service-detail-lead">Complete Fall Cleanup Services</p>
          <p>Tennessee's beautiful fall foliage means one thing for homeowners: lots of leaves. Our fall and leaf removal service ensures your property is cleared efficiently and thoroughly, protecting your lawn from damage and keeping your yard looking sharp all season.</p>
          <ul class="service-features">
            <li><i class="fas fa-check"></i> Complete leaf removal from lawn and beds</li>
            <li><i class="fas fa-check"></i> Leaf blowing from all hard surfaces</li>
            <li><i class="fas fa-check"></i> Debris hauling and disposal</li>
            <li><i class="fas fa-check"></i> Final mow and edge of the season</li>
            <li><i class="fas fa-check"></i> Winterization preparation</li>
            <li><i class="fas fa-check"></i> One-time or recurring fall visits</li>
          </ul>
          <a href="/booking" class="btn btn-primary">Schedule Leaf Removal</a>
        </div>
      </div>

      <!-- Fertilization -->
      <div class="service-detail-card reverse" id="fertilization">
        <div class="service-detail-img">
          <img src="https://sspark.genspark.ai/cfimages?u1=wzIuMWQTiXMsPnjrX%2F70vl4IZJ8jiA6z3%2BTNptUIotTqPHRYXp6jRLJmtQT268J%2BfxPR1RdnqaXHMIIqxp0hsZQzryV8jJtRtWh4RTwpINbiEA%3D%3D&u2=%2Byjnt9%2FJHmuYQPra&width=2560" alt="Lawn fertilization program" loading="lazy">
        </div>
        <div class="service-detail-content">
          <div class="service-detail-icon"><i class="fas fa-flask"></i></div>
          <h2>Fertilization Programs</h2>
          <p class="service-detail-lead">Customized Nutrition Plans for Your Lawn</p>
          <p>A beautiful lawn starts with the right nutrition. Our fertilization programs are tailored to your specific grass type, soil conditions, and Tennessee's unique climate. We use professional-grade products that deliver deep green color and strong root development.</p>
          <ul class="service-features">
            <li><i class="fas fa-check"></i> Customized plans for fescue, bermuda &amp; zoysia</li>
            <li><i class="fas fa-check"></i> Slow-release and quick-release applications</li>
            <li><i class="fas fa-check"></i> Seasonal timing for maximum effectiveness</li>
            <li><i class="fas fa-check"></i> Soil health assessment included</li>
            <li><i class="fas fa-check"></i> 4–6 application programs available</li>
            <li><i class="fas fa-check"></i> Child and pet-safe products available</li>
          </ul>
          <a href="/booking" class="btn btn-primary">Start a Program</a>
        </div>
      </div>

      <!-- Weed Control -->
      <div class="service-detail-card" id="weed">
        <div class="service-detail-img">
          <img src="https://sspark.genspark.ai/cfimages?u1=5ZwAxoIi6TjUDCrV6OBydTGFzaxA1benHtoRhaZPfD4I7rgAILCHwAT7X8kVDvh4tvESC3YPLxuVYa4qCxN8VtAuX1E4PbGIIDLcw6X1YNGX8V7cw8Bi5ZlL4SljCZYJdDaX4NvyVx%2BW4M%2BXqr05ud%2B31thWsHp&u2=kA1MenCneOq8i1Ud&width=2560" alt="Weed control lawn treatment" loading="lazy">
        </div>
        <div class="service-detail-content">
          <div class="service-detail-icon"><i class="fas fa-shield-alt"></i></div>
          <h2>Weed Control</h2>
          <p class="service-detail-lead">Pre-Emergent &amp; Post-Emergent Treatments</p>
          <p>Weeds compete with your grass for nutrients, water, and sunlight. Our professional weed control program uses targeted treatments to eliminate existing weeds and prevent new ones from taking hold — giving your lawn a clean, healthy, weed-free appearance.</p>
          <ul class="service-features">
            <li><i class="fas fa-check"></i> Pre-emergent applications in spring and fall</li>
            <li><i class="fas fa-check"></i> Broadleaf weed control (dandelions, clover, etc.)</li>
            <li><i class="fas fa-check"></i> Crabgrass prevention and elimination</li>
            <li><i class="fas fa-check"></i> Safe for pets and families after drying</li>
            <li><i class="fas fa-check"></i> Combined with fertilization for best results</li>
            <li><i class="fas fa-check"></i> Follow-up visits included if needed</li>
          </ul>
          <a href="/booking" class="btn btn-primary">Get Weed Control</a>
        </div>
      </div>

      <!-- Full Property Maintenance -->
      <div class="service-detail-card reverse" id="maintenance">
        <div class="service-detail-img">
          <img src="https://sspark.genspark.ai/cfimages?u1=OwDNIs%2FOsMa55S1mF%2B9spoHW%2F9voiRyBXgldKmnyPuNNqc7HdZU1U4ctKQmjGw58Bf%2Fdw3y35N43U9YLwscRi6okgsP8NtozaRYgUIpfrsdQccqq1cGqhhd30oFqGzQOxgdM&u2=WFVYZXodAJrv875x&width=2560" alt="Full property maintenance service" loading="lazy">
        </div>
        <div class="service-detail-content">
          <div class="service-detail-icon"><i class="fas fa-home"></i></div>
          <h2>Full Property Maintenance</h2>
          <p class="service-detail-lead">Year-Round Complete Care Packages</p>
          <p>Our full property maintenance packages are the ultimate hands-off solution for busy homeowners and commercial property managers. We handle every aspect of your outdoor space so you can focus on what matters most to you.</p>
          <ul class="service-features">
            <li><i class="fas fa-check"></i> Weekly or bi-weekly mowing &amp; edging</li>
            <li><i class="fas fa-check"></i> Seasonal fertilization and weed control</li>
            <li><i class="fas fa-check"></i> Spring and fall cleanups included</li>
            <li><i class="fas fa-check"></i> Shrub trimming and bed maintenance</li>
            <li><i class="fas fa-check"></i> Priority scheduling and response</li>
            <li><i class="fas fa-check"></i> Monthly property reports available</li>
          </ul>
          <a href="/booking" class="btn btn-primary">Get a Package Quote</a>
        </div>
      </div>

    </div>
  </section>

  <!-- Service Areas -->
  <section class="section service-areas">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Where We Work</span>
        <h2 class="section-title">Service Areas</h2>
        <p class="section-desc">Murphy's Lawn &amp; Landscaping proudly serves Westmoreland and the surrounding communities across Sumner County and beyond.</p>
      </div>
      <div class="areas-grid">
        <div class="area-item"><i class="fas fa-map-marker-alt"></i> Westmoreland, TN</div>
        <div class="area-item"><i class="fas fa-map-marker-alt"></i> Gallatin, TN</div>
        <div class="area-item"><i class="fas fa-map-marker-alt"></i> Portland, TN</div>
        <div class="area-item"><i class="fas fa-map-marker-alt"></i> White House, TN</div>
        <div class="area-item"><i class="fas fa-map-marker-alt"></i> Hendersonville, TN</div>
        <div class="area-item"><i class="fas fa-map-marker-alt"></i> Goodlettsville, TN</div>
        <div class="area-item"><i class="fas fa-map-marker-alt"></i> Bethpage, TN</div>
        <div class="area-item"><i class="fas fa-map-marker-alt"></i> Red Boiling Springs, TN</div>
      </div>
      <p class="areas-note">Don't see your area listed? <a href="/contact">Contact us</a> — we may still be able to serve you!</p>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-section">
    <div class="cta-overlay"></div>
    <div class="container">
      <div class="cta-content">
        <h2>Ready to Get Started?</h2>
        <p>Request your free, no-obligation quote today and see why hundreds of customers trust Murphy's.</p>
        <div class="cta-actions">
          <a href="/booking" class="btn btn-primary btn-lg">
            <i class="fas fa-calendar-check"></i> Request Free Quote
          </a>
          <a href="tel:6156039791" class="btn btn-outline-white btn-lg">
            <i class="fas fa-phone"></i> 615-603-9791
          </a>
        </div>
      </div>
    </div>
  </section>
  `

  return layout("Services", content, "/services")
}
