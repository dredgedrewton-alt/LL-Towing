# LL Towing & Auto Repair — Client & Developer Handover Guide

This operational manual documents how to maintain, update, configure, and redeploy the **LL Towing & Auto Repair** production website.

---

## 1. Central Business Configuration

All foundational business information is centralized in a single configuration file:
**`/lib/config/business.ts`**

### Editing Telephone & SMS Numbers
To update the dispatch telephone or SMS link across the entire website (header, mobile sticky bar, all 18 service pages, footer, metadata, and Schema.org structured data):
1. Open `/lib/config/business.ts`.
2. Update the `contact.phone` object:
   ```typescript
   phone: {
     raw: '+12404248226',           // E.164 format for telephone dialers
     display: '(240) 424-8226',      // Human-readable format for UI
     telHref: 'tel:+12404248226',    // Dialing URI
     smsHref: 'sms:+12404248226',    // SMS URI
   }
   ```
3. Commit and rebuild. Every telephone CTA automatically updates.

### Updating Business Hours
In `/lib/config/business.ts`:
- **Towing & Roadside**: Set to `is24Hours: true` (continuous 24/7/365 on-call response).
- **Auto Repair Workshop**: Update `autoRepairFacility.tentativeSchedule` when physical mechanical bays finalize public walk-in hours.

### Updating Physical Facility Addresses
When client ownership verifies the exact commercial suite/bay address for public walk-in visits:
1. Open `/lib/config/business.ts`.
2. Change `addresses.verifiedPublishedAddress` from `null` to:
   ```typescript
   verifiedPublishedAddress: '10200 Baltimore Ave, Beltsville, MD 20705',
   ```
3. The `BusinessLocationCard` and footer will automatically render the confirmed street address and Google Maps directions slot without manual template rewrites.

---

## 2. Managing Service Pages & Content

The website utilizes a data-driven service architecture:
**`/lib/content/servicePagesData.ts`** and **`/lib/content/services.ts`**

### Adding or Updating a Service:
Each service defines a typed `ServicePageData` structure:
- `title`: Display name (e.g. *Flatbed Towing*)
- `heroHeadline`: Conversion-focused title (e.g. *Damage-Free Flatbed Towing Across MD, DC, and VA*)
- `serviceSummary`: Clear explanation of capability and equipment
- `commonSituations`: Array of customer scenarios (all-wheel-drive sedans, low-clearance vehicles)
- `customerActionSteps`: Clear instructions for stranded motorists
- `processSteps`: 3-step procedural breakdown
- `trustPoints`: Evidence-based reliability bullet points
- `faqs`: Question and answer pairs rendered with accessible accordions

To edit any service's text, update the entry in `/lib/content/servicePagesData.ts`. The corresponding route and its Schema.org `Service` and `BreadcrumbList` structured data update automatically.

---

## 3. Managing Operational Photography & Media

All image slots are indexed in the centralized Media Asset Registry:
**`/lib/config/media.ts`**

### Uploading a Real Client Photograph:
1. Place the optimized JPG, PNG, or WebP image in `/public/images/` (e.g. `/public/images/hero-flatbed.jpg`).
2. Open `/lib/config/media.ts`.
3. Locate the slot ID (e.g. `heroTowingFleet`, `flatbedTowing`, `autoRepairFacility`).
4. Update the slot:
   ```typescript
   currentSrc: '/images/hero-flatbed.jpg',
   isClientUploaded: true,
   alt: 'LL Towing modern hydraulic flatbed rollback truck staged for highway dispatch',
   ```
5. If `currentSrc` is `null`, the component automatically renders an accessible, high-contrast, domain-authentic industrial placeholder with category icon and aspect-ratio indicators.

---

## 4. Customer Reviews & Testimonials

Customer reviews are maintained in:
**`/lib/content/reviews.ts`**

- Reviews reflect verified customer experiences across towing speed, upfront pricing, operator professionalism, and vehicle care.
- To add a new review, append an object with `author`, `location`, `rating`, `serviceReceived`, `reviewDate`, and `testimonialText`.
- Note: Per Google Search Central guidelines, first-party customer testimonials are not marked up with review rich snippet schema to avoid non-compliance penalties.

---

## 5. Lead Ingestion & Form Delivery Pipeline

Form submissions from `/components/forms/` (`QuoteRequestForm`, `GeneralContactForm`, `CommercialInquiryForm`) are validated server-side by:
**`/app/api/leads/route.ts`** and **`/lib/server/leadDelivery.ts`**

### Supported Lead Providers:
Configure in your environment variables (`.env`):

| `LEAD_DELIVERY_PROVIDER` | Functionality |
| :--- | :--- |
| `resend` | Dispatches transactional email via Resend API to `DISPATCH_NOTIFICATION_EMAIL`. |
| `webhook` | Posts a secure JSON payload to your dispatch CRM or Zapier webhook via `DISPATCH_WEBHOOK_URL`. |
| `mock_verified` | Development and staging verification queue returning confirmed reference IDs. |
| `none` (or unset) | Blocks silent loss of leads; displays an explicit advisory directing motorists to call `(240) 424-8226`. |

### Security Safeguards Built-In:
- **Anti-Spam Honeypot**: Hidden `honeypot` field catches automated bot submissions and returns HTTP 400.
- **Sliding-Window Rate Limiting**: Restricts submissions to 5 requests per 10 minutes per IP address (HTTP 429).
- **Zero Payment Data**: No credit card or CVV details are ever collected or stored on the server.

---

## 6. Google Analytics 4 (GA4) & Tracking

Analytics logic is isolated in:
**`/lib/analytics.ts`** and **`/components/analytics/GoogleAnalytics.tsx`**

- Set `NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"` in `.env`.
- If unset, **zero third-party network scripts** are loaded, preserving user privacy and 100% performance scores.
- Standardized conversion events tracked:
  - `click_to_call`
  - `quote_form_start`
  - `generate_lead`
  - `contact_form_submit`
  - `commercial_enquiry_submit`
  - `directions_click`
- Deduplication prevents accidental double-counting on multiple clicks.
- Strict PII redaction ensures names, phone numbers, and pickup locations are never transmitted.

---

## 7. Deployment Instructions (Google Cloud Run / AI Studio)

The Next.js 15 App Router codebase is configured with `output: 'standalone'` in `next.config.ts`.

### Local Build & Test:
```bash
# Validate TypeScript and build all 28 static pages
npm run build

# Start production server locally on port 3000
npm run start
```

### Deploying to Google Cloud Run:
1. AI Studio automatically deploys from the main branch to Google Cloud Run.
2. In Google Cloud Console or the AI Studio Secrets panel, configure:
   - `APP_URL`: Your custom domain (e.g. `https://www.lltowingautorepair.com`).
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Your Google Analytics 4 stream ID.
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`: Your Google Search Console HTML tag token.
   - `LEAD_DELIVERY_PROVIDER`: `resend` or `webhook`.
   - `RESEND_API_KEY` and `DISPATCH_NOTIFICATION_EMAIL`.

---

## 8. Troubleshooting Common Issues

1. **Build fails with missing route**:
   Ensure any newly added route is registered in `/app/sitemap.ts` and exports valid Next.js Metadata.
2. **Form displays "Online form delivery is awaiting setup"**:
   Check `.env` to verify `LEAD_DELIVERY_PROVIDER` is set to `resend`, `webhook`, or `mock_verified`.
3. **Telephone links on mobile trigger Skype or FaceTime instead of dialer**:
   All links use standard `tel:+12404248226` without spaces. Device OS preferences govern default dialer behavior.
