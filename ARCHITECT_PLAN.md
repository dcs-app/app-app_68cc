# Project: Haveli Restaurant 5

## Tech Stack

**Framework:** static-html  
**State:** none  
**Styling:** tailwind  
**Data:** none  
**Auth:** none

## Database Schema
No database — static content only.

## API Endpoints
No backend — all interactions are client-side (reservation form simulated client-side; form submission placeholder to be wired later).

## Frontend Components / Pages
- index (homepage: hero, hours, reservation CTA, menu highlights, gallery preview, testimonials)
- menu (full menu with Veg / Non‑Veg sections, price ranges, allergen labels)
- reservation (reservation form with date, time, party size — client-side validation + success toast)
- about (story, chef/heritage, trust signals)
- gallery (food & ambience images with filters)
- contact (contact details, map embed placeholder, opening hours, phone/email placeholders)

## Critical Requirements
1. Prominent, persistent "Reserve a Table" CTA on all pages linking to /reservation.html.  
2. Menu page must show categories (Veg/Non‑Veg), item names/descriptions and placeholder price ranges (e.g., ₹120–₹220) and allergen markers.  
3. Reservation form with client-side validation (required fields, date min=today, party size bounds) and accessible success feedback.  
4. Opening hours visible site-wide and a map embed placeholder on Contact page.  
5. Responsive, mobile-first layout and accessible header/footer components reused verbatim across pages.

## Complexity Rating
Medium — multi-page static site with accessible forms, image gallery and consistent header/footer system, requiring coordinated HTML/CSS and a small amount of JS for validation and UI state.