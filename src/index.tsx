import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { homePage } from './pages/home'
import { servicesPage } from './pages/services'
import { aboutPage } from './pages/about'
import { galleryPage } from './pages/gallery'
import { bookingPage } from './pages/booking'
import { contactPage } from './pages/contact'

const app = new Hono()

// Serve static files
app.use('/static/*', serveStatic({ root: './' }))

// Routes
app.get('/', (c) => c.html(homePage()))
app.get('/services', (c) => c.html(servicesPage()))
app.get('/about', (c) => c.html(aboutPage()))
app.get('/gallery', (c) => c.html(galleryPage()))
app.get('/booking', (c) => c.html(bookingPage()))
app.get('/contact', (c) => c.html(contactPage()))

// Handle form submission
app.post('/booking', async (c) => {
  const body = await c.req.parseBody()
  // In production, this would send an email or store in DB
  return c.html(bookingPage(true, body))
})

app.post('/contact', async (c) => {
  const body = await c.req.parseBody()
  return c.html(contactPage(true, body))
})

export default app
