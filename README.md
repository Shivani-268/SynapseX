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

Step 1: Get the Extension Code

Either download the ZIP from your GitHub repository

Or clone the repo:

git clone https://github.com/yourusername/AI-Dark-Pattern-Detector.git


Make sure you have all files: manifest.json, content.js, popup.html, README.md.

Step 2: Open Chrome Extensions

Open Google Chrome

Go to:

chrome://extensions/


Enable Developer Mode (toggle switch on the top-right)

Step 3: Load the Extension

Click Load unpacked

Select the folder containing your extension (not individual files, the full project folder)

Chrome will load the extension and it will appear in the extensions list

Step 4: Test the Extension

Open any website with cookie banners, pop-ups, or consent forms

Wait 1–3 seconds

You should see the warning box appear in the bottom-right corner

Example sites: news websites, shopping sites, sites asking “Accept All Cookies”.

Step 5: Using the Extension

Click Dismiss on the warning box to remove it

The extension continues scanning the page in real-time

No user data is sent anywhere; everything runs locally
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

