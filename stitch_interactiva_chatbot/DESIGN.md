---
name: Modern Interactive EdTech Lab
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#464554'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#767586'
  outline-variant: '#c7c4d7'
  surface-tint: '#494bd6'
  primary: '#4648d4'
  on-primary: '#ffffff'
  primary-container: '#6063ee'
  on-primary-container: '#fffbff'
  inverse-primary: '#c0c1ff'
  secondary: '#6b38d4'
  on-secondary: '#ffffff'
  secondary-container: '#8455ef'
  on-secondary-container: '#fffbff'
  tertiary: '#006c49'
  on-tertiary: '#ffffff'
  tertiary-container: '#00885d'
  on-tertiary-container: '#000703'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
  sidebar-surface: '#0F172A'
  sidebar-surface-elevated: '#1E1B4B'
  canvas-bg: '#F8FAFC'
  card-bg: '#FFFFFF'
  border-subtle: '#E2E8F0'
  powerfx-amber: '#F59E0B'
  powerfx-emerald: '#10B981'
  powerfx-cyan: '#06B6D4'
  powerfx-violet: '#8B5CF6'
  code-inline-bg: '#EDE9FE'
  code-inline-text: '#5B21B6'
  code-block-bg: '#0B0F19'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '800'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-code-inline:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  label-code-block:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 22px
  label-badge:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
---

## Brand & Style

This design system powers an interactive, high-engagement educational laboratory tailored for students, makers, and citizen developers learning Power Apps and building conversational AI interfaces. The emotional atmosphere merges the rigor of professional developer tooling with the approachability and delight of a modern interactive learning playground.

The visual style synthesizes **Modern SaaS Architecture** with **Tactile Glass-Tinged Elevation**:
- **Structured Focus:** A dedicated midnight-slate navigation rail anchors deep concentration, separating contextual curriculum sequencing from active studio execution.
- **Vibrant Precision:** Electric violet, energetic indigo, and rich syntax accents signal immediate feedback, high interactivity, and micro-progression.
- **Visual Ergonomics:** Bright, crisp card surfaces, polished border contrasts, and dedicated mobile/desktop device simulators make abstract formula concepts tactile and directly testable.
- **Micro-Delight:** Fluid pill transitions, formula-copy instant states, interactive property inspection accordions, and celebratory completion stamps motivate step-by-step progress without cognitive friction.

## Colors

The palette establishes high chromatic hierarchy: deep midnight tones anchor macro navigation, balanced neutral surfaces eliminate reading fatigue during long learning sessions, and vivid violet-indigo accents draw focus to interactive hot zones and code actions.

### Role Assignments
- **Primary (`#6366F1`) & Secondary (`#8B5CF6`):** Drive interactive states, progress fill meters, primary step buttons, active tabs, and formula highlight markers.
- **Sidebar & Structural Neutral (`#0F172A` / `#1E1B4B`):** Confines macro navigation to a dark mode viewport anchor, keeping secondary menus quiet and stable while the learning canvas operates in bright daylight mode.
- **Canvas Base (`#F8FAFC`) & Surfaces (`#FFFFFF`):** Form crisp layer boundaries bordered by calibrated slate dividers (`#E2E8F0`), preventing visual bleeding between instructional steps and live device preview mockups.
- **Power Fx Syntax Spectrum:**
  - Functions & Controls: `powerfx-violet` (`#8B5CF6`) and `primary` (`#6366F1`).
  - Strings & Data Sources: `powerfx-emerald` (`#10B981`).
  - Properties & Variables (`OnVisible`, `chat`, `Set`): `code-inline-text` (`#5B21B6`) wrapped in soft lavender pills (`#EDE9FE`).
  - Parameters & Warnings: `powerfx-amber` (`#F59E0B`) and `powerfx-cyan` (`#06B6D4`).

## Typography

The typographic hierarchy distinguishes narrative instruction from technical formulas. **Plus Jakarta Sans** provides open, optimistic, and welcoming geometric letterforms for module headlines, progress badges, and action triggers. **Inter** ensures crystal-clear readability for technical explanations, step-by-step guidance, and simulator metadata.

For all Power Fx formulas, variables, and property names (`OnVisible`, `Navigate()`, `UpdateContext()`), **JetBrains Mono** supplies monospaced precision with distinct glyph rendering for parentheses, brackets, and string delimiters.

All instructional copy remains in natural, clear Spanish (e.g., *«El primer ‘hola’ empieza aquí»*, *«Recorre la secuencia»*, *«Copia y analicemos»*).

## Layout & Spacing

The workspace implements a **Split-Studio Two-Tier Layout**:
1. **Global Fixed Sidebar (280px Desktop):** Houses curriculum chapters, lesson indexes, persistent student progress percentage, and module metadata. Collapses to an off-canvas drawer on tablet and mobile viewports (<1024px).
2. **Interactive Workbench Canvas (Fluid Grid with 1380px Max Center):**
   - **Header Bar:** Breadcrumb hierarchy (`Tu espacio para aprender / Power Apps`), current track mode indicator, and utility actions.
   - **Progress Stepper Bar:** Horizontal micro-segmented track representing sequential stage completion across the current lesson.
   - **Split Dual Canvas (Desktop 7:5 / 12-Column ratio):**
     - **Left Workspace Column (7 cols):** Instruction card sequence, formula explanation cards, interactive sub-steps (`Paso 1 de 6`), and interactive property explorer accordions.
     - **Right Simulator Column (5 cols):** Sticky phone and chatbot card preview module (`EVA Assistant`) simulating real-time reactions to the student's formula configurations.
   - **Reflow Rules:** Under 1024px, the layout stacks sequentially: interactive instruction card on top, followed by an expandable live preview card beneath it, with persistent bottom navigation bars.

