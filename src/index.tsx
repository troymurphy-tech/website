import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { homePage } from './pages/home'
import { servicesPage } from './pages/services'
import { aboutPage } from './pages/about'
import { galleryPage } from './pages/gallery'
import { bookingPage } from './pages/booking'
import { contactPage } from './pages/contact'

type Bindings = {
  RESEND_API_KEY: string
  OWNER_EMAIL: string
}

const app = new Hono<{ Bindings: Bindings }>()

// Serve static files
app.use('/static/*', serveStatic({ root: './' }))

// Routes
app.get('/', (c) => c.html(homePage()))
app.get('/services', (c) => c.html(servicesPage()))
app.get('/about', (c) => c.html(aboutPage()))
app.get('/gallery', (c) => c.html(galleryPage()))
app.get('/booking', (c) => c.html(bookingPage()))
app.get('/contact', (c) => c.html(contactPage()))

// ─── Send email via Resend ─────────────────────────────────────────────────
async function sendEmail(
  apiKey: string,
  to: string,
  subject: string,
  html: string,
  replyTo?: string
): Promise<boolean> {
  if (!apiKey) return false
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Murphy\'s Lawn & Landscaping <noreply@murphyslawnnlandscaping.com>',
        to: [to],
        subject,
        html,
        reply_to: replyTo,
      }),
    })
    return res.ok
  } catch {
    return false
  }
}

