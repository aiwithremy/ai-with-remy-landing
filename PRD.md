This Product Requirements Document (PRD) defines the requirements for the **AI with Remy** landing page. The goal is to create a high-converting digital space that pairs modern, high-end minimalism with a "Retro-Technical" soul—inspired by 1990s technical manuals and early digital art, but polished for a premium audience of tech-savvy solopreneurs.

---

## 1. Visual Identity & Aesthetic Direction

The core aesthetic is **"Sophisticated Digital Nostalgia."** It must feel clean and expansive, punctuated by charming retro elements that pay homage to technology without appearing "hacker-focused" or intimidating.

### Core Visual Principles

* **The "Wait" Layout:** The entire page must be center-aligned within a narrow container, surrounded by generous white space on both sides to ensure a premium, focused feel.
* **The "Spaceship" Balance:** Use a stark white background and modern sans-serif fonts for all primary information to ensure clarity, while using pixelated headers to establish the retro theme.
* **Dithered Imagery & ASCII:** Incorporate high-contrast dithered images or ASCII art (similar to the **RYSA** style) to add texture and personality.
* **Accent Color Strategy:** Use "Blueprint Blue" only as an extremely subtle accent color, applied very sporadically for tiny details (like a single pixel dot or a thin line) to avoid a "technical blueprint" look.
* **No Blueprint Art:** Avoid the complex schematic illustrations found in the "Making Software" site; focus instead on clean, modern cards and text blocks.

### Typography & UI Elements

* **Display Headers:** A pixel-grid font for primary section titles to provide a distinctive retro-tech feel.
* **Body Text:** A high-fidelity, modern sans-serif font for all long-form copy and benefits, prioritizing readability and a premium aesthetic.
* **Buttons:** Simple, sharp-cornered buttons with 1px borders or high-contrast fills (e.g., solid black or white).

---

## 2. Page Structure & Component Brief

### I. Hero Section (Immediate Conversion)

* **Design:** A centered container featuring the newsletter logo and a bold, pixelated headline.
* **Visuals:** Include a primary ASCII art element (e.g., a stylized robot or technical shape) on the side to balance the text.
* **Components:** * Benefit-driven H1 in a pixel font.
  * Clear, modern subtext defining the "AI for solopreneurs" value proposition.
  * Minimalist email signup bar with a clean "Join" button.

### II. VSL (Context & Trust)

* **Design:** A video player housed in a clean, 1px outlined frame.
* **Vibe:** The player should be simple and modern, avoiding excessive "tech" overlays while maintaining the centered alignment.

### III. Problem / Us vs. Them

* **Concept:** A comparison showing the difference between "AI Slop" and "AI with Remy".
* **Visuals:** Use clean, grid-based cards or a simple list with modern icons to contrast generic newsletters with Remy’s actionable workflows.

### IV. Mini Sales Letter (Personal Connection)

* **Layout:** A narrow, elegant text column.
* **Style:** Use modern sans-serif text with a decorative drop-cap or a monospaced "From the Desk of Remy" header to create a personal feel.

### V. Benefits Cards (Outcome Reinforcement)

* **Layout:** Four horizontal or grid-based cards.
* **Design:** Each card features a small dithered or pixel icon, a bold headline, and 1-2 lines of supporting text.

### VI. Final CTA & FAQ

* **CTA:** A second signup opportunity mirroring the Hero section to capture visitors after they've scrolled.
* **FAQ:** Clean, accordion-style questions (based on the **Wait** template) to address common subscriber concerns.

### VII. Footer

* **Design:** Minimalist layout with a thin divider line.
* **Content:** Copyright, social links, and legal links in small, monospaced text.

---

## 3. Implementation Summary for Developer

| **Element**        | **Reference**       | **Key Instruction**                                                |
| ------------------------ | ------------------------- | ------------------------------------------------------------------------ |
| **Overall Layout** | Wait Template             | Centered, narrow container with wide margins.                            |
| **Headline Font**  | Spaceship/Making Software | Retro pixelated font for headers.                                        |
| **Body Font**      | RYSA/Wait                 | Clean, modern sans-serif.                                                |
| **Illustrations**  | Spaceship/RYSA            | Pure ASCII art or dithered textures; no blueprints.                      |
| **Colors**         | RYSA/Spaceship            | Stark white background; Blueprint Blue used only for tiny, rare details. |

---

## 4. Newsletter Confirmation Page

**Page:** Post-Signup Confirmation
**Purpose:** Convert new email subscribers into engaged readers by priming them to open and interact with the welcome email.

**Single goal:** Get the subscriber to check their inbox.

### Page Elements

#### I. Headline
**Copy:** "Check your inbox"
**Notes:** Action-first headline. Avoids "You're in" which signals completion and triggers tab-close. This creates a next step, not a finish line.

#### II. Subhead
**Copy:** "Your welcome package is waiting. If you're on Gmail, check Promotions — move it to Primary so you don't miss what's coming next."
**Notes:** "Package" implies bundled value (not just a single email). Justified by welcome email containing: links to best previous posts + Claude skills library.

#### III. Email Provider Buttons
**Elements:** Gmail, Outlook, Yahoo (optional: Apple Mail)
**Notes:** Direct links to open user's inbox in new tab. Reduces friction — one click to inbox instead of navigating manually.

**Links:**
- Gmail: `https://mail.google.com/`
- Outlook: `https://outlook.live.com/mail/`

**Design:** Horizontal row of buttons with provider icons/logos. Keep subtle — helpful, not pushy.

#### IV. What to Expect (Optional)
**Copy:** "Every week, you'll get one actionable AI workflow to help you build faster."
**Notes:** One line max. Reinforces value, reduces unsubscribe anxiety.

#### V. Whitelist Tip
**Copy:**
> **Gmail users:** If it lands in Promotions, drag it to Primary so you don't miss future emails.

**Notes:** De-emphasize visually (smaller text, muted color, or collapsible). Not the main focus.

### Visual Hierarchy

```
[1] Headline          — Large, bold, centered ("Check your inbox")
[2] Subhead           — Medium, directly below headline (the why)
[3] Email Buttons     — Prominent, horizontal row (Gmail / Outlook / Yahoo)
[4] What to Expect    — Small, subtle, below buttons
[5] Whitelist Tip     — Smallest, muted, near bottom
```

### Design Notes

- Clean, minimal layout — no sidebar, no navigation distractions
- Mobile-first (most users will land here from social on phone)
- Inherits all typography, colors, and spacing from main landing page (Section 1)
- Centered narrow container with generous white space (the "Wait" layout)
- Pixel font for headline, modern sans-serif for body text
- No images required (optional: small brand mark or ASCII element for consistency)

### Exclusions (Do Not Include)

| Element | Reason |
|---------|--------|
| Referral program CTA | Too early — no value delivered yet |
| Subscriber count | Not meaningful at current scale |
| Links to blog/content | Competes with "check inbox" action |
| Form or survey | Friction, low ROI at this stage |
| Multiple CTAs | Dilutes focus |
| Social follow icons | Distraction — save for welcome email or later |

### Success Metric

Welcome email open rate > 60%

### Dependencies

- Welcome email ready with: links to best previous posts + Claude skills library
- Email platform configured for immediate send on signup
