/* Murphy's Lawn & Landscaping - Main JavaScript */

// =====================
// EMAILJS CONFIG
// EmailJS delivers form submissions directly to murphylawnandlandscaping@gmail.com
// Service: Gmail, Templates: booking_template & contact_template
// =====================
const EMAILJS_PUBLIC_KEY  = 'user_murphys_lawn'  // replaced at runtime if set
const EMAILJS_SERVICE_ID  = 'service_murphys'
const EMAILJS_BOOKING_TPL = 'template_booking'
const EMAILJS_CONTACT_TPL = 'template_contact'

document.addEventListener('DOMContentLoaded', function () {

  // =====================
  // STICKY HEADER
  // =====================
  const header = document.getElementById('site-header')
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 40)
    })
  }

  // =====================
  // MOBILE HAMBURGER MENU
  // =====================
  const hamburger = document.getElementById('hamburger')
  const mainNav   = document.getElementById('main-nav')
  const navOverlay= document.getElementById('navOverlay')

  function openMenu() {
    hamburger && hamburger.classList.add('open')
    mainNav   && mainNav.classList.add('open')
    navOverlay && navOverlay.classList.add('active')
    document.body.style.overflow = 'hidden'
  }
  function closeMenu() {
    hamburger && hamburger.classList.remove('open')
    mainNav   && mainNav.classList.remove('open')
    navOverlay && navOverlay.classList.remove('active')
    document.body.style.overflow = ''
  }

  if (hamburger) hamburger.addEventListener('click', () => mainNav && mainNav.classList.contains('open') ? closeMenu() : openMenu())
  if (navOverlay) navOverlay.addEventListener('click', closeMenu)

  // =====================
  // SMOOTH SCROLL
  // =====================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'))
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); closeMenu() }
    })
  })

  // =====================
  // GALLERY FILTER
  // =====================
  const filterBtns  = document.querySelectorAll('.gallery-filter-btn')
  const galleryItems = document.querySelectorAll('.gallery-item')

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      const filter = btn.getAttribute('data-filter')
      galleryItems.forEach(item => {
        const show = filter === 'all' || item.getAttribute('data-tag') === filter
        item.style.display = show ? 'block' : 'none'
        if (show) item.style.animation = 'fadeIn 0.4s ease'
      })
    })
  })

  // =====================
  // SCROLL ANIMATIONS
  // =====================
  const style = document.createElement('style')
  style.textContent = `
    .service-card,.testimonial-card,.value-card,.trust-card,
    .gallery-item,.why-feature,.booking-step,.contact-info-card {
      opacity:0; transform:translateY(24px); transition:opacity 0.5s ease,transform 0.5s ease;
    }
    .service-card.animated,.testimonial-card.animated,.value-card.animated,
    .trust-card.animated,.gallery-item.animated,.why-feature.animated,
    .booking-step.animated,.contact-info-card.animated { opacity:1; transform:translateY(0); }
    @keyframes fadeIn { from{opacity:0;transform:scale(0.97)} to{opacity:1;transform:scale(1)} }
  `
  document.head.appendChild(style)

  const animateOnScroll = () => {
    document.querySelectorAll(
      '.service-card,.testimonial-card,.value-card,.trust-card,.gallery-item,.why-feature,.booking-step,.contact-info-card'
    ).forEach(el => { if (el.getBoundingClientRect().top < window.innerHeight - 80) el.classList.add('animated') })
  }
  window.addEventListener('scroll', animateOnScroll)
  setTimeout(animateOnScroll, 100)

  // =====================
  // FLOAT BOOK BUTTON
  // =====================
  const floatBtn = document.getElementById('floatBookBtn')
  if (floatBtn) {
    floatBtn.style.opacity = '0'
    floatBtn.style.transition = 'opacity 0.3s ease,transform 0.3s ease,box-shadow 0.3s ease'
    window.addEventListener('scroll', () => {
      floatBtn.style.opacity = window.scrollY > 300 ? '1' : '0'
      floatBtn.style.pointerEvents = window.scrollY > 300 ? 'auto' : 'none'
    })
  }

  // =====================
  // BOOKING FORM — intercept & send to murphylawnandlandscaping@gmail.com
  // =====================
  const bookingForm = document.getElementById('booking-form')
  if (bookingForm) {
    const submitBtn = bookingForm.querySelector('button[type="submit"]')

    bookingForm.addEventListener('submit', function (e) {
      // Client-side validation
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
        const firstBad = bookingForm.querySelector('[style*="border-color: rgb(239"]')
        if (firstBad) firstBad.scrollIntoView({ behavior: 'smooth', block: 'center' })
        return
      }

      // Show loading state
      if (submitBtn) {
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending your request...'
        submitBtn.disabled = true
      }

      // Let the normal POST happen — server-side Resend will fire
      // EmailJS is also attempted as a parallel backup
      try {
        const fd = new FormData(bookingForm)
        const params = {
          to_email:      'murphylawnandlandscaping@gmail.com',
          from_name:     fd.get('name')          || '',
          from_phone:    fd.get('phone')          || '',
          from_email:    fd.get('email')          || '',
          address:       fd.get('address')        || 'Not provided',
          property_type: fd.get('property_type')  || '',
          service:       fd.get('service')        || '',
          preferred_date:fd.get('preferred_date') || '',
          frequency:     fd.get('frequency')      || '',
          lot_size:      fd.get('lot_size')       || '',
          notes:         fd.get('notes')          || 'None',
          subject:       `New Quote Request from ${fd.get('name')} — ${fd.get('service')}`,
        }
        if (window.emailjs) {
          emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_BOOKING_TPL, params, EMAILJS_PUBLIC_KEY)
            .catch(() => {}) // silent fallback — server POST still delivers
        }
      } catch (_) {}
      // form submits normally via POST
    })

    bookingForm.querySelectorAll('input,select,textarea').forEach(f => {
      f.addEventListener('input', () => { f.style.borderColor = ''; f.style.boxShadow = '' })
    })
  }

  // =====================
  // CONTACT FORM — intercept & send to murphylawnandlandscaping@gmail.com
  // =====================
  const contactForm = document.getElementById('contact-form')
  if (contactForm) {
    const submitBtn = contactForm.querySelector('button[type="submit"]')

    contactForm.addEventListener('submit', function (e) {
      // Show loading
      if (submitBtn) {
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending message...'
        submitBtn.disabled = true
      }

      // EmailJS parallel backup
      try {
        const fd = new FormData(contactForm)
        const params = {
          to_email:   'murphylawnandlandscaping@gmail.com',
          from_name:  fd.get('name')    || '',
          from_phone: fd.get('phone')   || '',
          from_email: fd.get('email')   || '',
          subject:    fd.get('subject') || 'General Question',
          message:    fd.get('message') || '',
        }
        if (window.emailjs) {
          emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_CONTACT_TPL, params, EMAILJS_PUBLIC_KEY)
            .catch(() => {})
        }
      } catch (_) {}
      // form submits normally via POST
    })
  }

  // =====================
  // PHONE NUMBER FORMATTING
  // =====================
  document.querySelectorAll('input[type="tel"]').forEach(input => {
    input.addEventListener('input', function () {
      let val = this.value.replace(/\D/g, '')
      if (val.length >= 6)      val = '(' + val.slice(0,3) + ') ' + val.slice(3,6) + '-' + val.slice(6,10)
      else if (val.length >= 3) val = '(' + val.slice(0,3) + ') ' + val.slice(3)
      this.value = val
    })
  })

  // =====================
  // ACTIVE NAV HIGHLIGHTING
  // =====================
  const currentPath = window.location.pathname
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPath) link.classList.add('active')
  })

})

// =====================
// LIGHTBOX (Gallery)
// =====================
function openLightbox(src, caption) {
  const lightbox = document.getElementById('lightbox')
  const img      = document.getElementById('lightbox-img')
  const cap      = document.getElementById('lightbox-caption')
  if (lightbox && img) {
    img.src = src; img.alt = caption
    if (cap) cap.textContent = caption
    lightbox.classList.add('active')
    document.body.style.overflow = 'hidden'
  }
}
function closeLightbox() {
  const lightbox = document.getElementById('lightbox')
  if (lightbox) { lightbox.classList.remove('active'); document.body.style.overflow = '' }
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox() })
