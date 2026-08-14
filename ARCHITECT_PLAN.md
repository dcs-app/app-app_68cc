# Project: Haveli Restaurant 5

## Tech Stack

**Framework:** static-html  
**State:** none  
**Styling:** vanilla-css  
**Data:** none  
**Auth:** none

## Database Schema
No database — static content only.

## API Endpoints
No backend — all forms handled with client-side validation and progressive enhancement. Reservation form will POST to a placeholder action (or be wired to a booking endpoint later by devops).

## Frontend Components / Pages
Pages to produce:
- index (homepage with hero, opening hours, featured menu highlights, reservation CTA)
- menu (veg & non-veg sections, price ranges, allergen labels)
- reservation (reservation form: date, time, party size; client-side validation; success toast)
- about (story, chef/heritage, hygiene/trust signals)
- gallery (food & ambiance gallery with lazy-loading placeholders)
- contact (map embed placeholder, hours, address, phone/email placeholders)

Canonical header and footer are shared across all pages (copied verbatim from BUILD_MANIFEST.json).

## Critical Requirements
1. Persistent "Reserve a Table" CTA accessible across the site and linking to /reservation.html.  
2. Reservation form with client-side validation, min-date set to today, and accessible success message.  
3. Menu page separated into Veg / Non‑Veg with placeholder price ranges (e.g., ₹120–₹420), dietary/allergen labels, and "Call to confirm" delivery/availability note.  
4. Contact page must include a map embed placeholder and consistent NAP (Name, Address, Phone) placeholders.  
5. Mobile-first responsive layout, good contrast and accessible ARIA attributes on forms and navigation.

## Complexity Rating
Simple — static multi-page restaurant site with form validation and image/gallery placeholders.