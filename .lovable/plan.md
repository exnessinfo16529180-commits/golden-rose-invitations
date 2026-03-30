
# Kazakh 75th Anniversary Invitation Website

## Overview
An elegant, cinematic invitation website for Гүлсара's 75th birthday celebration, featuring a full-screen video intro that transitions to a rich, scroll-driven invitation experience.

## Hero Sequence (Full Viewport)
- **Phase 1 — Video Intro (0-8s):** Full-screen muted video of grandmother on golden throne with dark overlay, no UI elements
- **Phase 2 — Static Transition:** Video crossfades to the uploaded portrait image with subtle zoom-out animation (1.1→1.0 scale). Staggered text reveals: "Аяулы анамыз", "Гүлсара" (script font), "75 жыл мерейтой". Bouncing scroll indicator appears
- **Phase 3 — Scroll Unlock:** Page content reveals only after user scrolls

## Scrollable Sections

### Countdown Timer
- Countdown to May 14, 2026 at 18:00 with gold-styled numbers and Kazakh labels (күн, сағат, минут, секунд)
- Ornamental dividers

### Invitation Text
- Elegant typography mixing Playfair Display and Great Vibes script for "Гүлсара"
- Full Kazakh invitation message with family attribution

### Event Details
- Date, time, venue info with icons
- "Маршрутты көру" button linking to 2GIS

### RSVP Form
- Name, guest count (1-10), phone (+7 mask) fields
- Radio toggle: "Келемін ✦" / "Бара алмаймын ✧"
- Submit with success toast notification

## Visual Effects
- Floating rose petals (CSS animated)
- Gold shimmer on timer numbers
- Paper texture overlay
- Parallax on hero image during scroll
- Scroll-triggered fade-up animations via Intersection Observer
- Framer Motion for all transitions

## Design
- Color palette: dark (#1a0f0a) hero transitioning to cream (#FDF8F0), gold (#D4AF37), red (#C41E3A), brown text (#2C1810)
- Fonts: Playfair Display + Great Vibes
- Mobile-responsive with video poster fallback

## Assets
- Video file and portrait image from user uploads will be used as hero media
