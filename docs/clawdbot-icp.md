# Clawdbot Setup — Ideal Customer Profile

## Who They Are

Anyone who's seen the Clawdbot/OpenClaw demos and wants in—but hasn't set it up yet.

Mix of AI enthusiasts, founders, creators, and professionals. Technical ability ranges from "comfortable with basic terminal" to "what's a daemon?"

---

## Their Problem

**They want Clawdbot running. They don't have it running.**

The gap between "wow that demo is incredible" and "I have this working on my machine" feels massive.

---

## What They're Afraid Of

| Fear | The Voice in Their Head |
|------|-------------------------|
| **Getting hacked** | "I saw that post about someone's bot deleting all their emails. What if that happens to me?" |
| **Exposing sensitive data** | "This thing has access to my WhatsApp, my email, my files... what if my API keys leak?" |
| **The bot going rogue** | "What if it does something I didn't ask for? Sends a weird message? Buys something?" |
| **Wasting money** | "People are saying they're burning $20/day on API costs. I can't afford that." |
| **Looking stupid** | "Everyone on Twitter makes it look easy. What if I can't figure it out?" |
| **Breaking something** | "It runs commands on my computer. What if it deletes something important?" |

---

## Their Limitations

- **Time**: Don't have 15+ hours to figure this out through trial and error
- **Technical depth**: Know enough to be dangerous, not enough to be confident
- **Risk tolerance**: Want the upside without gambling on security
- **Budget**: Can't justify $500 on hardware for something they're not sure will work

---

## Their Constraints

- Don't own a spare Mac Mini (and don't want to buy one)
- Need this to "just work" — can't become a side project that drags on
- Can't afford to expose client data or professional accounts
- API costs need to stay reasonable ($2-5/day, not $20)

---

## Dream Outcome

> "I have Clawdbot running 24/7, secured properly, talking to me through WhatsApp/Telegram. It remembers everything, handles tasks while I sleep, and I actually understand what it's doing. Cost me $10/month to run and I set it up in an afternoon."

**Specifically:**
- Running on cheap VPS (no hardware purchase)
- Secured against the attacks they've read about
- Optimized so API costs don't spiral
- They understand the system well enough to troubleshoot
- Done in hours, not weeks

---

## Before State

| Dimension | Before |
|-----------|--------|
| **Emotional** | Excited but intimidated. FOMO watching others post demos. |
| **Knowledge** | Knows Clawdbot exists. Doesn't know how to actually deploy it safely. |
| **Status** | Watching from the sidelines while others flex their AI assistants. |
| **Financial** | Assuming it costs $500+ to get started (Mac Mini myth). |
| **Technical** | Stuck at "I cloned the repo... now what?" |

---

## After State

| Dimension | After |
|-----------|-------|
| **Emotional** | Confident. "I have an AI assistant that actually does things." |
| **Knowledge** | Understands the architecture. Can troubleshoot. Knows what's safe. |
| **Status** | Part of the early adopter wave. Can help others set it up. |
| **Financial** | Running for $10/month VPS + reasonable API costs. No hardware. |
| **Technical** | System is live, secured, optimized. They know how it works. |

---

## Misconceptions to Break

### Misconception 1: "You need a Mac Mini"
**Reality:** VPS works just as well (often better). $10/month vs $500 upfront. Accessible from anywhere. Easier to isolate and rebuild if compromised.

### Misconception 2: "It's too dangerous for non-developers"
**Reality:** It CAN be dangerous—if you skip security steps. With proper hardening, it's manageable. The risk isn't in using it, it's in using it carelessly.

### Misconception 3: "API costs will bankrupt me"
**Reality:** Unoptimized setups burn money. Optimized setups cost $2-5/day. The difference is knowing which models to use for which tasks and managing context properly.

### Misconception 4: "The official docs are enough"
**Reality:** The docs assume developer-level knowledge. If you're not comfortable with Linux server administration, you'll hit walls they don't explain.

### Misconception 5: "Security is just 'be careful'"
**Reality:** "Be careful" means nothing. Security requires specific actions: network isolation, API key rotation, permission lockdowns, prompt injection defenses. It's a checklist, not a vibe.

---

## The Core Tension

They're caught between:

**DESIRE:** "I want this running. The potential is insane."

**FEAR:** "But I might get hacked, waste money, or just fail publicly."

**Our job:** Collapse that tension by giving them a clear, safe, affordable path from demo-watcher to Clawdbot-operator.
