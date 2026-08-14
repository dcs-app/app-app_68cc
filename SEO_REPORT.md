# SEO Report for **Haveli Restaurant** (Restaurant / Café)

## 1. Meta Tags – What to Add to Every Page `<head>`

| Page | Title (50‑60 chars) | Description (150‑160 chars) |
|------|--------------------|------------------------------|
| **Home** | Haveli Restaurant – Heritage Dining in Hisar | Experience classic Indian cuisine at Haveli Restaurant. Enjoy elegant ambience, seasonal veg & non‑veg dishes, and easy online reservations. |
| **Menu** | Haveli Restaurant Menu – Veg & Non‑Veg Specials | Browse our curated menu with veg and non‑veg options, price ranges (₹120‑₹420), and allergen labels. Perfect for family meals and special occasions. |
| **Reservation** | Reserve a Table at Haveli Restaurant – Online Booking | Book your table instantly with our simple reservation form. Choose date, time, and party size – confirmation in seconds. |
| **About** | About Haveli Restaurant – Our Story & Chef | Discover the heritage behind Haveli Restaurant, meet our chef, and learn about our commitment to quality and hospitality. |
| **Gallery** | Haveli Restaurant Photo Gallery – Food & Ambience | Explore high‑resolution photos of our dishes, interior décor, and special events. Visual taste of the Haveli experience. |
| **Contact** | Contact Haveli Restaurant – Address, Phone & Map | Find our location in Hisar, view opening hours, and get directions. Call or email us for any inquiries or catering requests. |

**Common meta tags (add to every page):**
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="index,follow">
<link rel="canonical" href="https://www.havelirestaurant.com/[PAGE].html">
```

## 2. Open Graph (OG) Tags – Social Sharing

Add the following OG tags to each page (replace `[PAGE]` and `[IMAGE_URL]` accordingly):

```html
<meta property="og:title" content="[PAGE TITLE] | Haveli Restaurant">
<meta property="og:description" content="[PAGE DESCRIPTION]">
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.havelirestaurant.com/[PAGE].html">
<meta property="og:image" content="[IMAGE_URL]">
<meta property="og:site_name" content="Haveli Restaurant">
```

**Suggested OG images (use placehold.co placeholders):**
- Home: `https://placehold.co/1200x630/0d0d0d/FAF8F3?text=Haveli+Restaurant+Home`
- Menu: `https://placehold.co/1200x630/0d0d0d/FAF8F3?text=Menu`
- Reservation: `https://placehold.co/1200x630/0d0d0d/FAF8F3?text=Reserve+Now`
- About: `https://placehold.co/1200x630/0d0d0d/FAF8F3?text=Our+Story`
- Gallery: `https://placehold.co/1200x630/0d0d0d/FAF8F3?text=Gallery`
- Contact: `https://placehold.co/1200x630/0d0d0d/FAF8F3?text=Contact+Us`

## 3. Twitter Card Tags

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[PAGE TITLE] | Haveli Restaurant">
<meta name="twitter:description" content="[PAGE DESCRIPTION]">
<meta name="twitter:image" content="[IMAGE_URL]">
<meta name="twitter:site" content="@HaveliRestaurant">
<meta name="twitter:creator" content="@HaveliRestaurant">
```

## 4. Structured Data (JSON‑LD)

Add a `<script type="application/ld+json">` block to **every** page containing the following schemas:

### a. Organization (Site‑wide)

```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Haveli Restaurant",
  "url": "https://www.havelirestaurant.com",
  "logo": "https://placehold.co/200x200/0d0d0d/FAF8F3?text=Haveli+Logo",
  "sameAs": [
    "https://www.facebook.com/HaveliRestaurant",
    "https://www.instagram.com/HaveliRestaurant",
    "https://twitter.com/HaveliRestaurant"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Heritage Lane",
    "addressLocality": "Hisar",
    "addressRegion": "HR",
    "postalCode": "123456",
    "addressCountry": "IN"
  },
  "telephone": "+91-12345-67890",
  "servesCuisine": ["Indian", "North Indian"],
  "priceRange": "₹120‑₹420"
}
```

### b. WebSite (Home page)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://www.havelirestaurant.com",
  "name": "Haveli Restaurant",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.havelirestaurant.com/search.html?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

### c. BreadcrumbList (All pages)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.havelirestaurant.com/index.html"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "[PAGE NAME]",
      "item": "https://www.havelirestaurant.com/[PAGE].html"
    }
  ]
}
```

### d. MenuPage (Menu page)

