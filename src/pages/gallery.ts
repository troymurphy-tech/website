import { layout } from '../components/layout'

export function galleryPage(): string {
  const galleryImages = [
    {
      src: "/static/gallery/gallery-1-fenced-lawn-stripes.jpg",
      label: "Large Fenced Property — Perfect Mowing Stripes",
      tag: "Mowing",
      real: true
    },
    {
      src: "/static/gallery/gallery-2-brick-house-front-lawn.jpg",
      label: "Residential Front Lawn — Brick Home, Westmoreland",
      tag: "Mowing",
      real: true
    },
    {
      src: "/static/gallery/gallery-3-car-hunters-commercial.jpg",
      label: "Commercial Property — Car Hunters LLC Mulch & Bed Work",
      tag: "Commercial",
      real: true
    },
    {
      src: "/static/gallery/gallery-4-rolling-lawn-mower-view.jpg",
      label: "Large Rolling Lawn — Precision Stripe Mowing",
      tag: "Mowing",
      real: true
    },
    {
      src: "/static/gallery/gallery-5-backyard-stripes-boots.jpg",
      label: "Fenced Suburban Backyard — Clean Stripe Results",
      tag: "Mowing",
      real: true
    }
  ]

  const filterTags = ['All', 'Mowing', 'Commercial']

  const filterButtons = filterTags.map((tag, i) =>
    `<button class="gallery-filter-btn ${i === 0 ? 'active' : ''}" data-filter="${tag === 'All' ? 'all' : tag}">${tag}</button>`
  ).join('')

  const galleryItems = galleryImages.map(img =>
    `<div class="gallery-item" data-tag="${img.tag}">
      <div class="gallery-item-inner">
        <img src="${img.src}" alt="${img.label}" loading="lazy">
        ${img.real ? '<span class="gallery-real-badge"><i class="fas fa-check-circle"></i> Real Job</span>' : ''}
        <div class="gallery-item-overlay">
          <span class="gallery-item-tag">${img.tag}</span>
          <p class="gallery-item-label">${img.label}</p>
          <button class="gallery-zoom-btn" onclick="openLightbox('${img.src}', '${img.label}')">
            <i class="fas fa-search-plus"></i>
          </button>
        </div>
      </div>
    </div>`
  ).join('')

  const content = `
  <!-- Page Hero -->
  <section class="page-hero">
    <div class="page-hero-overlay"></div>
    <div class="container">
      <div class="page-hero-content">
        <nav class="breadcrumb">
          <a href="/">Home</a> <i class="fas fa-chevron-right"></i> <span>Gallery</span>
        </nav>
        <h1>Our Work Gallery</h1>
        <p>Real results from real properties in Westmoreland and Sumner County, Tennessee</p>
      </div>
    </div>
  </section>

  <!-- Gallery Intro -->
  <section class="section pb-0">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Photo Gallery</span>
        <h2 class="section-title">See the Murphy's Difference</h2>
        <p class="section-desc">These are <strong>real photos from real jobs</strong> — taken right here in Westmoreland and Sumner County, Tennessee. Every stripe, every edge, every mulch bed you see was done by Murphy's. Follow us on Facebook for new photos after every job!</p>
      </div>

      <div class="gallery-fb-cta">
        <i class="fab fa-facebook-f"></i>
        <span>See more real job photos on our <a href="https://www.facebook.com/profile.php?id=61573111775575" target="_blank" rel="noopener">Facebook page</a> — updated after every job!</span>
      </div>
    </div>
  </section>

  <!-- Gallery Grid -->
  <section class="section">
    <div class="container">
      <!-- Filter Buttons -->
      <div class="gallery-filters">
        ${filterButtons}
      </div>

      <!-- Gallery Grid -->
      <div class="gallery-grid" id="gallery-grid">
        ${galleryItems}
      </div>

      <!-- Add Your Photos CTA -->
      <div class="gallery-add-cta">
        <div class="gallery-add-inner">
          <i class="fas fa-camera"></i>
          <div>
            <h3>Are You a Murphy's Customer?</h3>
            <p>We'd love to feature your lawn! Send us your before &amp; after photos and we'll add them to the gallery.</p>
          </div>
          <a href="mailto:murphylawnandlandscaping@gmail.com?subject=Customer%20Photo%20Submission&body=Hi%20Murphy's!%20Here%20are%20my%20before%20%26%20after%20photos%20to%20add%20to%20the%20gallery.%0A%0AName%3A%20%0AAddress%3A%20%0A%0AThanks!" class="btn btn-primary">Send Your Photos</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Lightbox -->
  <div class="lightbox" id="lightbox" onclick="closeLightbox()">
    <div class="lightbox-inner">
      <button class="lightbox-close" onclick="closeLightbox()"><i class="fas fa-times"></i></button>
      <img id="lightbox-img" src="" alt="">
      <p id="lightbox-caption"></p>
    </div>
  </div>

  <!-- CTA -->
  <section class="cta-section">
    <div class="cta-overlay"></div>
    <div class="container">
      <div class="cta-content">
        <h2>Like What You See?</h2>
        <p>Get a free quote and let's make your lawn the best on the block.</p>
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

  return layout("Gallery", content, "/gallery")
}
