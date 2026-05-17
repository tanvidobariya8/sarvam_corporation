<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Sarvam Corporation Website Rules

## Project Goal

Build a professional, mobile-friendly lead-generation website for Sarvam Corporation.
The website should clearly explain China-to-India import services and convert visitors
through WhatsApp, phone calls, email, and quote inquiry forms.

Primary positioning:

- Simple and reliable China import solution for beginners and businesses.
- End-to-end import support from China to India.
- Trust-focused, clear, professional, and easy to understand.

## Website Structure

Expected pages or sections:

- Home
- About Us
- Services
- Import Process
- Contact / Get Quote
- Optional Import Guide for beginner education and SEO

## Design Direction

- Use a clean corporate visual style inspired by the provided reference image.
- Preferred colors: white, deep blue, light blue, and subtle neutral backgrounds.
- Avoid decorative clutter. The site should feel trustworthy, clear, and business-focused.
- Use strong call-to-action buttons for WhatsApp, Call, Email, and Get Quote.
- Make the first screen communicate the business immediately: import from China to India.
- Keep spacing, typography, and alignment polished on both mobile and desktop.

## Tailwind CSS Rules

- Use Tailwind CSS for styling.
- Prefer clear utility class composition over custom CSS unless a repeated pattern needs a reusable class.
- Keep responsive design first-class with mobile, tablet, and desktop breakpoints.
- Use consistent spacing, font sizes, colors, border radius, and shadows across sections.
- Do not duplicate long class strings when a reusable component can keep the code cleaner.

## Component Rules

- Build reusable components for repeated UI patterns:
  - Header / navigation
  - Footer
  - CTA buttons
  - Service cards
  - Process steps
  - Contact cards
  - Section headings
  - Stats / trust cards
- Keep components small, readable, and named by business purpose.
- Keep page files focused on structure and content, not low-level repeated markup.
- Store repeated content in arrays or config objects when it improves clarity.

## Icon Package

Recommended package: `lucide-react`.

Use it for common website icons such as:

- Phone
- Mail
- MessageCircle / WhatsApp-style contact action
- Ship
- Plane
- Package
- ShieldCheck
- Truck
- MapPin
- Users

If icons are needed and `lucide-react` is not installed, install it before use.

## Code Quality

- Write clean, readable, maintainable code.
- Use clear variable, component, and data names.
- Prefer TypeScript-friendly patterns where possible.
- Avoid hard-coded repeated content inside multiple places.
- Keep contact information and service lists easy to update.
- Do not add unnecessary libraries.
- Do not leave unused imports, dead code, or placeholder text in finished work.

## Comments

- Add comments only when they make the code easier to maintain.
- Do not comment obvious JSX or simple Tailwind classes.
- Good comments explain purpose, business logic, or why a pattern exists.
- Avoid noisy comments such as "render button" or "main div".

## Content Tone

- Keep copy simple, professional, and beginner-friendly.
- Use clear phrases like:
  - Import from China made easy
  - Door-to-door import support
  - Air and sea cargo solutions
  - Customs clearance support
  - Safe, reliable, and transparent process
- Avoid overpromising. Keep claims credible and trust-building.
