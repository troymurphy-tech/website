import { layout } from '../components/layout'

export function galleryPage(): string {

  // Each photo gets its own service detail modal content
  const galleryImages = [
    {
      src: "/static/gallery/gallery-1-fenced-lawn-stripes.jpg",
      label: "Large Fenced Property — Perfect Mowing Stripes",
      tag: "Mowing",
      serviceId: "service-mowing-1",
      serviceTitle: "Lawn Mowing & Striping",
      serviceIcon: "fas fa-tractor",
      serviceTagline: "Precision cuts. Clean lines. Every single time.",
      serviceDesc: "This large fenced property is a perfect example of what Murphy's delivers on every mowing visit. We don't just cut grass — we take pride in clean, straight stripe patterns that make your lawn look like a professional baseball field.",
      serviceDetails: [
        "<strong>Precision mowing</strong> at the correct height for your grass type — never scalping, never too tall",
        "<strong>Alternating stripe patterns</strong> on every pass for that stadium-quality look",
        "<strong>Full perimeter edging</strong> along fences, sidewalks, and driveways",
        "<strong>Blow-down of all clippings</strong> from hard surfaces — driveways, sidewalks, patios",
        "<strong>Consistent scheduling</strong> — weekly or every 10 days so it never gets out of hand"
      ],
      cta: "Starting at competitive rates for Westmoreland, TN and surrounding areas.",
      bookLabel: "Get a Mowing Quote"
    },
    {
      src: "/static/gallery/gallery-2-brick-house-front-lawn.jpg",
      label: "Residential Front Lawn — Brick Home, Westmoreland",
      tag: "Residential",
      serviceId: "service-residential",
      serviceTitle: "Residential Lawn Care",
      serviceIcon: "fas fa-home",
      serviceTagline: "Your home deserves a lawn that turns heads.",
      serviceDesc: "This brick home in Westmoreland shows what a difference a well-maintained lawn makes for curb appeal. Murphy's handles residential properties of all sizes — from small town lots to large acreage homes. Your neighbors will notice.",
      serviceDetails: [
        "<strong>Weekly or every-10-day mowing schedules</strong> to keep your lawn looking sharp all season",
        "<strong>Edging along beds, curbs, and walkways</strong> for clean, defined borders",
        "<strong>Trimming around trees, mailboxes, and obstacles</strong> that mowers can't reach",
        "<strong>Clippings blown clear</strong> of driveways and walkways every visit",
        "<strong>Seasonal cleanups</strong> — spring and fall to prep your lawn for each season",
        "<strong>Fertilization programs</strong> available to keep grass thick, green, and weed-resistant"
      ],
      cta: "Serving Westmoreland, Gallatin, Portland, White House, and surrounding Sumner County.",
      bookLabel: "Get a Residential Quote"
    },
    {
      src: "/static/gallery/gallery-3-car-hunters-commercial.jpg",
      label: "Commercial Property — Car Hunters LLC",
      tag: "Commercial",
      serviceId: "service-commercial",
      serviceTitle: "Commercial Landscaping & Mulching",
      serviceIcon: "fas fa-building",
      serviceTagline: "First impressions matter. Make yours count.",
      serviceDesc: "This is a real commercial job at Car Hunters LLC — one of Murphy's commercial clients. We handled the full grounds maintenance including mulch bed installation and edging. A clean, well-maintained property tells your customers you take pride in your business.",
      serviceDetails: [
        "<strong>Commercial mowing contracts</strong> — weekly, bi-weekly, or custom schedules",
        "<strong>Mulch bed installation & refresh</strong> — clean beds with fresh mulch make a huge visual difference",
        "<strong>Bed edging</strong> to create sharp, defined lines between turf and landscape beds",
        "<strong>Shrub and bush trimming</strong> to keep plantings tidy and professional",
        "<strong>Parking lot & entrance cleanup</strong> — blowing debris from pavement and entries",
        "<strong>Reliable, insured service</strong> — we show up on schedule, every time, no excuses"
      ],
      cta: "Murphy's serves businesses, rental properties, churches, and commercial sites across Sumner County.",
      bookLabel: "Get a Commercial Quote"
    },
    {
      src: "/static/gallery/gallery-4-rolling-lawn-mower-view.jpg",
      label: "Large Rolling Lawn — Precision Stripe Mowing",
      tag: "Mowing",
      serviceId: "service-mowing-2",
      serviceTitle: "Large Property Mowing",
      serviceIcon: "fas fa-expand-arrows-alt",
      serviceTagline: "Big lawn? No problem. We've got the equipment.",
      serviceDesc: "Rolling terrain, large open areas, and wide-open properties are where Murphy's zero-turn equipment really shines. This photo was taken right from the mower seat — showing the clean, consistent stripe work across a large rolling lawn. No missed strips, no uneven cuts.",
      serviceDetails: [
        "<strong>Zero-turn mowers</strong> built for large acreage — fast, efficient, and precise",
        "<strong>Consistent stripe patterns</strong> even on rolling or uneven terrain",
        "<strong>Proper overlapping passes</strong> so no thin strips or missed sections",
        "<strong>Right cutting height</strong> for the season — higher in heat, lower in cooler weather",
        "<strong>Trimming included</strong> — every edge and obstacle trimmed on every visit",
        "<strong>Competitive pricing for large properties</strong> — call for an acreage quote"
      ],
      cta: "Have a big property that other companies quote too high? Call Murphy's — we price fairly for large lots.",
      bookLabel: "Quote My Large Property"
    },
    {
      src: "/static/gallery/gallery-5-backyard-stripes-boots.jpg",
      label: "Fenced Backyard — Clean Stripe Results",
      tag: "Mowing",
      serviceId: "service-backyard",
      serviceTitle: "Full Property Service — Front & Back",
      serviceIcon: "fas fa-cut",
      serviceTagline: "We get every inch — including that fenced backyard.",
      serviceDesc: "A lot of lawn companies skip the details in fenced backyards — Murphy's doesn't. This backyard shows the clean stripe results you get when someone takes real pride in their work. Every row straight, every edge trimmed, every blade of grass cut to the same height.",
      serviceDetails: [
        "<strong>Full front AND backyard service</strong> — we don't skip the back or charge extra",
        "<strong>Gate access for fenced yards</strong> — we come prepared with the right equipment",
        "<strong>String trimming</strong> along all fence lines so no strip of grass is left untouched",
        "<strong>Clean stripe patterns</strong> in backyards too — not just where the street can see",
        "<strong>Obstacle navigation</strong> around play sets, garden beds, pools, and sheds",
        "<strong>Blow-down included</strong> — patios and decks left clean after every visit"
      ],
      cta: "Your backyard deserves just as much care as your front yard. That's the Murphy's standard.",
      bookLabel: "Book Full Property Service"
    }
  ]

  const filterTags = ['All', 'Mowing', 'Residential', 'Commercial']

  const filterButtons = filterTags.map((tag, i) =>
    `<button class="gallery-filter-btn ${i === 0 ? 'active' : ''}" data-filter="${tag === 'All' ? 'all' : tag}">${tag}</button>`
  ).join('')

  const galleryItems = galleryImages.map(img =>
    `<div class="gallery-item" data-tag="${img.tag}" onclick="openServiceModal('${img.serviceId}')">
      <div class="gallery-item-inner">
        <img src="${img.src}" alt="${img.label}" loading="lazy">
        <span class="gallery-real-badge"><i class="fas fa-check-circle"></i> Real Job</span>
        <div class="gallery-item-overlay">
          <span class="gallery-item-tag">${img.tag}</span>
          <p class="gallery-item-label">${img.label}</p>
          <span class="gallery-click-hint"><i class="fas fa-info-circle"></i> Tap to learn more</span>
        </div>
      </div>
    </div>`
  ).join('')

  // Build service detail modals
  const modals = galleryImages.map(img => `
    <div class="service-modal" id="${img.serviceId}" onclick="closeServiceModal(event, this)">
      <div class="service-modal-inner">
        <button class="service-modal-close" onclick="document.getElementById('${img.serviceId}').classList.remove('active'); document.body.style.overflow=''">
          <i class="fas fa-times"></i>
        </button>
        <div class="service-modal-photo">
          <img src="${img.src}" alt="${img.label}">
          <span class="service-modal-tag"><i class="${img.serviceIcon}"></i> ${img.tag}</span>
        </div>
        <div class="service-modal-body">
          <h2 class="service-modal-title">${img.serviceTitle}</h2>
          <p class="service-modal-tagline">${img.serviceTagline}</p>
          <p class="service-modal-desc">${img.serviceDesc}</p>
          <h3 class="service-modal-what">What's Included:</h3>
          <ul class="service-modal-list">
            ${img.serviceDetails.map(d => `<li><i class="fas fa-check"></i><span>${d}</span></li>`).join('')}
          </ul>
          <p class="service-modal-cta-note"><i class="fas fa-map-marker-alt"></i> ${img.cta}</p>
          <div class="service-modal-actions">
            <a href="/booking" class="btn btn-primary"><i class="fas fa-calendar-check"></i> ${img.bookLabel}</a>
            <a href="tel:6156039791" class="btn btn-outline-green"><i class="fas fa-phone"></i> Call 615-603-9791</a>
          </div>
        </div>
      </div>
    </div>
  `).join('')

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
        <p>Real photos from real jobs — right here in Westmoreland, Tennessee</p>
      </div>
    </div>
  </section>

  <!-- Gallery Intro -->
  <section class="section pb-0">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Photo Gallery</span>
        <h2 class="section-title">See the Murphy's Difference</h2>
        <p class="section-desc">These are <strong>real photos from real jobs</strong> — taken right here in Westmoreland and Sumner County, Tennessee. Every stripe, every edge, every mulch bed you see was done by Murphy's.<br><strong>Click any photo to learn more about that service.</strong></p>
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

  <!-- Service Detail Modals -->
  ${modals}

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
