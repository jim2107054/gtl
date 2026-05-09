# JTI Corporate Website — Technical Specification

## Dependencies

### Production

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.0 | UI framework |
| react-dom | ^19.0 | DOM renderer |
| react-router-dom | ^7.0 | Client-side routing (15 pages) |
| gsap | ^3.12 | Core animation engine, timelines, tweens |
| @gsap/react | ^2.1 | useGSAP hook for safe React integration |
| lenis | ^1.2 | Smooth scroll with inertia |
| swiper | ^11.0 | Carousels (testimonials, related products, explore cards) |
| react-countup | ^6.5 | Animated number counters (stats, facts) |
| three | ^0.172 | 360° VR sphere rendering (Factory Tour) |
| @react-three/fiber | ^9.0 | React renderer for Three.js |
| @react-three/drei | ^9.0 | 360° texture loader, OrbitControls for VR viewer |
| lucide-react | ^0.468 | Icons (navigation, UI, process steps) |
| react-hook-form | ^7.54 | Form state management (Contact, Careers) |
| @hookform/resolvers | ^3.9 | Validation resolver bridge |
| zod | ^3.24 | Schema validation for forms |
| @googlemaps/js-api-loader | ^1.16 | Google Maps embed (Contact page) |

### Development

| Package | Version | Purpose |
|---------|---------|---------|
| vite | ^6.0 | Build tool |
| @vitejs/plugin-react | ^4.3 | React fast refresh |
| tailwindcss | ^4.0 | Utility-first CSS |
| @tailwindcss/vite | ^4.0 | Tailwind Vite integration |
| typescript | ^5.7 | Type checking |
| @types/react | ^19.0 | React type definitions |
| @types/react-dom | ^19.0 | ReactDOM type definitions |
| @types/three | ^0.172 | Three.js type definitions |

---

## Component Inventory

### Layout (shared across all pages)

| Component | Source | Notes |
|-----------|--------|-------|
| Header | Custom | Sticky, transparent→solid transition, mega-dropdown menus, mobile hamburger overlay |
| Footer | Custom | 5-column link grid, dark theme, green-mode toggle |
| PageTransition | Custom | Wraps route outlet, GSAP fade out/in on navigation |
| ScrollToTop | Custom | Resets scroll position on route change |

### Reusable Components

| Component | Source | Used By |
|-----------|--------|---------|
| SectionHeading | Custom | Nearly every section — eyebrow + heading + description pattern |
| AnimatedCounter | react-countup | Home (Impact), About (Key Facts) |
| ScrollReveal | Custom (GSAP) | All pages — wraps elements with fade-up/scale-in entrance animations |
| FeatureCard | Custom | Home (concerns), Products (categories), DIET (benefits), Careers (benefits) |
| ImageCard | Custom | Home (brands preview), Products (sub-categories), History (milestones) |
| BrandCard | Custom | Our Brands — logo container with popup trigger |
| ProcessStep | Custom | DIET Details, Testing Details, Production Process — numbered circle + connector + content |
| SpecsTable | Custom | Product Detail, DIET Details, Testing Details — alternating row table |
| ProductQueryCTA | Custom | Products, Product Detail, DIET Details, Testing Details, Production Process — dark banner CTA |
| QueryForm | Custom | Contact — full form with product selector conditional field |
| Breadcrumb | Custom | All sub-pages |
| Modal | Custom | Our Brands (brand detail popup) |
| TimelineNode | Custom | History — alternating left/right milestone card with dot connector |

### Page Sections (unique, not extracted)

The following are complex, page-specific compositions that are not reused elsewhere and will be built as local components within their respective page directories:

- **Home**: HeroVideo, ImpactStats, WhoWeAre, CapacityMap, BrandsPreview, ConcernsPreview, ExploreSection, CareersCTA
- **Products**: ProductsHero, CategoryGrid, TechSpecLinks
- **Product Detail**: ProductHero, ProductOverview, SubCategoryGrid, KeyFeatures, RelatedProductsCarousel
- **Our Brands**: BrandsHero, BrandIntro, BrandCategoryGrid, BrandDetailPopup, IngredientInfo
- **Our Concerns**: ConcernsHero, ConcernsGrid
- **DIET Details**: DIETHero, WhatIsDIET, DIETProcess, DIETBenefits, DIETSpecs
- **Testing Details**: TestingHero, TestingOverview, TestingCategoryGrid, TestingProcess, Certifications
- **Production Process**: ProcessHero, JobFlowDiagram, ManufacturingStep (×8), TraceabilityBanner, DIETDeepDive, TestingDeepDive
- **Factory Tour**: VRHero, VRViewer, HotspotMarker, ViewerControls, AreaSelector, TourInfo, DeviceCompatibility
- **About Us**: AboutHero, Philosophy, CoreValuesGrid, MissionBanner, KeyFacts, LeadershipCTA
- **History**: HistoryHero, InteractiveTimeline, LegacyStatement
- **Leadership**: LeadershipHero, ExecutiveGrid, BoardList
- **Careers**: CareersHero, JobSearchBar, JobFilters, JobListing (expandable), ResumeUpload, WhyJTIGrid, TestimonialCarousel
- **Contact**: ContactHero, ContactForm, OfficeInfo, CareersCTA

---

## Animation Implementation

| Animation | Library | Approach | Complexity |
|-----------|---------|----------|------------|
| Smooth scroll | Lenis | Global instance in App.tsx, integrated with GSAP ScrollTrigger | Low |
| Scroll-triggered reveals (fade-up, scale-in, fade-in) | GSAP + ScrollTrigger | Reusable ScrollReveal component using IntersectionObserver threshold 0.15 | Medium |
| Staggered reveals | GSAP + ScrollTrigger | ScrollReveal with stagger parameter, max delay cap 800ms | Low |
| Hero entrance sequence | GSAP timeline | Per-page timeline with coordinated delays on mount | Medium |
| Animated counters | react-countup | Configurable component with suffix/prefix formatting, plays once | Low |
| Page transitions | GSAP | Animate outgoing page (fade 200ms), then incoming (fade 300ms) | Medium |
| Header scroll shadow | CSS + scroll listener | Toggle class at 50px scroll threshold | Low |
| Button ripple | CSS @keyframes | Radial gradient expanding from click point, 400ms | Low |
| Skeleton loading | CSS @keyframes | Shimmer gradient animation, 1.5s infinite | Low |
| Scroll indicator dot | CSS @keyframes | translateY loop, 1.5s infinite ease-in-out | Low |
| **Job flow connector drawing** | **GSAP + ScrollTrigger scrub** | **SVG path stroke-dashoffset tied to scroll progress; nodes activate as line reaches them** | **High** 🔒 |
| **Capacity map hover** | **Custom SVG + React state** | **SVG region paths with onMouseEnter/Leave, absolute-positioned tooltip follows cursor, constrained to container bounds** | **High** 🔒 |
| **Map region sequential draw** | **GSAP + ScrollTrigger** | **Individual SVG paths fade in with 30ms stagger left-to-right** | **Medium** |
| **360° VR viewer** | **Three.js + @react-three/fiber** | **Equirectangular texture on inverted sphere, OrbitControls for drag navigation, scroll-wheel FOV zoom, idle auto-rotation** | **High** 🔒 |
| **VR hotspot pulse** | **CSS @keyframes** | **Expanding ring scale+opacity loop, 2s infinite** | **Low** |
| **VR scene transition** | **GSAP** | **Fade to black 300ms → swap texture → fade in 300ms** | **Medium** |
| Timeline scroll-driven line fill | GSAP + ScrollTrigger scrub | Progress line height tied to scroll position through timeline | High 🔒 |
| Timeline node activation | GSAP + ScrollTrigger | Dot pulse triggered per node as it enters viewport | Medium |
| Explore cards slide-in | GSAP + ScrollTrigger | translateX from 60px with 120ms stagger | Low |
| Brand popup modal | Framer Motion (or GSAP) | Scale 0.95→1 + fade, 300ms ease-out | Medium |
| Job card expand/collapse | GSAP | Height 0→auto, 400ms ease | Medium |
| Process step reveal | GSAP + ScrollTrigger | Number circle scale 0→1, then content fade-up, 200ms stagger between steps | Medium |
| Testimonial carousel | Swiper | Auto-advance 6s, pagination dots, touch swipe | Low |
| Careers hero image entrance | GSAP | translateX from 40px + fade, 800ms | Low |
| Mission statement line draw | GSAP + ScrollTrigger | scaleX 0→1 on decorative lines | Low |
| File drop visual feedback | React state + CSS | Border/color change on dragenter/dragover events | Low |
| Product selector conditional show | GSAP | Height 0→auto, 300ms, triggered by inquiry type change | Low |

---

## State & Logic Plan

### 1. VR Viewer State (Factory Tour)

Three.js scene management lives outside React's render cycle. A Zustand store (or useRef + useCallback) will hold:

- `activeSceneIndex` — current factory area
- `isTransitioning` — lock during scene swaps to prevent rapid clicks
- `isAutoRotating` — paused on user interaction, resumed after 5s inactivity
- `cameraPosition` — spherical coordinates (theta, phi, FOV) for saving/restoring view

Scene textures are lazy-loaded. Only the active scene and adjacent scenes are kept in memory. The Three.js canvas is rendered via @react-three/fiber with imperative updates for camera control to avoid re-renders.

### 2. Job Flow State (Production Process)

The job flow diagram has two interacting systems:

- **Scroll-driven line fill**: GSAP ScrollTrigger with `scrub: true` controls an SVG path's `stroke-dashoffset`. This is purely animation-driven, no React state.
- **Active node tracking**: As the line fill reaches each node, that node's detail panel becomes available. The currently expanded panel is stored in React state (`expandedNodeId: string | null`). Only one panel open at a time — opening a new one closes the previous via GSAP height animation.

### 3. Capacity Map Tooltip Positioning

The map tooltip must follow the cursor but stay within the SVG container bounds. Implementation:

- Track mouse position relative to the SVG container via `onMouseMove` on the container
- Calculate tooltip position: cursorX + 16px, cursorY + 16px
- Flip logic: if `cursorX + tooltipWidth > containerWidth`, position to the left of cursor instead
- Region data is a static lookup object keyed by region ID — no API call needed

### 4. Contact Form — Conditional Product Field

The product selector select field is only visible when "Product Query" is selected as the inquiry type. This requires:

- React Hook Form's `watch("inquiryType")` to observe the select value
- A GSAP height animation (0→auto) on the product field container when condition becomes true
- Form validation schema (Zod) that makes `productInterest` conditionally required

### 5. Careers Job Search — Real-Time Filtering

Job listings are client-side filtered based on:

- Text search (matches title, department, description)
- Four dropdown filters (department, location, contract type, experience)

All filter state is local. The filter logic combines all active filters with AND logic. Results update immediately on input change with a brief fade transition on the list container. The "Showing N results" counter updates reactively.

---

## Other Key Decisions

### Routing Strategy

React Router v7 with nested route definitions. The `:slug` parameter in `/products/:slug` drives a dynamic product detail component that renders content from a static data object keyed by slug — six products, no API. Route-based code splitting is not needed given the moderate page count; all pages can be bundled together.

### 360° VR Implementation

The VR viewer uses Three.js directly (not a pre-built 360° player library) because the design requires custom hotspot overlays, scene transitions, and tight React integration. An inverted sphere geometry with an equirectangular texture and OrbitControls provides the 360° view. Six factory scenes are lazy-loaded as textures. A CSS-based fallback (static image with drag-to-pan) will be shown if WebGL is unavailable.

### Capacity Map Implementation

A custom SVG with simplified continent paths rather than a mapping library (Leaflet/Mapbox). The design calls for stylized, simplified shapes with hover fills and tooltips — a full mapping library would add unnecessary bundle weight. Region paths are hand-simplified SVG paths. The tooltip and hover effects are implemented with React state and CSS transitions.

### Factory Tour Media Assets

The design specifies six 360° panoramic scenes (3840×1920 equirectangular images). For the implementation, these will be AI-generated static panoramic images. Video scenes are optional enhancements. The viewer works identically with both image and video textures.

### i18n Architecture

All UI text strings are stored in a central translation object structured by page and section. The language switcher in the header toggles a context value. No external i18n library is used — a simple React context with a `t(key)` function suffices for the two-language (EN/FR) requirement. Product data, job listings, and timeline content also live in the translation object.
