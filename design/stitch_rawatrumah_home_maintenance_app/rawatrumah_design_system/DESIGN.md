---
name: RawatRumah Design System
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
  on-surface-variant: '#424754'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#727785'
  outline-variant: '#c2c6d6'
  surface-tint: '#005ac2'
  primary: '#0058be'
  on-primary: '#ffffff'
  primary-container: '#2170e4'
  on-primary-container: '#fefcff'
  inverse-primary: '#adc6ff'
  secondary: '#545f73'
  on-secondary: '#ffffff'
  secondary-container: '#d5e0f8'
  on-secondary-container: '#586377'
  tertiary: '#006947'
  on-tertiary: '#ffffff'
  tertiary-container: '#00855b'
  on-tertiary-container: '#f5fff6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  headline-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-xs:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
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
---

## Brand & Style

The design system embodies a modern minimalist, highly functional aesthetic tailored for residential property managers, homeowners, and maintenance technicians across Indonesia. The tone is clean, professional, reassuring, and approachable. It strips away ornamental clutter to emphasize operational clarity, task completion, and schedule certainty.

Key visual pillars:
- **Quiet Precision**: Generous white space, rigorous 4px alignment, and fine 1px slate structural dividers create an orderly, calming environment for busy property upkeep.
- **Warm Utility**: Micro-interactions are subtle and swift (150–200ms ease-out transitions). Color is applied with deliberate restraint—reserving high-chroma pigments strictly for status badges, primary calls-to-action, and critical operational updates.
- **Localized Context**: Designed natively around Indonesian business contexts, incorporating standard formatting for Indonesian Rupiah (`Rp 150.000`), localized date conventions (`14 Mar 2025`), and natural, courteous Indonesian terminology (`Jadwal Baru`, `Selesai Dikerjakan`, `Menunggu Konfirmasi`).

## Colors

The palette relies on high-legibility contrasting pairs optimized for daylight dashboard use and prolonged data entry.

### Primary & Interaction
- **Primary Base (`#3B82F6`)**: Used for primary action buttons, focused borders, active tab highlights, and key links.
- **Primary Hover (`#2563EB`)**: Interactive feedback state for primary interactive elements.
- **Primary Muted Tint (`#EFF6FF`)**: Background fill for active navigational items, selected card rows, and informative callouts.

### Surfaces & Neutrals
- **Background Canvas (`#F8FAFC`)**: Base application workspace canvas, reducing eye fatigue compared to pure white.
- **Surface Elevation 0 (`#FFFFFF`)**: Pure white base for cards, tables, modals, input containers, and flyouts.
- **Border Default (`#E2E8F0`)**: Low-contrast structural dividing lines for table cells, card envelopes, and separators.
- **Border Strong (`#CBD5E1`)**: Used for unselected input fields and interactive chip outlines.
- **Text Headings (`#0F172A`)**: High-contrast deep slate for headlines and key numerical figures.
- **Text Body (`#1E293B`)**: Neutral slate for body paragraphs, table values, and field labels.
- **Text Muted (`#64748B`)**: Secondary slate for timestamps, secondary meta-tags, helper texts, and column headers.

### Semantic Status Palette
- **Sukses / Terjadwal (`#10B981`)**: Emerald green for confirmed tasks, completed services, and healthy operational budgets. Paired with `#ECFDF5` background.
- **Peringatan / Segera (`#F59E0B`)**: Amber for upcoming due dates (<48 jam), pending approvals, and low stock warnings. Paired with `#FFFBEB` background.
- **Bahaya / Terlambat (`#EF4444`)**: Rose red for overdue repairs, failed inspections, and urgent leak/electrical leaks. Paired with `#FEF2F2` background.

## Typography

The type scale leverages **Inter** for its neutral geometry, optical legibility at micro sizes, and robust OpenType tabular lining figures (`tnum`).

### Guidelines & Rules
- **Tabular Figures**: Enable OpenType `font-feature-settings: 'tnum'` across all tabular currency columns (`Rp 1.250.000`), counts, and execution dates to ensure clean vertical alignment.
- **Visual Weight**: Headings rely on semi-bold (`600`) and bold (`700`) weights to provide a confident visual anchor against dense data grids.
- **Copy Polish**: Text labels for UI elements should prefer Sentence case in Indonesian (`Tambah aset`, `Unduh laporan`, `Daftar teknisi`) rather than Title Case, maintaining an uncluttered, modern software aesthetic.

## Layout & Spacing

The layout is built on a responsive 12-column grid utilizing flexible container zones paired with an 8pt architectural rhythm (subdivided to 4pt for micro-component internals).

### Structural Breakpoints
- **Mobile (< 768px)**: 4-column layout, `1rem` (16px) outer margin, vertical stack layout for metric widgets, and responsive full-width action drawers replacing multi-column modal forms.
- **Tablet (768px – 1024px)**: 8-column layout, `1.5rem` (24px) gutters, persistent collapsible icon sidebar (`64px`), and 2-column metric cards.
- **Desktop (> 1024px)**: 12-column layout, persistent full-width sidebar (`256px`), maximum canvas container constraint of `1440px`, and 4-column KPI metric overviews.

