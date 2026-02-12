# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ClickRick is a single-page marketing website for an AI consulting agency based in Mexico. Built with Next.js 16, TypeScript, Tailwind CSS 4, and Framer Motion. The entire UI is in Spanish (lang="es").

## Commands

- `npm run dev` — Start dev server (localhost:3000)
- `npm run build` — Production build
- `npm run start` — Serve production build
- `npm run lint` — Run ESLint (Next.js core web vitals + TypeScript rules)

No test framework is configured.

## Architecture

**Single-page composition pattern:** `src/app/page.tsx` composes all section components in order. Each section is a standalone component in `src/components/sections/`.

**Content is separated from presentation:** All static data (services, testimonials, case studies, stats, navigation links) lives in `src/lib/constants.ts`. Section components import and render this data.

**Animation system:** Reusable Framer Motion variants are defined in `src/lib/animations.ts` (fadeInUp, scaleIn, staggerContainer, slideInLeft/Right). Sections use `whileInView` with `viewport={{ once: true }}` for scroll-triggered animations.

**Key directories:**
- `src/components/sections/` — Page sections (Hero, Services, About, CaseStudies, Testimonials, CTA, ClientLogos)
- `src/components/ui/` — Reusable UI primitives (Button, Card, GradientText, AnimatedCounter, NeuralCanvas, CursorGlow, SectionHeading)
- `src/components/layout/` — Navbar and Footer
- `src/hooks/` — Custom hooks (useScrollPosition)
- `src/lib/` — Constants and animation variants

**Styling:** Tailwind CSS 4 with custom theme variables defined in `src/app/globals.css` using `:theme` block. Color palette uses warm orange/coral brand colors on a dark background. Glass morphism (`.glass-card`) and gradient effects are used extensively.

**Component patterns:**
- Button is polymorphic — renders `<a>` when `href` is provided, `<button>` otherwise
- NeuralCanvas is a mouse-responsive `<canvas>` element rendering animated nodes/connections
- All interactive components use `"use client"` directive

## Path Alias

`@/*` maps to `./src/*` (configured in tsconfig.json).

## Fonts

Google Fonts loaded via `next/font`: Manrope (body) and Syne (headings).
