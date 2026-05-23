import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { homePage } from './pages/home'
import { servicesPage } from './pages/services'
import { aboutPage } from './pages/about'
import { galleryPage } from './pages/gallery'
import { bookingPage } from './pages/booking'
import { contactPage } from './pages/contact'

type Bindings = Record<string, unknown>

const app = new Hono<{ Bindings: Bindings }>()

// ─── Static files ──────────────────────────────────────────────────────────
app.use('/static/*', serveStatic({ root: './' }))

// ─── Page routes ───────────────────────────────────────────────────────────
app.get('/',         (c) => c.html(homePage()))
app.get('/services', (c) => c.html(servicesPage()))
app.get('/about',    (c) => c.html(aboutPage()))
app.get('/gallery',  (c) => c.html(galleryPage()))
app.get('/booking',  (c) => c.html(bookingPage()))
app.get('/contact',  (c) => c.html(contactPage()))

// ─── Email helper via FormSubmit (zero-config, no API key needed) ──────────
const OWNER_EMAIL = 'murphylawnandlandscaping@gmail.com'

async function sendEmail(
  subject: string,
  fields: Record<string, string>,
  replyTo: string
): Promise<{ ok: boolean }> {
  try {
    const payload: Record<string, string> = {
      ...fields,
      _subject: subject,
      _replyto: replyTo,
      _template: 'table',
      _captcha: 'false',
    }
    const res = await fetch(`https://formsubmit.co/ajax/${OWNER_EMAIL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    })
    return { ok: res.ok }
  } catch {
    return { ok: false }
  }
}

// ─── Booking form POST ──────────────────────────────────────────────────────
app.post('/booking', async (c) => {
  const body = await c.req.parseBody()

  const name          = String(body.name           ?? '').trim()
  const phone         = String(body.phone          ?? '').trim()
  const email         = String(body.email          ?? '').trim()
  const address       = String(body.address        ?? 'Not provided').trim()
  const propertyType  = String(body.property_type  ?? 'Not specified').trim()
  const service       = String(body.service        ?? 'Not specified').trim()
  const preferredDate = String(body.preferred_date ?? 'Not specified').trim()
  const frequency     = String(body.frequency      ?? 'Not specified').trim()
  const lotSize       = String(body.lot_size       ?? 'Not specified').trim()
  const notes         = String(body.notes          ?? 'None').trim()

  const subject = `New Quote Request from ${name} — ${service}`

  await sendEmail(subject, {
    Name: name,
    Phone: phone,
    Email: email,
    Address: address,
    'Property Type': propertyType,
    Service: service,
    Frequency: frequency,
    'Lot Size': lotSize,
    'Preferred Date': preferredDate,
    Notes: notes,
  }, email)

  return c.html(bookingPage(true, body))
})

// ─── Contact form POST ───────────────────────────────────────────────────────
app.post('/contact', async (c) => {
  const body = await c.req.parseBody()

  const name    = String(body.name    ?? '').trim()
  const phone   = String(body.phone   ?? 'Not provided').trim()
  const email   = String(body.email   ?? '').trim()
  const subject = String(body.subject ?? 'General Question').trim()
  const message = String(body.message ?? '').trim()

  const emailSubject = `Website Message from ${name} — ${subject}`

  await sendEmail(emailSubject, {
    Name: name,
    Phone: phone,
    Email: email,
    Subject: subject,
    Message: message,
  }, email)

  return c.html(contactPage(true, body))
})

export default app