## Elevation & Depth

Visual hierarchy uses a refined combination of surface elevation tiers, subtle perimeter micro-borders, and colored ambient glows rather than muddy grey drop shadows:

- **Level 0 (App Shell & Canvas):** Flat tone (`#F8FAFC`) with no shadow.
- **Level 1 (Instructional & Workbench Cards):** Pure white `#FFFFFF` surface accompanied by a crisp `1px solid #E2E8F0` border and a delicate dual shadow: `0 1px 3px rgba(15, 23, 42, 0.04), 0 6px 16px rgba(15, 23, 42, 0.02)`.
- **Level 2 (Interactive Cards & Code Inspect Trays):** Dynamic lift on hover (`transform: translateY(-2px)`) with an elevated ambient shadow `0 10px 25px -5px rgba(99, 102, 241, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)` and border transition to `#CBD5E1`.
- **Level 3 (Live Simulator Device & Floating Action Toolbars):** Deep, polished presence using layered depth: `0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.06)` with a slight inset glass specular highlight along the top rim.
- **Accent Glows:** Active navigation pills and formula execution states emit a focused primary rim glow (`0 0 0 3px rgba(99, 102, 241, 0.2)`).

## Shapes

The design system maintains a balanced **Rounded (`roundedness: 2`)** aesthetic, conveying an ergonomic software product that feels warm and modern:
- Interactive cards, code consoles, and simulator shells use **`rounded-xl` (16px / 1rem)**.
- Stepper pills, tag chips, buttons, and inline formula pills use **rounded-full / pill profiles** for distinct clickability.
- Inner list items, nested input fields, and sequence sub-tabs leverage **`rounded-lg` (8px / 0.5rem)**.

## Components

### 1. Navigation Sidebar & Lesson Trackers
- **Container:** Dark slate `#0F172A` with subtle indigo underglow `#1E1B4B`.
- **Brand Plaque:** Rounded squircle badge displaying the lesson monogram (`E` in lavender `#EDE9FE` on electric violet background `#6366F1`) paired with uppercase category metadata.
- **Lesson Items:** Segmented pills with lesson numbers in rounded badges.
  - *Active Item:* Filled with semi-transparent violet-slate (`rgba(99, 102, 241, 0.18)`), glowing border stroke (`#6366F1`), and bright white label.
  - *Incomplete Item:* Slate-400 text, semi-transparent number badge, smooth hover highlight.
  - *Completed Item:* Emerald badge checkmark with muted slate-300 text.

### 2. Segmented Stepper Bar
- Multi-segment progress bar spanning the width of the main canvas.
- Completed and current steps are connected via solid electric violet pills (`#6366F1`), while upcoming steps display as quiet muted slate segments (`#E2E8F0`).
- Accompanied by micro text: *"Paso X de Y"* and an interactive quick-access dropdown *"Buscar una propiedad ↗"*.

### 3. Step Instruction Cards
- High-contrast pure white card with subtle top border color accent indicating current step status.
- Left edge features step index badge (`01`, `02`) in lavender tone next to bold section headers.
- **Sub-sequence Navigator:** Internal sub-step card (*«Recorre la secuencia · 1 / 3»*) equipped with mini pagination dots and tactile icon buttons (`←` / `→`) to progress without reloading context.

### 4. Power Fx Code Formula & Property Blocks
- **Inline Badges:** Monospace text in `#5B21B6` on `#EDE9FE` background, padded with `2px 8px`, rounded to `6px`, with subtle border `rgba(139, 92, 246, 0.2)`.
- **Formula Console Cards:** Dark editor background (`#0B0F19`) featuring:
  - Header strip with property title (e.g., `Screen.OnVisible`), syntax format badge, and a **"Copiar fórmula"** button that animates to a green checkmark state upon click.
  - Syntax highlighted formula lines with clear spacing and color tokens for variables and Power Apps keywords.
  - Expandable accordion drawer explaining formula mechanics line by line.

### 5. Live Chatbot Simulator Preview
- Modern simulated viewport representing the Power Apps phone / tablet preview canvas.
- **Header:** Dark slate title bar (`#1E1B4B`) displaying assistant name (`EVA Assistant`), avatar icon, and status dot.
- **Message Feed:**
  - *Bot Bubble:* Soft grey-violet `#F1F5F9` aligned left with subtle drop shadow.
  - *User Bubble:* Solid electric violet `#6366F1` aligned right with crisp white text.
- **Footer:** Informative subtitle (*«Vista ilustrativa · Los datos viven en Power Apps»*) providing realistic student context.

### 6. Primary and Secondary Action Buttons
- **Primary ("Continuar →"):** Vibrant violet gradient to indigo (`#6366F1` to `#4F46E5`), bold white label, 12px vertical padding, pill radius, hover lift with shadow `0 8px 20px -4px rgba(99, 102, 241, 0.4)`.
- **Secondary ("← Anterior"):** Ghost slate button (`#64748B`), transparent background, subtle hover pill highlight (`#F1F5F9`).