### Spacing Application
- Use `space-xs` (4px) and `space-sm` (8px) strictly for inline icon-to-label gaps, badge padding, and form label proximity.
- Use `space-md` (16px) for interior card padding, table row heights, and standard form element vertical stacks.
- Use `space-lg` (24px) and `space-xl` (32px) for page section division, dashboard grid row gaps, and card headers.

## Elevation & Depth

Depth is established primarily through crisp 1px borders (`#E2E8F0`) augmented by soft ambient atmospheric shadows. Elements sit close to the canvas, avoiding excessive layers or heavy 3D drop shadows.

### Elevation Hierarchy
- **Level 0 (Flat Surface)**: Used for data tables, inline dividers, and secondary controls.
  - Border: `1px solid #E2E8F0`
  - Shadow: `none`
- **Level 1 (Card & Containers)**: Default state for KPI cards, property listings, and maintenance tickets.
  - Border: `1px solid #E2E8F0`
  - Shadow: `0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.03)`
- **Level 2 (Hover & Popovers)**: Interactive card hovers, small dropdowns, tooltips, and calendar pickers.
  - Border: `1px solid #CBD5E1`
  - Shadow: `0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.04)`
- **Level 3 (Modals & Flyouts)**: Dialog windows, full-ticket detail sheets, and notification centers.
  - Border: `1px solid #E2E8F0`
  - Shadow: `0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)`

## Shapes

The design system implements a refined rounded geometry (`roundedness: 2`), balancing human warmth with software efficiency.

- **Primary Cards & Modals (`rounded-xl` / 16px)**: Applied to core content panels, KPI summary blocks, and dialog boxes to soften the dashboard interface.
- **Form Inputs & Buttons (`rounded-md` / 8px)**: Applied to text inputs, search fields, date pickers, and interactive buttons to provide sharp, definitive target perimeters.
- **Pill Badges (`rounded-full` / 9999px)**: Reserved strictly for status tags (`Terjadwal`, `Segera`, `Selesai`), avatar containers, and counter indicators to immediately isolate them from square structural components.

## Components

### Buttons
- **Primary**: Solid background `#3B82F6`, hover `#2563EB`, text `#FFFFFF`, radius `8px`, font `label-md`. Focus ring uses `0 0 0 3px rgba(59, 130, 246, 0.35)`.
- **Secondary / Outline**: Background `#FFFFFF`, border `1px solid #E2E8F0`, hover background `#F8FAFC`, hover border `#CBD5E1`, text `#1E293B`.
- **Ghost / Danger**: Plain text actions for destructive commands (`Batalkan Perbaikan`), text `#EF4444`, hover background `#FEF2F2`.

### Status Badges & Chips
- Status badges feature horizontal padding `10px`, vertical padding `3px`, `label-xs` typography, and fully rounded pill contours (`rounded-full`).
- **Terjadwal / Selesai**: Text `#065F46`, background `#ECFDF5`, icon indicator filled emerald.
- **Segera**: Text `#92400E`, background `#FFFBEB`, icon indicator filled amber.
- **Terlambat**: Text `#991B1B`, background `#FEF2F2`, icon indicator filled rose.
- **Filter Chips**: Inactive chips have `#F1F5F9` background and `#475569` text; active state adopts `#EFF6FF` background, `#1D4ED8` text, and `#3B82F6` border.

### Input Fields & Controls
- **Text Inputs**: Height `40px`, padding `0 12px`, background `#FFFFFF`, border `1px solid #CBD5E1`, radius `8px`, typography `body-md`. Focus transitions to border `#3B82F6` with subtle blue glow.
- **Search Bar**: Accompanied by 16px slate line icon pinned to the left, placeholder copy formatted as `Cari unit, teknisi, atau jadwal...`.
- **Checkbox & Radio**: Radius `4px` for checkbox, `full` for radio. Active fills with `#3B82F6` accompanied by white check/bullet.

### Data Tables & Lists
- Table containers wrap inside `rounded-xl` borders with background `#FFFFFF`.
- Table header: Height `44px`, background `#F8FAFC`, bottom border `1px solid #E2E8F0`, typography `label-sm` in `#64748B`, uppercase tracking `0.05em`.
- Table row: Height `56px`, hover background `#F8FAFC`, bottom border `1px solid #E2E8F0`. Tabular figures aligned right for monetary values (`Rp 2.450.000`).

### Cards & KPI Blocks
- KPI Cards contain an upper section featuring a 36px circular muted icon container (`#EFF6FF`), label text (`label-sm`), large metric display (`headline-lg`), and a footer showing delta trends (`+12% bulan ini` in `#10B981`).
- Card borders maintain standard `1px solid #E2E8F0` and `16px` inner padding.