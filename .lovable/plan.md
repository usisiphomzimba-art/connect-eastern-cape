# Autism Connect Eastern Cape — Build Plan

A modern, accessible directory web app helping families find autism schools and support services across the Eastern Cape, South Africa.

## Design System

- **Palette** (applied as oklch tokens in `src/styles.css`):
  - Primary Blue `#2E86DE`, Light Blue `#AED6F1`, Green accent `#58D68D`, White, Light Gray `#F4F6F6`
- Rounded cards (`rounded-2xl`), soft shadows, smooth hover transitions
- Calming healthcare aesthetic — generous whitespace, readable typography (Inter)
- Full a11y: semantic HTML, alt text, keyboard nav, AA contrast, large tap targets

## Routes (TanStack Router, file-based)

```
src/routes/
  __root.tsx          → shared Nav + Footer, <Outlet/>
  index.tsx           → Home (hero, search, featured schools, emergency, quick cards)
  schools.index.tsx   → Schools directory with filters
  schools.$id.tsx     → School detail (info, map, docs checklist, admission, PDF download)
  activities.tsx      → Child activities grid
  psychologists.tsx   → Psychologists directory
  clinics.tsx         → Emergency clinics + emergency contacts section
  volunteer.tsx       → Volunteer application form
  contact.tsx         → Contact form
```

Each route gets its own `head()` metadata (title, description, og tags).

## Components

- `components/layout/` — `Navbar` (with mobile hamburger via shadcn Sheet), `Footer`
- `components/home/` — `Hero`, `SearchBar`, `QuickAccessGrid`, `FeaturedSchools`, `EmergencyBanner`
- `components/schools/` — `SchoolCard`, `SchoolFilters`, `DocumentsChecklist`, `AdmissionInfo`, `MapEmbed`
- `components/activities/` — `ActivityCard`
- `components/people/` — `PsychologistCard`, `ClinicCard`, `EmergencyContactCard` (with `tel:` Call Now button)
- `components/forms/` — `VolunteerForm`, `ContactForm` (react-hook-form + zod validation)
- Reuse existing shadcn primitives (Card, Button, Input, Select, Sheet, Dialog, Form)

## Data

Static placeholder data in `src/data/`:
- `schools.ts` — ~8 schools across EC districts (Nelson Mandela Bay, Buffalo City, OR Tambo, Amathole, Chris Hani, Sarah Baartman, Joe Gqabi, Alfred Nzo) with full detail fields
- `psychologists.ts` — ~6 entries
- `clinics.ts` — ~6 entries
- `activities.ts` — 12 activities (Speech, OT, Music, Swimming, Art, Computer, Gardening, Sensory, Horse Riding, Sports, Dance, Life Skills)
- `emergencyContacts.ts` — Ambulance 10177, Police 10111, Fire, Childline 116, SADAG mental health

TypeScript interfaces for each entity in `src/types/`.

## Key Features

- **Search & filter**: client-side filtering on schools (district, town, age range, gender) and psychologists (town/district); debounced search input
- **Maps**: embedded Google Maps via plain `<iframe>` with query URL (no API key needed) on school/clinic detail
- **PDF checklist download**: generated client-side via `jspdf` for required application documents
- **Forms**: zod schemas, validation messages, success toast via existing `sonner`; no backend — submissions show confirmation only (placeholder)
- **Emergency Call buttons**: native `tel:` links, large 44×44+ tap targets

## Technical Notes

- React 19 + TanStack Start (existing template), TypeScript strict, Tailwind v4
- Add deps: `jspdf` (PDF), `react-hook-form` + `@hookform/resolvers` + `zod` (forms)
- All colors via semantic tokens — no hardcoded hex in components
- No backend / Lovable Cloud needed; volunteer & contact forms are placeholders with client-side validation only (can be wired to Cloud later)
- Replace placeholder `src/routes/index.tsx`

## Out of Scope (placeholders only)

- Real submission backend for volunteer/contact forms
- Real "Apply" workflow on school detail
- School logos (initials avatars used as placeholders)

Ready to build on approval.