# Accessibility Audit

## Summary
- Total pages audited: 1
- Critical issues: 0
- Major issues: 2
- Minor issues: 0

## Findings by page

### /index.html
- **MAJOR** [WCAG 2.4.1 Skip Link] No skip‑to‑content link is present as the first focusable element. Add a hidden link (e.g., `<a href="#main" class="skip-link">Skip to main content</a>`) before any other content.
- **MAJOR** [WCAG 1.3.1 Semantic Structure] No `<main>` landmark is detected. Wrap the primary page content in a `<main id="main">` element to provide a clear region for screen‑reader navigation.
- **MINOR** [WCAG 2.4.3 Focus Order] The navigation markup is not visible in the excerpt, but ensure that the tab order follows the visual order and that focus indicators are not removed without a visible replacement.
- **MINOR** [WCAG 2.1.1 Keyboard] Verify that any interactive components (e.g., menu filters, CTA buttons) are reachable via keyboard and have appropriate ARIA labels (`aria-label` or `aria-labelledby`) where the visible text does not fully describe the control.

## Recommendations summary

| WCAG criterion | Count | Recommended action |
|---|---|---|
| 2.4.1 Skip Link | 1 | Insert a skip‑to‑content link as the first focusable element in `<body>`. |
| 1.3.1 Semantic Structure | 1 | Add a `<main id="main">` wrapper around the primary content. |
| 2.4.3 Focus Order | 1 | Review tab order to match visual layout; ensure visible focus indicators. |
| 2.1.1 Keyboard | 1 | Ensure all interactive elements are keyboard accessible and properly labeled with ARIA. |