```json
{
  "@context": "https://schema.org",
  "@type": "Menu",
  "url": "https://www.havelirestaurant.com/menu.html",
  "hasMenuSection": [
    {
      "@type": "MenuSection",
      "name": "Vegetarian",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Paneer Butter Masala",
          "description": "Cottage cheese in a rich tomato‑cream sauce",
          "offers": {
            "@type": "Offer",
            "price": "180",
            "priceCurrency": "INR"
          }
        }
        // …add additional veg items
      ]
    },
    {
      "@type": "MenuSection",
      "name": "Non‑Vegetarian",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Chicken Tikka Masala",
          "description": "Grilled chicken in a spiced tomato‑cream sauce",
          "offers": {
            "@type": "Offer",
            "price": "250",
            "priceCurrency": "INR"
          }
        }
        // …add additional non‑veg items
      ]
    }
  ]
}
```

### e. Reservation (Reservation page)

```json
{
  "@context": "https://schema.org",
  "@type": "Reservation",
  "name": "Table reservation at Haveli Restaurant",
  "underName": {
    "@type": "Person",
    "name": "Customer Name"
  },
  "reservationFor": {
    "@type": "FoodEstablishment",
    "name": "Haveli Restaurant"
  },
  "reservationStatus": "https://schema.org/ReservationConfirmed",
  "startDate": "2026-08-20T19:00"
}
```

*(The reservation schema can be rendered dynamically with the form values.)*

## 5. Semantic HTML Recommendations

| Element | Recommendation |
|---------|----------------|
| **`<header>`** | Keep a single sticky header. Include a `<nav>` with the exact structure defined in the design spec (logo left, navigation links right, cart pill). |
| **`<main>`** | Wrap the primary page content inside `<main>` for better accessibility and SEO. |
| **Headings** | Use a proper hierarchy: `<h1>` for the page title, `<h2>` for sections (e.g., “Our Story”, “Featured Dishes”), `<h3>` for subsections. No skipping levels. |
| **`<section>`** | Group related content (e.g., “Opening Hours”, “Featured Menu”) inside `<section>` with an appropriate `aria-label`. |
| **`<article>`** | Use for blog posts or individual menu items when displayed as cards. |
| **`<footer>`** | Single footer with the centered layout defined in the final override (no columns). Include NAP, social links, and copyright. |
| **Images** | Use `<img src="https://placehold.co/...">` with descriptive `alt` text. Add `loading="lazy"` for non‑critical images. |
| **Forms** | Add `aria-label`, `required`, and proper input types (`email`, `tel`, `date`, `time`). Use `<button type="submit">` for the reservation CTA. |
| **Links** | Ensure every navigation link uses the exact `href` paths listed in the Nav Links Fix section. No placeholder `#` links. |

## 6. Performance & Core Web Vitals Tips

1. **Critical CSS** – Inline only the header‑nav CSS needed for first paint; defer the rest.
2. **Image Optimization** – Use the `placehold.co` placeholders sized appropriately (e.g., 1200×500 for hero, 400×300 for gallery thumbnails). Replace with real images later, but keep the same dimensions to avoid layout shift.
3. **Preload Key Assets** – Add `<link rel="preload" href="/css/main.css" as="style">` and `<link rel="preload" href="/js/main.js" as="script">`.
4. **Font Loading** – Use `font-display: swap;` for Playfair Display and Inter to avoid FOIT.
5. **Cache Headers** – Set long‑term caching (`Cache-Control: max-age=31536000, immutable`) for static assets.

## 7. Content Recommendations

- **Local SEO**: Add the restaurant’s address, phone, and opening hours in both visible text and schema markup. Create a Google Business Profile and embed the “Place ID” in the map placeholder when ready.
- **Blog Strategy**: Publish weekly posts targeting long‑tail keywords such as “best vegetarian dishes in Hisar”, “family‑friendly restaurants Hisar”, and “Haveli Restaurant reservation tips”.
- **FAQ Section**: Implement an FAQPage schema on the Contact page (e.g., “Do you offer vegetarian options?”, “How far in advance should I book?”).

## 8. Next Steps for the Front‑End Team

1. **Insert the meta, OG, and Twitter tags** into each HTML file’s `<head>` using the titles/descriptions above.
2. **Add the JSON‑LD scripts** (Organization, WebSite, BreadcrumbList, Menu, Reservation) to the appropriate pages.
3. **Verify heading hierarchy** and wrap main content in `<main>`.
4. **Check all navigation links** match the exact `href` values from the Nav Links Fix table.
5. **Run Lighthouse** after implementing the above to ensure LCP < 2.5 s, CLS < 0.1, and FID < 100 ms.
6. **Submit the sitemap** (`/sitemap.xml`) to Google Search Console and Bing Webmaster Tools.

--- End of Report ---