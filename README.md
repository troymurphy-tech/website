# Murphy's Lawn & Landscaping

## Project Overview
- **Business**: Murphy's Lawn & Landscaping
- **Owner**: Zach Murphy
- **Location**: Westmoreland, Tennessee
- **Phone**: 615-603-9791
- **Domain**: murphyslawnnlandscaping.com
- **Platform**: Cloudflare Pages (Hono + TypeScript)

## Pages & Features

### Pages
| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero section with CTA, services overview, testimonials, gallery teaser |
| `/services` | Services | Detailed service descriptions with photos |
| `/about` | About | Zach Murphy's story, values, experience |
| `/gallery` | Gallery | Photo gallery with filter by service type + lightbox |
| `/booking` | Book Now | Interactive quote request form |
| `/contact` | Contact | Phone, map, contact form, quick contact buttons |

### Key Features
- ✅ Floating "Book Now" button on every page (appears after scrolling)
- ✅ Mobile-responsive with hamburger menu
- ✅ Sticky header with scroll effects
- ✅ Green + Earth tones + White color scheme
- ✅ Professional hero sections with lawn photos
- ✅ Gallery with category filters + lightbox viewer
- ✅ Interactive booking form with validation
- ✅ Contact form with success state
- ✅ Scroll animations on cards and elements
- ✅ Phone number auto-formatting
- ✅ Google Maps embed (Westmoreland, TN)
- ✅ murphyslawnnlandscaping.com in header/footer

## Services Covered
1. Lawn Mowing (Residential & Commercial)
2. Spring Cleanups
3. Fall & Leaf Removal
4. Fertilization Programs
5. Weed Control
6. Full Property Maintenance Packages

## Tech Stack
- **Framework**: Hono (TypeScript)
- **Build**: Vite + @hono/vite-build
- **Deploy**: Cloudflare Pages
- **Dev Server**: Wrangler Pages Dev
- **CSS**: Custom CSS (no framework) – green/earth tone design system
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Montserrat + Open Sans)

## Deployment

### Local Development (PM2)
```bash
npm run build
pm2 start ecosystem.config.cjs
```

### Production (Cloudflare Pages)
```bash
npm run build
npx wrangler pages deploy dist --project-name murphys-lawn
```

## Data Models
- No database required – static content site with form submissions
- Forms use standard POST to `/booking` and `/contact` endpoints
- Future: Add Cloudflare D1 or email service (SendGrid) for form storage/delivery

## User Guide

### Getting a Quote
1. Click "Book Now" in the nav or floating button
2. Fill out the quote form with property details
3. Murphy's will respond within 1 business day

### Contact
- **Phone/Text**: 615-603-9791
- **Web**: murphyslawnnlandscaping.com
- **Hours**: Mon–Fri 7AM–7PM, Sat 7AM–5PM

## Status
- **Build**: ✅ Production Ready
- **Last Updated**: 2026-05-22
