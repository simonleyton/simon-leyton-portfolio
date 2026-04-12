# Page Topology

## Sections (top to bottom)

1. **Navigation** — Fixed/sticky glassmorphism pill nav with backdrop-blur. Links: Work, About, Contact. Active state changes on scroll via IntersectionObserver.
2. **Hero** — Heading "Fractional Design Partner for Early-Stage Teams" + horizontal scroll carousel of featured projects
3. **About** — Photo + bio text + capabilities pills + CTA link
4. **Approach** — 6 numbered approach items in 2-column grid
5. **Clients** — Infinite marquee of client logos
6. **Testimonials** — "In their words" heading + horizontal snap-scroll carousel with dot pagination
7. **Contact** — Chat-style FAQ component (OUT OF SCOPE per TARGET.md)
8. **Footer** — Copyright + social links

## Layout
- Single column, full-width sections
- Horizontal scroll carousels for work + testimonials
- Nav is fixed overlay with z-index above all content
- No sidebar layout
- Responsive: mobile-first with tablet (768px) and desktop (1024px) breakpoints
