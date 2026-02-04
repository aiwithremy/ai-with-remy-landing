# AI with Remy — Brand Guidelines

Internal reference for web design. Last updated: February 2026.


## Quick Reference

**Brand personality:** Modern-retro, technical, clean, approachable

**Key visual patterns:**

- Raised "Web 1.0" buttons with inset shadows
- Monospace labels in uppercase with letter-spacing
- Blueprint blue as sparse accent (not dominant)
- Generous whitespace, tight container widths

---

## 1. Color Palette

### Core Colors

| Name           | Hex         | CSS Variable               | Usage                 |
| -------------- | ----------- | -------------------------- | --------------------- |
| Background     | `#FFFFFF` | `--color-bg`             | Page background       |
| Text Primary   | `#121212` | `--color-text`           | Headlines, body text  |
| Text Secondary | `#7E7E7E` | `--color-text-secondary` | Subtext, descriptions |
| Text Muted     | `#AAAAAA` | `--color-text-muted`     | Labels, captions      |

### Accent Color (Blueprint Blue)

| Name         | Value                      | CSS Variable             | Usage                           |
| ------------ | -------------------------- | ------------------------ | ------------------------------- |
| Accent       | `rgb(64, 64, 255)`       | `--color-accent`       | Links, highlights, focus states |
| Accent Light | `rgba(64, 64, 255, 0.1)` | `--color-accent-light` | Badges, subtle backgrounds      |

### Grays

| Name     | Hex         | CSS Variable         | Usage                      |
| -------- | ----------- | -------------------- | -------------------------- |
| Gray 100 | `#F8F8F8` | `--color-gray-100` | Hover states, subtle fills |
| Gray 200 | `#F2F2F2` | `--color-gray-200` | Card backgrounds           |
| Gray 300 | `#E3E3E3` | `--color-gray-300` | Inset shadows, dividers    |
| Gray 400 | `#CCCCCC` | `--color-gray-400` | Borders                    |

### Borders

| Name          | Value                      | CSS Variable              |
| ------------- | -------------------------- | ------------------------- |
| Border        | `rgba(33, 33, 33, 0.12)` | `--color-border`        |
| Border Strong | `rgba(33, 33, 33, 0.25)` | `--color-border-strong` |

---

## 2. Typography

### Font Families

| Role                | Font        | Fallback                                      | CSS Variable       |
| ------------------- | ----------- | --------------------------------------------- | ------------------ |
| Display / Headlines | PP Neue Bit | Space Mono, Courier New                       | `--font-display` |
| Body                | Inter       | -apple-system, BlinkMacSystemFont, sans-serif | `--font-body`    |
| Monospace / Labels  | Space Mono  | Courier New, monospace                        | `--font-mono`    |

**Font sources:**

- PP Neue Bit: Custom (local file `ppneuebit-bold.otf`)
- Inter & Space Mono: Google Fonts

### Type Scale

| Token | Size             | CSS Variable    |
| ----- | ---------------- | --------------- |
| xs    | 0.6875rem (11px) | `--text-xs`   |
| sm    | 0.75rem (12px)   | `--text-sm`   |
| base  | 0.875rem (14px)  | `--text-base` |
| md    | 1rem (16px)      | `--text-md`   |
| lg    | 1.125rem (18px)  | `--text-lg`   |
| xl    | 1.5rem (24px)    | `--text-xl`   |
| 2xl   | 1.75rem (28px)   | `--text-2xl`  |
| 3xl   | 2rem (32px)      | `--text-3xl`  |
| 4xl   | 2.5rem (40px)    | `--text-4xl`  |

### Headline Sizing (Responsive)

| Element              | Mobile | Tablet (810px+) | Desktop (1200px+) |
| -------------------- | ------ | --------------- | ----------------- |
| Hero Headline        | 2.5rem | 3.25rem         | 4rem              |
| Section Heading (h2) | 1.5rem | 1.75rem         | —                |

### Text Styles

