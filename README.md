# Aunty's Orchard PG — Landing Page

A responsive, single-page website for a paying-guest accommodation in Roorkee, Uttarakhand.
Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS** and **Lucide icons**. No backend needed.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start   # optional: preview the production build
```

## Where to edit things

| What | Where |
| --- | --- |
| Phone, WhatsApp, email, address, Google Maps links, social links | `src/config/site.ts` |
| Room names, captions and photos | `src/data/gallery.ts` |
| FAQs | `src/data/faq.ts` |
| Facilities and amenities | `src/data/amenities.ts` |
| Resident reviews | `src/data/testimonials.ts` |
| Colours | `tailwind.config.ts` |
| Page title and description (SEO) | `src/app/layout.tsx` |

### Contact details
Open `src/config/site.ts` and replace each value marked `PLACEHOLDER`:

- `phone` — with country code, e.g. `+919876543210`
- `whatsapp` — digits only, e.g. `919876543210`
- `email`, `address`
- `mapsUrl` — a Google Maps share link (used by "Get Directions")
- `mapsEmbedUrl` — the `src` from Google Maps → Share → Embed a map (shows a live map)
- `url` — your live website address

### Photos
The images in `public/images/` are **placeholder illustrations, not photos of the property**, and are labelled as such on the page.

1. Save your real photos using the same file names, or add new files and update `src` in `src/data/gallery.ts`
   (`hero-pg`, `double-room`, `triple-room`, `study-area`, `dining-area`, `common-area`, `outdoor`).
   JPG/WebP are recommended; if you switch from `.svg` to `.jpg`, update the extension in `gallery.ts`.
2. Set `isPlaceholder: false` for each replaced item so the "Placeholder image" badge disappears.
3. Update the `alt` text to describe the real photo.

### Reviews
`src/data/testimonials.ts` ships with clearly labelled placeholders. Replace them with **genuine** resident reviews
(with permission) and set `isPlaceholder: false`. If you have none yet, set `showTestimonials = false` to hide the section.

### Inquiry form
By default, submitting the form validates the fields and opens WhatsApp with a pre-filled message to your configured number.
To send inquiries to a form service instead (Formspree, Web3Forms), set the environment variable
`NEXT_PUBLIC_FORM_ENDPOINT` to the service's form URL in your hosting dashboard. Do not put secret keys in the code.

### Structured data (local SEO)
`LocalBusiness` JSON-LD is switched off until real details are filled in. After updating `src/config/site.ts`, set
`enableStructuredData: true`. Do not add ratings, prices or coordinates unless they are real.

## Free deployment (Vercel)

1. Create a GitHub repository (e.g. `auntys-orchard-pg`) and push this project:
   ```bash
   git init
   git add .
   git commit -m "Initial Aunty's Orchard PG landing page"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPOSITORY_URL
   git push -u origin main
   ```
2. Go to Vercel and sign in with GitHub.
3. Choose **Add New Project** and import the repository.
4. Leave the default settings (Next.js is detected automatically) and click **Deploy**.

Every push to `main` redeploys automatically. Netlify and Cloudflare Pages also work with `npm run build`.

## Before public launch

- [ ] Real phone number
- [ ] Real WhatsApp number
- [ ] Correct email
- [ ] Full property address
- [ ] Google Maps location
- [ ] Actual property photos
- [ ] Confirm whether the PG is girls-only, boys-only, or open to all eligible residents
- [ ] Current room availability
- [ ] Meal-plan details
- [ ] Genuine resident reviews (or hide the section)
- [ ] House rules / visitor policy
- [ ] Any pricing you choose to display
