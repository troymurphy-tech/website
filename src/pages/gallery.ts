import { layout } from '../components/layout'

export function galleryPage(): string {
  const galleryImages = [
    {
      src: "https://sspark.genspark.ai/cfimages?u1=l%2BTCxQTHrFjiCtOnDX53lea1KdkxifEAOMfYPJ13qtm2P7Fxi%2FwhhcMqnPrcflpn%2Bnx6mOQxdAQNz7k0QyzCDxJm%2FegFhO7HKQq9qtADf80UZ%2BYfNAtqZvmrhn%2B%2B3YuKhLj%2BUhi%2BST%2BcvMtTmrju&u2=nCmskng2eWpdh23j&width=2560",
      label: "Residential Lawn - After",
      tag: "Mowing"
    },
    {
      src: "https://sspark.genspark.ai/cfimages?u1=SW8%2FSDwal9DiWykDDRJKsU7%2BB%2B73HFuY9tImtInb7SSC3t8aXKZUnvRxBeZOfir%2BPhydBLDhN%2BgI9PyZMJMpzdPHl21ii02eVPPWuhM6Ps3M4jymcF9Q7U9wRPXcFB2jgIplmVMyIw6FS0p68Ze7BkhYGONF2qy%2BajclvNrVUJBIG%2BvH&u2=dnRllo7849rtZoyO&width=2560",
      label: "Lawn Renovation - Before & After",
      tag: "Transformation"
    },
    {
      src: "https://sspark.genspark.ai/cfimages?u1=vqv7qx8xICiQehIwMhzdbopVjgDcovZTiI%2F8a6ik3%2FdchEgjlgU1T20APOWCvOumGj2L%2BWa%2FIddwDd8HlQ%2FHaWozeYv7lrJ%2FEP72Ae1XGV6W9ZQzoMbMRrW5dzujUqOG&u2=jwv7fGuAmFtL7GkL&width=2560",
      label: "Fall Leaf Removal - Westmoreland",
      tag: "Fall Cleanup"
    },
    {
      src: "https://sspark.genspark.ai/cfimages?u1=O4%2FSqgdnn%2BVkW9V%2FXEJXYaHg3PYAafS2WHrur%2Bc9dlZERvaOu%2BBmR6ECLFgXFdyIu4uW7aBdo04dfw%2FHEiUxkF4SMlyswWA2qflkcTzAUX4yVQmrGZ2yF49N37VnK2Vu4cJcyQ%3D%3D&u2=fRJo9TAS%2FSjupvIv&width=2560",
      label: "Commercial Lawn Service",
      tag: "Commercial"
    },
    {
      src: "https://sspark.genspark.ai/cfimages?u1=wzIuMWQTiXMsPnjrX%2F70vl4IZJ8jiA6z3%2BTNptUIotTqPHRYXp6jRLJmtQT268J%2BfxPR1RdnqaXHMIIqxp0hsZQzryV8jJtRtWh4RTwpINbiEA%3D%3D&u2=%2Byjnt9%2FJHmuYQPra&width=2560",
      label: "Fertilization Results - Green Lawn",
      tag: "Fertilization"
    },
    {
      src: "https://sspark.genspark.ai/cfimages?u1=ElFQBG243PPCy2yi0d3k0XqilLQbK7rtZVEbshl1PmYdkFqZKHYoUimabZLjrGF0AQYKWYsGQ9eSxHnkJQIiPLHT38oMqYHr1tZ6T7VqoSbRiy0WIOIIKvuZVc9orCM9Rv3eonRgfHiDDW08MyKjMmKEWT08je4oPIV3vW3%2F4hVAQe1pDPpZ&u2=qzVI9XxJ%2FlH9AVWZ&width=2560",
      label: "Spring Cleanup - Cleared Beds",
      tag: "Spring Cleanup"
    },
    {
      src: "https://sspark.genspark.ai/cfimages?u1=r3EMwrpEKx2slXlvNRzOlCUbP7GNi6kCxcsjGaUxeOrcsraqZJUemHZ%2FnTgVxBjhZFjbPkflHay%2F2t12adD9j2EBocWas2Imo9Ruvqzr0PRLPXidkNzFF4YVZ0wR&u2=ImR8U80N5edgnixN&width=2560",
      label: "Professional Edging Detail Work",
      tag: "Mowing"
    },
    {
      src: "https://sspark.genspark.ai/cfimages?u1=OwDNIs%2FOsMa55S1mF%2B9spoHW%2F9voiRyBXgldKmnyPuNNqc7HdZU1U4ctKQmjGw58Bf%2Fdw3y35N43U9YLwscRi6okgsP8NtozaRYgUIpfrsdQccqq1cGqhhd30oFqGzQOxgdM&u2=WFVYZXodAJrv875x&width=2560",
      label: "Property Maintenance Package",
      tag: "Maintenance"
    },
    {
      src: "https://sspark.genspark.ai/cfimages?u1=5vFBpSLNMCxvLmPEg7o%2FmNjnqatyIirhjkXBQi7JKQjeY32sku7FxRVGiJ67%2FpdTN6kixyXEwlqCFnd0pYQn6MRYLz1b4EvwuUTh33zwUz%2FAhtETBfTkhTeXFRPNZA%3D%3D&u2=XxoEFD8NkFVnWKfz&width=2560",
      label: "Lawn Mowing & Edging",
      tag: "Mowing"
    },
    {
      src: "https://sspark.genspark.ai/cfimages?u1=PALoIFBIXA3E8gqoDBlevDQDrsKcmF80cbtABUNpvIGlfmzGl0MXhJqiq30aO6ULk3haDrisQdLt8fXAcGc2H5%2BkOTLEp0LMDM3nQ5kA9mXMO%2FHe4uuBJvmelHXnY5Pos%2FZg2%2Fa6fK3GvCdhXpTWaERwKAlJ6CRQeEVwXF%2BBKYWOLKEfLZw5u%2FRtwa0M%2BtC8S6xUrq3%2BQN8d&u2=YzGDf%2BF3Ubleejrk&width=2560",
      label: "Lawn Care Results",
      tag: "Fertilization"
    },
    {
      src: "https://sspark.genspark.ai/cfimages?u1=G%2FArALuoVvRRXTetw7lw9v7mygQznC2wYUiemgIDOOgPry4iPgV6mMeUgdPTm7XM4LsRgFhhsQKZSN6VuogBTps4LOp3Ke2m6AX%2FIm%2BxP4x3FvF9MFJr3hJI3xuxWJk7&u2=68LHb6gCxRmt7sGN&width=2560",
      label: "Leaf Removal Service",
      tag: "Fall Cleanup"
    },
    {
      src: "https://sspark.genspark.ai/cfimages?u1=2bxamD2AbbSa3q7T%2F2ag2kZHygjHhcQIM6TfyuxNqtWEFeKH%2FwpSfh8yqSY0EgsSaRWIpC3dnhZWntbO1x0SlhFHSSBiXELOr%2Ft%2Fje7wpqfy4zq54kZk5o3%2B2LsZ7Ke%2F&u2=a07NIAXnXQj9ZtCw&width=2560",
      label: "Knoxville-Style Leaf Removal",
      tag: "Fall Cleanup"
    }
  ]

  const filterTags = ['All', 'Mowing', 'Fall Cleanup', 'Spring Cleanup', 'Fertilization', 'Transformation', 'Commercial', 'Maintenance']

  const filterButtons = filterTags.map((tag, i) =>
    `<button class="gallery-filter-btn ${i === 0 ? 'active' : ''}" data-filter="${tag === 'All' ? 'all' : tag}">${tag}</button>`
  ).join('')

  const galleryItems = galleryImages.map(img =>
    `<div class="gallery-item" data-tag="${img.tag}">
      <div class="gallery-item-inner">
        <img src="${img.src}" alt="${img.label}" loading="lazy">
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
        <p class="section-desc">We let our work speak for itself. Browse through photos of our lawn care and landscaping projects from across the Westmoreland area. New photos added regularly — follow us on Facebook for more updates!</p>
      </div>

      <div class="gallery-fb-cta">
        <i class="fab fa-facebook-f"></i>
        <span>See more photos on our <a href="https://www.facebook.com" target="_blank">Facebook page</a> — updated after every job!</span>
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
          <a href="/contact" class="btn btn-primary">Send Your Photos</a>
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