| Style              | Font       | Size     | Weight | Extras                            |
| ------------------ | ---------- | -------- | ------ | --------------------------------- |
| Body               | Inter      | base–md | 400    | Line-height: 1.7                  |
| Mono Label         | Space Mono | xs       | 400    | Uppercase, letter-spacing: 0.05em |
| Section Annotation | Space Mono | xs       | 400    | Uppercase, muted color            |

---

## 3. Buttons

### Base Button (`.btn`)

```
Font:         Space Mono, 0.75rem, uppercase
Padding:      0.75rem 1.5rem (12px 24px)
Border:       1px solid #CCCCCC
Radius:       4px
Background:   #FFFFFF
```

### Retro Raised Effect

The signature "Web 1.0" raised button uses an inset shadow:

```css
box-shadow: inset -2px -2px 0 0 #E3E3E3;
```

### Button States

| State   | Style                                                    |
| ------- | -------------------------------------------------------- |
| Default | White background, gray border, inset shadow bottom-right |
| Hover   | Background:`#F8F8F8`                                   |
| Active  | Inset shadow flips:`inset 2px 2px 0 0 #E3E3E3`         |
| Focus   | 2px outline in accent color, 2px offset                  |

### Large Button Modifier

```
Padding:      1rem 2rem (mobile) → 1.125rem 2.5rem (tablet+)
Font size:    sm → base
```

---

## 4. Form Inputs

### Text Input (`.signup-form__input`)

```
Font:         Inter, 0.75rem
Padding:      0.75rem 1rem
Border:       1px solid #CCCCCC
Radius:       4px
Background:   #FFFFFF
```

### Focus State

```css
border-color: rgb(64, 64, 255);
box-shadow: 0 0 0 2px rgba(64, 64, 255, 0.1);
```

### Placeholder

```
Color:        #AAAAAA (text-muted)
```

---

## 5. Cards & Containers

### Border Radius Scale

| Token | Size | CSS Variable    |
| ----- | ---- | --------------- |
| sm    | 4px  | `--radius-sm` |
| md    | 8px  | `--radius-md` |
| lg    | 12px | `--radius-lg` |

### Card Base

```
Background:   #FFFFFF
Border:       1px solid rgba(33, 33, 33, 0.12)
Radius:       8px (md)
Padding:      1.5rem
```

### Window Chrome (Mac Window / Email Window)

Used for video embeds, email previews, and terminal frames:

```
Border:       1px solid rgba(33, 33, 33, 0.25)
Radius:       4px (sm)
Title bar:    #F8F8F8 background, 1px bottom border
Window dots:  10px circles, #E3E3E3 fill, 6px gap
Shadow:       0 2px 0 0 #E3E3E3, 0 8px 24px rgba(0,0,0,0.08)
```

---

## 6. Spacing Scale

| Token | Size           | CSS Variable   |
| ----- | -------------- | -------------- |
| 1     | 0.25rem (4px)  | `--space-1`  |
| 2     | 0.5rem (8px)   | `--space-2`  |
| 3     | 0.75rem (12px) | `--space-3`  |
| 4     | 1rem (16px)    | `--space-4`  |
| 5     | 1.5rem (24px)  | `--space-5`  |
| 6     | 2rem (32px)    | `--space-6`  |
| 8     | 3rem (48px)    | `--space-8`  |
| 10    | 4rem (64px)    | `--space-10` |
| 12    | 5rem (80px)    | `--space-12` |
| 16    | 8rem (128px)   | `--space-16` |

### Layout Constraints

| Property         | Value | CSS Variable           |
| ---------------- | ----- | ---------------------- |
| Container Max    | 680px | `--container-max`    |
| Container Narrow | 560px | `--container-narrow` |

---

## 7. Transitions

| Token | Duration   | CSS Variable          |
| ----- | ---------- | --------------------- |
| Fast  | 150ms ease | `--transition-fast` |
| Base  | 250ms ease | `--transition-base` |
