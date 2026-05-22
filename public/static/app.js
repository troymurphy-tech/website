/* Murphy's Lawn & Landscaping - Main JavaScript */
document.addEventListener('DOMContentLoaded', function () {

  // =====================
  // STICKY HEADER
  // =====================
  const header = document.getElementById('site-header')
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled')
      } else {
        header.classList.remove('scrolled')
      }
    })
  }

  // =====================
  // MOBILE HAMBURGER MENU
  // =====================
  const hamburger = document.getElementById('hamburger')
  const mainNav = document.getElementById('main-nav')
  const navOverlay = document.getElementById('navOverlay')

  function openMenu() {
    hamburger.classList.add('open')
    mainNav.classList.add('open')
    navOverlay.classList.add('active')
    document.body.style.overflow = 'hidden'
  }

  function closeMenu() {
    hamburger.classList.remove('open')
    mainNav.classList.remove('open')
    navOverlay.classList.remove('active')
    document.body.style.overflow = ''
  }

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      if (mainNav.classList.contains('open')) {
        closeMenu()
      } else {
        openMenu()
      }
    })
  }
  if (navOverlay) {
    navOverlay.addEventListener('click', closeMenu)
  }

  // =====================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // =====================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        e.preventDefault()
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        closeMenu()
      }
    })
  })

  // =====================
  // GALLERY FILTER
  // =====================
  const filterBtns = document.querySelectorAll('.gallery-filter-btn')
  const galleryItems = document.querySelectorAll('.gallery-item')

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      const filter = btn.getAttribute('data-filter')

      galleryItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-tag') === filter) {
          item.style.display = 'block'
          item.style.animation = 'fadeIn 0.4s ease'
        } else {
          item.style.display = 'none'
        }
      })
    })
  })

  // =====================
  // SCROLL ANIMATIONS
  // =====================
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(
      '.service-card, .testimonial-card, .value-card, .trust-card, .gallery-item, .why-feature, .booking-step, .contact-info-card'
    )
    elements.forEach(el => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight - 80) {
        el.classList.add('animated')
      }
    })
  }

  // Add CSS for animations
  const style = document.createElement('style')
  style.textContent = `
    .service-card, .testimonial-card, .value-card, .trust-card,
    .gallery-item, .why-feature, .booking-step, .contact-info-card {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .service-card.animated, .testimonial-card.animated, .value-card.animated,
    .trust-card.animated, .gallery-item.animated, .why-feature.animated,
    .booking-step.animated, .contact-info-card.animated {
      opacity: 1;
      transform: translateY(0);
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.97); }
      to { opacity: 1; transform: scale(1); }
    }
  `
  document.head.appendChild(style)

  window.addEventListener('scroll', animateOnScroll)
  setTimeout(animateOnScroll, 100)

  // =====================
  // FLOAT BOOK BUTTON SHOW/HIDE
  // =====================
  const floatBtn = document.getElementById('floatBookBtn')
  if (floatBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        floatBtn.style.opacity = '1'
        floatBtn.style.pointerEvents = 'auto'
      } else {
        floatBtn.style.opacity = '0'
        floatBtn.style.pointerEvents = 'none'
      }
    })
    floatBtn.style.opacity = '0'
    floatBtn.style.transition = 'opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease'
  }

  // =====================
  // BOOKING FORM VALIDATION & UX
  // =====================
  const bookingForm = document.getElementById('booking-form')
  if (bookingForm) {
    const submitBtn = bookingForm.querySelector('button[type="submit"]')

    bookingForm.addEventListener('submit', function (e) {
      // Basic client-side validation
      const required = bookingForm.querySelectorAll('[required]')
      let valid = true

      required.forEach(field => {
        field.style.borderColor = ''
        if (!field.value.trim()) {
          valid = false
          field.style.borderColor = '#ef4444'
          field.style.boxShadow = '0 0 0 3px rgba(239,68,68,0.15)'
        }
      })

      if (!valid) {
        e.preventDefault()
        const firstInvalid = bookingForm.querySelector('[required]:invalid, [style*="border-color: rgb(239"]')
        if (firstInvalid) firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' })
        return
      }

      // Show loading state
      if (submitBtn) {
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
        submitBtn.disabled = true
      }
    })

    // Clear error on input
    bookingForm.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('input', () => {
        field.style.borderColor = ''
        field.style.boxShadow = ''
      })
    })
  }

  // =====================
  // PHONE NUMBER FORMATTING
  // =====================
  const phoneInputs = document.querySelectorAll('input[type="tel"]')
  phoneInputs.forEach(input => {
    input.addEventListener('input', function () {
      let val = this.value.replace(/\D/g, '')
      if (val.length >= 6) {
        val = '(' + val.slice(0, 3) + ') ' + val.slice(3, 6) + '-' + val.slice(6, 10)
      } else if (val.length >= 3) {
        val = '(' + val.slice(0, 3) + ') ' + val.slice(3)
      }
      this.value = val
    })
  })

  // =====================
  // ACTIVE NAV HIGHLIGHTING
  // =====================
  const currentPath = window.location.pathname
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active')
    }
  })

})

// =====================
// LIGHTBOX (Gallery)
// =====================
function openLightbox(src, caption) {
  const lightbox = document.getElementById('lightbox')
  const img = document.getElementById('lightbox-img')
  const cap = document.getElementById('lightbox-caption')
  if (lightbox && img) {
    img.src = src
    img.alt = caption
    if (cap) cap.textContent = caption
    lightbox.classList.add('active')
    document.body.style.overflow = 'hidden'
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox')
  if (lightbox) {
    lightbox.classList.remove('active')
    document.body.style.overflow = ''
  }
}

// Close lightbox with Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeLightbox()
})
