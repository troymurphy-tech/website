export function layout(title: string, content: string, currentPage: string = ''): string {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/booking', label: 'Get a Quote' },
    { href: '/contact', label: 'Contact' },
  ]

  const navItems = navLinks.map(link => {
    const isActive = currentPage === link.href
    return `<a href="${link.href}" class="nav-link ${isActive ? 'active' : ''}">${link.label}</a>`
  }).join('')

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Murphy's Lawn &amp; Landscaping - Professional lawn care and landscaping services in Westmoreland, Tennessee. Serving residential and commercial clients with mowing, cleanups, fertilization, and more.">
  <title>${title} | Murphy's Lawn &amp; Landscaping</title>
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='32' fill='%232d7a35'/%3E%3Ctext y='.9em' font-size='40' x='12' fill='white'%3E🌿%3C/text%3E%3C/svg%3E">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="/static/style.css">
</head>
<body>

  <!-- Top Bar -->
  <div class="top-bar">
    <div class="container">
      <div class="top-bar-content">
        <span><i class="fas fa-map-marker-alt"></i> Westmoreland, Tennessee</span>
        <span><a href="tel:6156039791"><i class="fas fa-phone"></i> 615-603-9791</a></span>
        <span class="domain-tag"><i class="fas fa-globe"></i> murphyslawnnlandscaping.com</span>
      </div>
    </div>
  </div>

  <!-- Header -->
  <header class="site-header" id="site-header">
    <div class="container">
      <div class="header-inner">
        <a href="/" class="logo">
          <div class="logo-icon"><i class="fas fa-leaf"></i></div>
          <div class="logo-text">
            <span class="logo-main">Murphy's</span>
            <span class="logo-sub">Lawn &amp; Landscaping</span>
          </div>
        </a>

        <nav class="main-nav" id="main-nav">
          ${navItems}
          <a href="/booking" class="btn-nav-cta">Book Now <i class="fas fa-arrow-right"></i></a>
        </nav>

        <button class="hamburger" id="hamburger" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main>
    ${content}
  </main>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <i class="fas fa-leaf"></i>
            <div>
              <div class="footer-logo-main">Murphy's Lawn &amp; Landscaping</div>
              <div class="footer-logo-domain">murphyslawnnlandscaping.com</div>
            </div>
          </div>
          <p>Professional lawn care and landscaping services serving Westmoreland, TN and surrounding communities. Quality work, honest pricing, and a yard you'll love.</p>
          <div class="footer-social">
            <a href="https://www.facebook.com" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="https://www.google.com" target="_blank" aria-label="Google"><i class="fab fa-google"></i></a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/"><i class="fas fa-chevron-right"></i> Home</a></li>
            <li><a href="/services"><i class="fas fa-chevron-right"></i> Services</a></li>
            <li><a href="/about"><i class="fas fa-chevron-right"></i> About Us</a></li>
            <li><a href="/gallery"><i class="fas fa-chevron-right"></i> Gallery</a></li>
            <li><a href="/booking"><i class="fas fa-chevron-right"></i> Get a Quote</a></li>
            <li><a href="/contact"><i class="fas fa-chevron-right"></i> Contact</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li><a href="/services"><i class="fas fa-chevron-right"></i> Lawn Mowing</a></li>
            <li><a href="/services"><i class="fas fa-chevron-right"></i> Spring Cleanups</a></li>
            <li><a href="/services"><i class="fas fa-chevron-right"></i> Fall &amp; Leaf Removal</a></li>
            <li><a href="/services"><i class="fas fa-chevron-right"></i> Fertilization Programs</a></li>
            <li><a href="/services"><i class="fas fa-chevron-right"></i> Weed Control</a></li>
            <li><a href="/services"><i class="fas fa-chevron-right"></i> Property Maintenance</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Contact Us</h4>
          <ul class="footer-contact">
            <li><i class="fas fa-phone"></i> <a href="tel:6156039791">615-603-9791</a></li>
            <li><i class="fas fa-map-marker-alt"></i> Westmoreland, Tennessee</li>
            <li><i class="fas fa-clock"></i> Mon–Sat: 7:00 AM – 7:00 PM</li>
            <li><i class="fas fa-globe"></i> murphyslawnnlandscaping.com</li>
          </ul>
          <a href="/booking" class="btn btn-primary btn-sm" style="margin-top:1rem;">Get Free Quote</a>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Murphy's Lawn &amp; Landscaping | Westmoreland, TN | All Rights Reserved</p>
        <p class="footer-bottom-domain">murphyslawnnlandscaping.com</p>
      </div>
    </div>
  </footer>

  <!-- Floating Book Now Button -->
  <a href="/booking" class="float-book-btn" id="floatBookBtn">
    <i class="fas fa-calendar-check"></i>
    <span>Book Now</span>
  </a>

  <!-- Mobile Nav Overlay -->
  <div class="nav-overlay" id="navOverlay"></div>

  <script src="/static/app.js"></script>
</body>
</html>`
}
