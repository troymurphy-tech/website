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
}

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

// ─── Email helper via Resend ───────────────────────────────────────────────
const OWNER_EMAIL = 'murphylawnandlandscaping@gmail.com'

async function sendViaResend(
  apiKey: string,
  subject: string,
  html: string,
  replyTo: string
): Promise<{ ok: boolean; error?: string }> {
  if (!apiKey) return { ok: false, error: 'No API key configured' }
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: "Murphy's Lawn & Landscaping <onboarding@resend.dev>",
        to: [OWNER_EMAIL],
        reply_to: replyTo,
        subject,
        html,
      }),
    })
    const body = await res.json() as { id?: string; name?: string; message?: string }
    if (!res.ok) return { ok: false, error: body.message || body.name }
    return { ok: true }
  } catch (err) {
    return { ok: false, error: String(err) }
  }
}

// ─── Booking form POST ──────────────────────────────────────────────────────
app.post('/booking', async (c) => {
  const body = await c.req.parseBody()

  const name         = String(body.name          ?? '').trim()
  const phone        = String(body.phone         ?? '').trim()
  const email        = String(body.email         ?? '').trim()
  const address      = String(body.address       ?? 'Not provided').trim()
  const propertyType = String(body.property_type ?? 'Not specified').trim()
  const service      = String(body.service       ?? 'Not specified').trim()
  const preferredDate= String(body.preferred_date?? 'Not specified').trim()
  const frequency    = String(body.frequency     ?? 'Not specified').trim()
  const lotSize      = String(body.lot_size      ?? 'Not specified').trim()
  const notes        = String(body.notes         ?? 'None').trim()

  const subject = `🌿 New Quote Request from ${name} — ${service}`
  const phoneTel = phone.replace(/\D/g, '')

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;padding:20px;background:#f5f5f5;">

  <div style="background:#2d7a35;padding:28px 32px;border-radius:10px 10px 0 0;text-align:center;">
    <h1 style="color:#fff;margin:0;font-size:24px;letter-spacing:-0.5px;">🌿 New Quote Request</h1>
    <p style="color:#c8f5cc;margin:8px 0 0;font-size:14px;">Murphy's Lawn &amp; Landscaping — murphyslawnnlandscaping.com</p>
  </div>

  <div style="background:#fff;padding:32px;border:1px solid #ddd;border-top:none;border-radius:0 0 10px 10px;">

    <h2 style="color:#2d7a35;font-size:16px;margin:0 0 16px;padding-bottom:10px;border-bottom:2px solid #e8f5e9;text-transform:uppercase;letter-spacing:0.5px;">👤 Customer Information</h2>
    <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
      <tr style="border-bottom:1px solid #f0f0f0;">
        <td style="padding:10px 0;color:#888;font-size:13px;width:130px;font-weight:600;text-transform:uppercase;">Name</td>
        <td style="padding:10px 0;color:#222;font-size:15px;font-weight:700;">${name}</td>
      </tr>
      <tr style="border-bottom:1px solid #f0f0f0;">
        <td style="padding:10px 0;color:#888;font-size:13px;font-weight:600;text-transform:uppercase;">Phone</td>
        <td style="padding:10px 0;"><a href="tel:${phoneTel}" style="color:#2d7a35;font-size:15px;font-weight:700;text-decoration:none;">${phone}</a></td>
      </tr>
      <tr style="border-bottom:1px solid #f0f0f0;">
        <td style="padding:10px 0;color:#888;font-size:13px;font-weight:600;text-transform:uppercase;">Email</td>
        <td style="padding:10px 0;"><a href="mailto:${email}" style="color:#2d7a35;font-size:15px;text-decoration:none;">${email}</a></td>
      </tr>
      <tr>
        <td style="padding:10px 0;color:#888;font-size:13px;font-weight:600;text-transform:uppercase;">Address</td>
        <td style="padding:10px 0;color:#222;font-size:15px;">${address}</td>
      </tr>
    </table>

    <h2 style="color:#2d7a35;font-size:16px;margin:0 0 16px;padding-bottom:10px;border-bottom:2px solid #e8f5e9;text-transform:uppercase;letter-spacing:0.5px;">🌱 Service Details</h2>
    <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
      <tr style="border-bottom:1px solid #f0f0f0;">
        <td style="padding:10px 0;color:#888;font-size:13px;width:130px;font-weight:600;text-transform:uppercase;">Service</td>
        <td style="padding:10px 0;color:#222;font-size:15px;font-weight:700;">${service}</td>
      </tr>
      <tr style="border-bottom:1px solid #f0f0f0;">
        <td style="padding:10px 0;color:#888;font-size:13px;font-weight:600;text-transform:uppercase;">Property Type</td>
        <td style="padding:10px 0;color:#222;font-size:15px;">${propertyType}</td>
      </tr>
      <tr style="border-bottom:1px solid #f0f0f0;">
        <td style="padding:10px 0;color:#888;font-size:13px;font-weight:600;text-transform:uppercase;">Lot Size</td>
        <td style="padding:10px 0;color:#222;font-size:15px;">${lotSize}</td>
      </tr>
      <tr style="border-bottom:1px solid #f0f0f0;">
        <td style="padding:10px 0;color:#888;font-size:13px;font-weight:600;text-transform:uppercase;">Frequency</td>
        <td style="padding:10px 0;color:#222;font-size:15px;">${frequency}</td>
      </tr>
      <tr>
        <td style="padding:10px 0;color:#888;font-size:13px;font-weight:600;text-transform:uppercase;">Preferred Date</td>
        <td style="padding:10px 0;color:#222;font-size:15px;">${preferredDate}</td>
      </tr>
    </table>

    ${notes && notes !== 'None' ? `
    <h2 style="color:#2d7a35;font-size:16px;margin:0 0 12px;padding-bottom:10px;border-bottom:2px solid #e8f5e9;text-transform:uppercase;letter-spacing:0.5px;">💬 Additional Notes</h2>
    <div style="background:#f4faf5;padding:16px;border-left:4px solid #2d7a35;border-radius:0 6px 6px 0;color:#333;line-height:1.6;margin-bottom:24px;">${notes.replace(/\n/g, '<br>')}</div>
    ` : ''}

    <div style="background:#e8f5e9;border-radius:8px;padding:20px;text-align:center;">
      <p style="margin:0 0 14px;color:#1a4a1f;font-weight:700;font-size:15px;">⚡ Respond quickly to win the job!</p>
      <div>
        <a href="tel:${phoneTel}" style="display:inline-block;background:#2d7a35;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:700;font-size:14px;margin:4px;">📞 Call ${name.split(' ')[0]}</a>
        <a href="sms:${phoneTel}" style="display:inline-block;background:#1a4a1f;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:700;font-size:14px;margin:4px;">💬 Text ${name.split(' ')[0]}</a>
        <a href="mailto:${email}?subject=Re: Your Quote Request from Murphy's Lawn %26 Landscaping" style="display:inline-block;background:#555;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:700;font-size:14px;margin:4px;">✉️ Email Back</a>
      </div>
    </div>

  </div>
  <p style="text-align:center;color:#aaa;font-size:12px;margin-top:16px;">Sent from murphyslawnnlandscaping.com · Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })} CT</p>
