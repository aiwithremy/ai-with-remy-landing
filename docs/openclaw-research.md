# OpenClaw Research Brief

> **TL;DR**: OpenClaw is an open-source, self-hosted AI assistant that runs 24/7 on your machine with full system access. It connects to 50+ messaging apps (WhatsApp, Telegram, Discord, etc.) and can autonomously execute real tasks—managing emails, calendars, files, and even writing code. Think "always-on AI chief of staff" rather than a chatbot.

---

## Naming History

| Name | Period | Notes |
|------|--------|-------|
| **Clawdbot** | Nov 2025 | Original name (lobster mascot reference) |
| **Moltbot** | Jan 27, 2026 | Emergency rebrand after Anthropic trademark notice |
| **OpenClaw** | Jan 30, 2026 | Current name (after "Moltbot" was poorly received) |

All three names refer to the **same project** created by Peter Steinberger (@steipete), founder of PSPDFKit.

---

## What Is It?

OpenClaw is fundamentally different from ChatGPT or Claude.ai:

| Traditional AI Chat | OpenClaw |
|---------------------|----------|
| You visit a website | It runs on YOUR machine 24/7 |
| Stateless conversations | Persistent memory across all chats |
| Can only generate text | Can execute commands, manage files, control apps |
| Single interface | Works across 50+ messaging platforms |
| Cloud-hosted | Self-hosted, privacy-first |

### Core Architecture

```
┌─────────────────────────────────────────────────────┐
│                    Your Machine                      │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  │
│  │   Claude    │  │   Gateway   │  │   Skills    │  │
│  │   (Brain)   │◄─┤   Server    │◄─┤  (Plugins)  │  │
│  │             │  │             │  │             │  │
│  └─────────────┘  └──────┬──────┘  └─────────────┘  │
└──────────────────────────┼──────────────────────────┘
                           │
           ┌───────────────┼───────────────┐
           ▼               ▼               ▼
      WhatsApp         Telegram        Discord
      Slack            Signal          iMessage
      Email            Calendar        + 40 more
```

---

## Key Capabilities

### 1. Persistent Memory
- Stores conversations as local files
- Remembers context across days/weeks
- Learns your preferences and habits

### 2. Proactive Actions
- Morning briefings
- Automatic reminders
- Scheduled tasks via cron
- Heartbeat check-ins

### 3. Real Task Execution
- Email management and replies
- Calendar updates
- Smart home control
- Website/code building
- Form filling
- Browser automation
- Terminal commands

### 4. Multi-Channel Integration
Works across 50+ platforms including WhatsApp, Telegram, Discord, Slack, Signal, iMessage, Gmail, Spotify, Obsidian, GitHub, Twitter, and more.

### 5. Skills System
- Modular extensions for specific capabilities
- Community-built skills available
- Can write its own skills autonomously
- Hot-reload without restart

---

## Pricing

**OpenClaw itself**: Free and open-source

**Actual costs**:
| Item | Cost |
|------|------|
| API usage (Claude/GPT) | ~$2-5/day typical use |
| Dedicated hardware (optional) | ~$500-600 one-time (Mac Mini) |
| Separate phone number for WhatsApp | ~$5-10/month eSIM |

---

## Setup Requirements

### Hardware
- Mac, Windows, Linux, or Raspberry Pi
- Dedicated always-on machine recommended
- Ethernet connection preferred

### Software
- Node.js
- Anthropic or OpenAI API key
- WhatsApp Business (or other messaging app)

### Basic Install
```bash
npm install -g openclaw
openclaw onboard
openclaw gateway start
```

### Recommended Setup
1. Use dedicated machine (not your main computer)
2. Create separate Apple ID
3. Get eSIM for new WhatsApp number
4. Set up Tailscale for remote access
5. Configure auto-start after power failures
6. Disable sleep mode

---

## Community Stats

- **100,000+ GitHub stars** (in ~1 week)
- 10,900+ forks
- 321+ contributors
- 8,900+ Discord members
- Has its own Wikipedia page

---

## Real Use Cases (from community)

**What's working well:**
- Overnight autonomous research/analysis
- Self-improving behavior (creates its own skills)
- Multi-API integration in single sessions
- Legacy system fixes
- Email/calendar management
- Custom TTS meditations
- Code testing and PR creation

**Notable quote**: *"Genuinely the most incredible sci-fi takeoff-adjacent thing I have seen recently"* — Andrej Karpathy

---

## Security Concerns (Critical)

### Known Issues
1. **Exposed instances**: Hundreds found via Shodan with visible API keys
2. **Prompt injection**: Malicious emails can trigger destructive actions
3. **Real incident**: Bot deleted all emails after reading hidden instructions
4. **Another incident**: Bot autonomously purchased a $2,000 course

### Mitigations
- Run on isolated/dedicated machine
- Use burner accounts only
- Set API spending limits
- Never connect to financial accounts
- Use Docker containers for isolation
- Configure Cloudflare Tunnel + auth

**Official stance**: *"If you can't understand how to run a command line, this is far too dangerous of a project for you to use safely."*

---

## Moltbook (Related Project)

A social network **exclusively for AI agents**—humans can observe but not participate.
- 1.5+ million agents
- Bots interact, post, and comment autonomously
- Described as *"the most interesting place on the internet right now"* by Simon Willison

---

## Community Sentiment Summary

| Aspect | Rating | Notes |
|--------|--------|-------|
| Core capabilities | Highly positive | "Transformative for power users" |
| Security | Very negative | Serious, documented concerns |
| Stability | Mixed | "Promising but janky" |
| Ease of use | Negative | Experts only |
| Community | Very positive | Active, growing, innovative |
| Future potential | Cautiously optimistic | "2-3 months from mainstream ready" |

---

## Key Quotes

**Enthusiasts:**
> "The future is already here. It can just keep building upon itself by talking to it."

> "Finally got around to setting up OpenClaw and it is truly the best AI tool at the moment."

**Skeptics:**
> "It's the ultimate AI Bro tool—looks super impressive on first look, but totally useless for day-to-day use."

> "You can do most of this already with Claude Code while avoiding a vibe-coded security nightmare."

---

## Verdict

**For technical power users**: Genuine breakthrough in personal AI. Worth the setup investment if you understand the security implications.

**For everyone else**: Wait 2-3 months for the ecosystem to mature and security to harden. The risks currently outweigh the benefits for non-technical users.

---

## Resources

- **GitHub**: github.com/openclaw/openclaw
- **Discord**: Large community for support
- **Creator**: Peter Steinberger (@steipete)
