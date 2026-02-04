# Claude Code Prompt: Clawdbot Landing Page

Build a single-page landing page for my Clawdbot setup offer.

## Reference Files
- **Offer details**: `clawdbot-offer.md` — contains all copy, pricing, bonuses, objections, and structure
- **Design system**: Follow existing patterns in `index.html` and `styles.css`
- **Brand guidelines**: `BRAND-GUIDELINES.md`

## Page Structure

### Hero Section
- Headline: "Run Clawdbot for $10/month (No Mac Mini Required)"
- Subheadline: "Skip the $500 hardware. Avoid the security nightmares. Actually understand what you're running."
- Brief hook about what they're getting
- CTA button that scrolls to pricing

### Problem Section
The 4 barriers from the offer doc:
1. Mac Mini cost ($500+)
2. Security minefield
3. Docs assume you're a developer
4. Model costs spiral fast

### Two-Tier Pricing Cards (Side by Side)

**Left Card — DIY ($29)**
- Core offer: VPS Setup SOP
- 3 free bonuses with strikethrough pricing and "FREE" badges
- Value stack table ($82 value → $29)
- "Limited time" scarcity on bonuses
- CTA: "Get the Blueprint"

**Right Card — DWY ($289)**
- Highlight/featured styling (make this one pop slightly)
- "Everything in DIY Kit" + call components
- 90-min live setup call
- Custom configuration
- Security audit
- 7-day support window
- CTA: "Book Your Setup Call"

### What's Inside Section
Expandable or visible breakdown of each component:
- VPS Setup SOP details
- Security Checklist details
- Model Optimization Guide details
- Backend Breakdown details

### Who This Is For
Quick qualification checklist (checkmarks):
- ✓ You've seen the Clawdbot demos and want in
- ✓ You don't want to spend $500 on a Mac Mini
- ✓ You're not a DevOps engineer (and don't want to become one)
- ✓ You want it done right the first time—secured and optimized

### FAQ Section
Use the objection handling from the offer doc:
- "I'll just figure it out myself"
- "Is VPS as good as Mac Mini?"
- "What if OpenClaw changes?"
- "$289 is expensive for a call"

### Final CTA
Repeat the two pricing cards or simplified version

## Design Requirements
- Single page, no routing needed
- Mobile responsive (cards stack on mobile)
- Smooth scroll to pricing on CTA clicks
- Clean, professional aesthetic matching existing site
- Dark mode compatible if site supports it

## Tech Stack
- Plain HTML/CSS/JS (match existing site)
- No frameworks unless already in use
- Stripe checkout buttons (placeholder hrefs for now: `#checkout-diy` and `#checkout-dwy`)

## Output
Create `clawdbot-setup.html` in the root directory.