// ─── Booking form POST ─────────────────────────────────────────────────────
app.post('/booking', async (c) => {
  const body = await c.req.parseBody()

  const ownerEmail = c.env?.OWNER_EMAIL || 'zach@murphyslawnnlandscaping.com'
  const resendKey  = c.env?.RESEND_API_KEY || ''

  const name         = String(body.name         || '').trim()
  const phone        = String(body.phone        || '').trim()
  const email        = String(body.email        || '').trim()
  const address      = String(body.address      || 'Not provided').trim()
  const propertyType = String(body.property_type|| 'Not specified').trim()
  const service      = String(body.service      || 'Not specified').trim()
  const preferredDate= String(body.preferred_date|| 'Not specified').trim()
  const frequency    = String(body.frequency    || 'Not specified').trim()
  const lotSize      = String(body.lot_size     || 'Not specified').trim()
  const notes        = String(body.notes        || 'None').trim()

  const subject = `🌿 New Quote Request from ${name} — ${service}`

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9f9f9;padding:20px;">
  <div style="background:#2d7a35;padding:24px 30px;border-radius:8px 8px 0 0;text-align:center;">
    <h1 style="color:#fff;margin:0;font-size:22px;">🌿 New Quote Request</h1>
    <p style="color:#c8f5cc;margin:6px 0 0;">Murphy's Lawn &amp; Landscaping</p>
  </div>
  <div style="background:#fff;padding:30px;border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;">

    <h2 style="color:#2d7a35;margin-top:0;border-bottom:2px solid #e8f5e9;padding-bottom:10px;">Customer Information</h2>
    <table style="width:100%;border-collapse:collapse;">
      <tr><td style="padding:8px 0;color:#666;width:140px;"><strong>Name:</strong></td><td style="padding:8px 0;color:#222;">${name}</td></tr>
      <tr><td style="padding:8px 0;color:#666;"><strong>Phone:</strong></td><td style="padding:8px 0;color:#222;"><a href="tel:${phone.replace(/\D/g,'')}" style="color:#2d7a35;">${phone}</a></td></tr>
      <tr><td style="padding:8px 0;color:#666;"><strong>Email:</strong></td><td style="padding:8px 0;color:#222;"><a href="mailto:${email}" style="color:#2d7a35;">${email}</a></td></tr>
      <tr><td style="padding:8px 0;color:#666;"><strong>Address:</strong></td><td style="padding:8px 0;color:#222;">${address}</td></tr>
    </table>

    <h2 style="color:#2d7a35;margin-top:24px;border-bottom:2px solid #e8f5e9;padding-bottom:10px;">Service Details</h2>
    <table style="width:100%;border-collapse:collapse;">
      <tr><td style="padding:8px 0;color:#666;width:140px;"><strong>Service:</strong></td><td style="padding:8px 0;color:#222;">${service}</td></tr>
      <tr><td style="padding:8px 0;color:#666;"><strong>Property Type:</strong></td><td style="padding:8px 0;color:#222;">${propertyType}</td></tr>
      <tr><td style="padding:8px 0;color:#666;"><strong>Lot Size:</strong></td><td style="padding:8px 0;color:#222;">${lotSize}</td></tr>
      <tr><td style="padding:8px 0;color:#666;"><strong>Frequency:</strong></td><td style="padding:8px 0;color:#222;">${frequency}</td></tr>
      <tr><td style="padding:8px 0;color:#666;"><strong>Preferred Date:</strong></td><td style="padding:8px 0;color:#222;">${preferredDate}</td></tr>
    </table>

    ${notes && notes !== 'None' ? `
    <h2 style="color:#2d7a35;margin-top:24px;border-bottom:2px solid #e8f5e9;padding-bottom:10px;">Additional Notes</h2>
    <p style="background:#f4faf5;padding:14px;border-left:4px solid #2d7a35;border-radius:4px;color:#333;">${notes.replace(/\n/g,'<br>')}</p>
    ` : ''}

    <div style="margin-top:30px;padding:16px;background:#e8f5e9;border-radius:6px;text-align:center;">
      <p style="margin:0 0 12px;color:#2d7a35;font-weight:bold;">Respond quickly to win the job!</p>
      <a href="tel:${phone.replace(/\D/g,'')}" style="display:inline-block;background:#2d7a35;color:#fff;padding:12px 28px;border-radius:6px;text-decoration:none;font-weight:bold;margin-right:10px;">📞 Call ${name.split(' ')[0]}</a>
      <a href="mailto:${email}" style="display:inline-block;background:#555;color:#fff;padding:12px 28px;border-radius:6px;text-decoration:none;font-weight:bold;">✉️ Email Back</a>
    </div>
  </div>
  <p style="text-align:center;color:#aaa;font-size:12px;margin-top:16px;">This notification was sent by murphyslawnnlandscaping.com</p>
</body>
</html>`

  await sendEmail(resendKey, ownerEmail, subject, html, email)

  return c.html(bookingPage(true, body))
})

// ─── Contact form POST ─────────────────────────────────────────────────────
app.post('/contact', async (c) => {
  const body = await c.req.parseBody()

  const ownerEmail = c.env?.OWNER_EMAIL || 'zach@murphyslawnnlandscaping.com'
  const resendKey  = c.env?.RESEND_API_KEY || ''

  const name    = String(body.name    || '').trim()
  const phone   = String(body.phone   || 'Not provided').trim()
  const email   = String(body.email   || '').trim()
  const subject = String(body.subject || 'General Question').trim()
  const message = String(body.message || '').trim()

  const emailSubject = `💬 Website Message from ${name} — ${subject}`

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9f9f9;padding:20px;">
  <div style="background:#2d7a35;padding:24px 30px;border-radius:8px 8px 0 0;text-align:center;">
    <h1 style="color:#fff;margin:0;font-size:22px;">💬 New Website Message</h1>
    <p style="color:#c8f5cc;margin:6px 0 0;">Murphy's Lawn &amp; Landscaping</p>
  </div>
  <div style="background:#fff;padding:30px;border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;">

    <h2 style="color:#2d7a35;margin-top:0;border-bottom:2px solid #e8f5e9;padding-bottom:10px;">Contact Details</h2>
    <table style="width:100%;border-collapse:collapse;">
      <tr><td style="padding:8px 0;color:#666;width:100px;"><strong>Name:</strong></td><td style="padding:8px 0;color:#222;">${name}</td></tr>
      <tr><td style="padding:8px 0;color:#666;"><strong>Phone:</strong></td><td style="padding:8px 0;color:#222;">${phone !== 'Not provided' ? `<a href="tel:${phone.replace(/\D/g,'')}" style="color:#2d7a35;">${phone}</a>` : 'Not provided'}</td></tr>
      <tr><td style="padding:8px 0;color:#666;"><strong>Email:</strong></td><td style="padding:8px 0;color:#222;"><a href="mailto:${email}" style="color:#2d7a35;">${email}</a></td></tr>
      <tr><td style="padding:8px 0;color:#666;"><strong>Subject:</strong></td><td style="padding:8px 0;color:#222;">${subject}</td></tr>
    </table>

    <h2 style="color:#2d7a35;margin-top:24px;border-bottom:2px solid #e8f5e9;padding-bottom:10px;">Message</h2>
    <p style="background:#f4faf5;padding:14px;border-left:4px solid #2d7a35;border-radius:4px;color:#333;white-space:pre-line;">${message.replace(/\n/g,'<br>')}</p>

    <div style="margin-top:30px;padding:16px;background:#e8f5e9;border-radius:6px;text-align:center;">
      <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" style="display:inline-block;background:#2d7a35;color:#fff;padding:12px 28px;border-radius:6px;text-decoration:none;font-weight:bold;">✉️ Reply to ${name.split(' ')[0]}</a>
    </div>
  </div>
  <p style="text-align:center;color:#aaa;font-size:12px;margin-top:16px;">This message was sent via murphyslawnnlandscaping.com</p>
</body>
</html>`

  await sendEmail(resendKey, ownerEmail, emailSubject, html, email)

  return c.html(contactPage(true, body))
})

export default app
