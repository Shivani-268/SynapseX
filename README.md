# SynapseX
AI-Powered Dark Pattern Detector - A privacy-first Chrome extension that detects deceptive UI patterns in real-time, warns users before they interact, and promotes ethical web design.
# AI-Powered Dark Pattern Detector

## Overview

Modern websites often use **dark patterns**—deceptive UI designs that manipulate users into actions they didn’t intend, such as accepting cookies, sharing personal data, or subscribing to services. 

The **AI-Powered Dark Pattern Detector** is a **privacy-first Chrome extension** that scans webpages in real-time to detect these patterns and warns users **before they interact**, helping them make informed decisions.

This project was built as a **hackathon MVP** using fully offline heuristics and on-device NLP-inspired detection, **without any paid APIs**.

---
## Setup / Installation

Follow these steps to run the **AI-Powered Dark Pattern Detector** Chrome extension locally:

### 1️⃣ Clone the Repository
First, clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/AI-Dark-Pattern-Detector.git

## Features

- Detects common dark patterns in consent banners, pop-ups, and overlays:
  - **Misdirection**: “Accept all” highlighted, reject hidden
  - **Forced Consent**: Cannot proceed without agreeing
  - **Guilt Tripping**: Emotionally manipulative language
- **Age-related detection**: Flags patterns targeting minors (COPPA/GDPR-K relevance)
- Shows a **real-time warning popup** with:
  - Pattern type
  - Risk level (HIGH / CRITICAL)
  - Why detected (explanation)
- **Privacy-first**: No user data leaves the browser
- **Extensible** for future AI/ML integration (local transformers, compliance dashboards)

---

## Demo

When visiting a site with cookie banners or deceptive pop-ups, a warning appears:

