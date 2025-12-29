# Modern Portfolio Website Design Guidelines

## Design Approach
**Reference-Based**: Drawing inspiration from Behance, Dribbble, and premium creative portfolio sites. Focus on showcasing work with minimal distraction while maintaining personality.

## Core Layout Structure

**Hero Section** (70vh)
- Full-width hero with background image
- Large, bold headline overlay (name/tagline)
- Subtitle describing specialization
- Primary CTA button with blurred background
- Minimal navigation bar (transparent, fixed)

**About Section** (auto height, py-20)
- Two-column layout (60/40 split): Large text block + profile image
- Brief bio emphasizing unique value
- Skills/expertise tags display
- Secondary CTA for resume/contact

**Projects Grid** (auto height, py-24)
- Section header with filter tags (All, Web, Branding, etc.)
- Grid: 1 column mobile, 2 columns tablet (md:), 3 columns desktop (lg:)
- Each project card: Square image (1:1), title overlay on hover, category tag
- Consistent gap-6 between cards
- "Load More" button at bottom

**Contact Section**
- Heading: "CONTATO" (Large, bold, tracking-tighter, all caps)
- Alignment: Heading left, info right (on desktop)
- Info Block: Email and location at top right, social links at bottom right
- Links: Linkedin, Instagram (Title case)
- Email: All lowercase
- Background: Black with subtle top border
- Spacing: py-24 to py-32

**Footer** (py-12)
- Minimal: Copyright, additional links, social icons
- Single row, space-between alignment

## Typography System
- **Headings**: Inter or Geist font family
- **H1**: 4xl (mobile) → 6xl (desktop), font-weight: 700
- **H2**: 3xl → 5xl, font-weight: 700
- **H3**: 2xl → 3xl, font-weight: 600
- **Body**: Base → lg, font-weight: 400, line-height: relaxed
- **Tags/Labels**: sm, font-weight: 500, uppercase, tracking-wide

## Spacing System
**Tailwind units**: Primarily use 4, 6, 8, 12, 16, 20, 24
- Component internal padding: p-6 or p-8
- Section vertical spacing: py-12 (mobile), py-20/py-24 (desktop)
- Grid gaps: gap-4 (mobile), gap-6 (desktop)
- Container max-width: max-w-7xl with px-6 horizontal padding

## Component Specifications

**Quote Section**
- Text: "Após toda experiência, remanescem marcas."
- Style: Medium weight, text-2xl to text-3xl, tracking-tight
- Alignment: Right-aligned within section

**About Section**
- Layout: Two-column grid (Content/Image)
- Content: Small text block on left, "Brasil, SP" at bottom left
- Image: Square (1:1), grayscale, sharp corners
- Text: Specific updated bio about career in Branding & UI Design

**Hero Section**
- Large "João V' Nascimento" heading
- Text overlay: "Foco no desenvolvimento de empresas através de estratégia de marca e design visual."
- Social links: Linkedin, Instagram (Title case)

**Project Cards**
- Container: Aspect ratio 1:1 enforced
- Image: object-cover, full width/height
- Hover state: Dark overlay (opacity-0 → opacity-90), title/category fade in over the image
- Grid gap: 10px spacing between cards
- Number of items: Exactly 6 projects displayed

**CTA Buttons**
- On hero image: Backdrop-blur-md, semi-transparent background, bold text
- Standard buttons: Solid background, rounded corners (rounded-lg), px-8 py-3

**Filter Tags** (Projects)
- Horizontal scrollable row on mobile
- Pill-shaped buttons, space-x-3
- Active state: Different visual treatment

## Images Required

1. **Hero Background**: Wide landscape, abstract or workspace scene, high quality, subtle enough for text overlay
2. **Profile Photo**: Professional headshot, warm and approachable, square crop recommended
3. **Project Images** (9-12 suggested): Square (1:1), high-quality mockups or final deliverables, consistent editing style across all images

**Hero Image**: Yes, full-width background image in hero section

## Key Design Principles
- **Visual Hierarchy**: Projects are the star - generous whitespace, clean grid
- **Consistency**: Maintain square ratio strictly across all project images
- **Performance**: Lazy load project images below fold
- **Responsive**: Mobile-first, graceful breakpoints at md: and lg:
- **Interaction**: Subtle hover states on projects, smooth transitions (300ms)