</body>
</html>`

  // Send email via Resend
  const apiKey = c.env?.RESEND_API_KEY ?? ''
  await sendViaResend(apiKey, subject, html, email)

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
  const phoneTel = phone !== 'Not provided' ? phone.replace(/\D/g, '') : ''

  const emailSubject = `💬 Website Message from ${name} — ${subject}`

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;padding:20px;background:#f5f5f5;">

  <div style="background:#2d7a35;padding:28px 32px;border-radius:10px 10px 0 0;text-align:center;">
    <h1 style="color:#fff;margin:0;font-size:24px;letter-spacing:-0.5px;">💬 New Website Message</h1>
    <p style="color:#c8f5cc;margin:8px 0 0;font-size:14px;">Murphy's Lawn &amp; Landscaping — murphyslawnnlandscaping.com</p>
  </div>

  <div style="background:#fff;padding:32px;border:1px solid #ddd;border-top:none;border-radius:0 0 10px 10px;">

    <h2 style="color:#2d7a35;font-size:16px;margin:0 0 16px;padding-bottom:10px;border-bottom:2px solid #e8f5e9;text-transform:uppercase;letter-spacing:0.5px;">👤 Contact Details</h2>
    <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
      <tr style="border-bottom:1px solid #f0f0f0;">
        <td style="padding:10px 0;color:#888;font-size:13px;width:100px;font-weight:600;text-transform:uppercase;">Name</td>
        <td style="padding:10px 0;color:#222;font-size:15px;font-weight:700;">${name}</td>
      </tr>
      <tr style="border-bottom:1px solid #f0f0f0;">
        <td style="padding:10px 0;color:#888;font-size:13px;font-weight:600;text-transform:uppercase;">Phone</td>
        <td style="padding:10px 0;">${phoneTel ? `<a href="tel:${phoneTel}" style="color:#2d7a35;font-size:15px;font-weight:700;text-decoration:none;">${phone}</a>` : '<span style="color:#aaa;font-size:14px;">Not provided</span>'}</td>
      </tr>
      <tr style="border-bottom:1px solid #f0f0f0;">
        <td style="padding:10px 0;color:#888;font-size:13px;font-weight:600;text-transform:uppercase;">Email</td>
        <td style="padding:10px 0;"><a href="mailto:${email}" style="color:#2d7a35;font-size:15px;text-decoration:none;">${email}</a></td>
      </tr>
      <tr>
        <td style="padding:10px 0;color:#888;font-size:13px;font-weight:600;text-transform:uppercase;">Subject</td>
        <td style="padding:10px 0;color:#222;font-size:15px;">${subject}</td>
      </tr>
    </table>

    <h2 style="color:#2d7a35;font-size:16px;margin:0 0 12px;padding-bottom:10px;border-bottom:2px solid #e8f5e9;text-transform:uppercase;letter-spacing:0.5px;">📝 Message</h2>
    <div style="background:#f4faf5;padding:16px;border-left:4px solid #2d7a35;border-radius:0 6px 6px 0;color:#333;line-height:1.7;font-size:15px;white-space:pre-line;margin-bottom:24px;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>')}</div>

    <div style="background:#e8f5e9;border-radius:8px;padding:20px;text-align:center;">
      <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)} — Murphy%27s Lawn %26 Landscaping" style="display:inline-block;background:#2d7a35;color:#fff;padding:12px 28px;border-radius:6px;text-decoration:none;font-weight:700;font-size:14px;">✉️ Reply to ${name.split(' ')[0]}</a>
      ${phoneTel ? `<a href="tel:${phoneTel}" style="display:inline-block;background:#1a4a1f;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:700;font-size:14px;margin-left:8px;">📞 Call Back</a>` : ''}
    </div>

  </div>
  <p style="text-align:center;color:#aaa;font-size:12px;margin-top:16px;">Sent from murphyslawnnlandscaping.com · Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })} CT</p>
</body>
</html>`

  const apiKey = c.env?.RESEND_API_KEY ?? ''
  await sendViaResend(apiKey, emailSubject, html, email)

  return c.html(contactPage(true, body))
})

export default app
