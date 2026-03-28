# Design System Strategy: The Methodical Flow

## 1. Overview & Creative North Star: "The Digital Sanctuary"
The goal of this design system is to move task management away from the "cluttered list" trope and toward an editorial, calm experience. We are building a **Digital Sanctuary**. 

Instead of overwhelming the user with rigid grids and harsh borders, we utilize **Organic Asymmetry** and **Tonal Depth**. The system feels like high-end stationery—intentional, premium, and breathable. By prioritizing soft surfaces over structural lines, we create an environment where focus is a natural byproduct of the UI, not a struggle against it. This system celebrates the bilingual harmony between Plus Jakarta Sans (English) and Cairo (Arabic), ensuring a unified typographic soul across all regions.

---

## 2. Color & Atmospheric Surface Rules
We reject the "boxed-in" look. Our palette utilizes Material Design tokens but applies them through a high-end editorial lens.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section off the UI. 
Boundaries are defined strictly through background color shifts. For example, a `surface-container-low` task detail pane should sit on a `surface` main background. The change in tone is the boundary.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical, stacked layers. 
- **Base Layer:** `surface` (#f8f9fa) – The canvas.
- **Sectioning:** `surface-container-low` (#f3f4f5) – Used for sidebar or background groupings.
- **Interactive Cards:** `surface-container-lowest` (#ffffff) – Use this for the task cards themselves to provide a "lifted" feel against the background.
- **Active States:** `surface-bright` (#f8f9fa) – For highlighting currently selected items.

### Signature Textures & Soul
To prevent the UI from feeling "flat," use **Linear Gradients** for primary actions. Instead of a flat `primary` (#00488d), use a subtle vertical gradient from `primary` to `primary_container` (#005fb8). This adds a "jewel-like" depth to buttons and progress bars.

---

## 3. Typography: Editorial Authority
The type scale is designed for high readability in both English and Arabic, utilizing a dramatic contrast between Display and Body sizes to create a clear narrative hierarchy.

- **The Display Scale (Plus Jakarta Sans / Cairo Bold):** Use `display-lg` (3.5rem) for "Good Morning" or empty state greetings. These should feel like magazine headlines—large, confident, and spacious.
- **The Body Scale (Inter / Cairo):** Use `body-md` (0.875rem) for task descriptions. 
- **Bilingual Harmony:** When rendering Arabic, increase the `lineHeight` by 1.2x compared to English to accommodate the taller ascenders and descenders of the Cairo typeface, ensuring the " Sanctuary" feel remains consistent.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are often a crutch for poor layout. In this system, depth is earned through tone.

- **The Layering Principle:** Place a `surface-container-lowest` card (Pure White) on a `surface-container` (#edeeef) background. The contrast alone provides enough "elevation" for the human eye to perceive hierarchy.
- **Ambient Shadows:** For floating elements like Modals or Floating Action Buttons (FABs), use a shadow with a blur radius of `24px` and an opacity of `4%`. The shadow color must be a tinted version of `on-surface` (#191c1d) to mimic natural light.
- **Glassmorphism:** For top navigation bars or category filters, use a semi-transparent `surface` color with a `backdrop-blur` of `12px`. This allows the "Home" (Orange/Green) or "Work" (Blue) task colors to bleed through as the user scrolls, creating a sophisticated sense of place.

---

## 5. Component Guidelines

### Buttons (The "Jewel" Approach)
- **Primary:** Gradient from `primary` to `primary_container`. Corner radius: `md` (0.75rem). No border.
- **Secondary (Home Tasks):** Use `secondary_container` (#fc8f34) with `on_secondary_container` text. This provides the "Warm Orange" warmth requested without being jarring.
- **Tertiary (Home/Wellness):** Use `tertiary_container` (#006f38) for green-themed home tasks (e.g., gardening, health).

### Task Cards & Lists
- **Rule:** Forbid the use of divider lines.
- **Implementation:** Separate tasks using the `spacing-4` (1rem) gap. If a group of tasks needs to feel unified, place them on a shared `surface-container-low` "plate."
- **Categories:** Use `tertiary_fixed` (#7efba4) for subtle category pills behind icons.

### Input Fields
- **Style:** Use "Ghost Inputs." No bottom line, no border. Just a subtle `surface-container-high` (#e7e8e9) background that expands slightly on focus.
- **Corners:** Always `md` (0.75rem).

### Checkboxes
- **Interaction:** On "Check," the card background should transition from `surface-container-lowest` to a 10% opacity version of the task's category color (Blue/Orange/Green).

---

## 6. Do’s and Don’ts

### Do
- **Do** use whitespace as a structural element. If a section feels crowded, increase spacing to `spacing-8` (2rem) before adding a line.
- **Do** align Arabic text to the right (RTL) and ensure the icons are mirrored where directionality matters (e.g., "back" arrows).
- **Do** use `secondary_fixed` (#ffdcc5) for soft backgrounds on "Home" task categories to maintain the "Warm" aesthetic.

### Don’t
- **Don’t** use 100% black text. Always use `on_surface` (#191c1d) to keep the contrast high but the feel "soft."
- **Don’t** use sharp corners. Everything in this sanctuary is rounded (minimum `sm` 0.25rem, standard `md` 0.75rem).
- **Don’t** use "Alert Red" for everything. Use `error` (#ba1a1a) sparingly; for overdue tasks, consider a subtle `secondary` orange to maintain the "Sanctuary" vibe rather than inducing panic.