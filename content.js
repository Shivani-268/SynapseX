console.log("Dark Pattern Detector running");

// ---------- DARK PATTERN RULES ----------
const darkPatterns = [
  {
    name: "Misdirection",
    keywords: ["accept all", "agree & continue", "allow all"],
    explanation: "The accept option is emphasized to influence user consent.",
    weight: 2
  },
  {
    name: "Forced Consent",
    keywords: ["by continuing", "you agree", "required"],
    explanation: "The user is pressured to consent without a clear opt-out.",
    weight: 3
  },
  {
    name: "Guilt Tripping",
    keywords: ["no thanks", "i don't care", "miss out"],
    explanation: "Emotionally manipulative language is used to shame users.",
    weight: 4
  }
];

// ---------- AGE INDICATORS (Child-targeted) ----------
const ageIndicators = [
  "child", "children", "kid", "kids", "under 13", "under 16",
  "teen", "student", "school", "parental consent", "parent or guardian"
];

// ---------- UI ----------
function showWarning(foundText, pattern, confidence) {
  const box = document.createElement("div");

  box.className = "dark-pattern-warning";

  box.innerHTML = `
    <b>⚠️ Dark Pattern Detected</b><br><br>
    <b>Type:</b> ${pattern.name}<br>
    <b>Confidence:</b> ${confidence}%<br><br>
    <b>Why this is manipulative?</b><br>
    ${pattern.explanation}
  `;

  box.style.position = "fixed";
  box.style.bottom = "20px";
  box.style.right = "20px";
  box.style.background = "#111";
  box.style.color = "#fff";
  box.style.padding = "16px";
  box.style.borderRadius = "8px";
  box.style.zIndex = "999999";
  box.style.width = "280px";
  box.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
  box.style.fontFamily = "sans-serif";

  document.body.appendChild(box);

  // Auto-remove after 5 seconds
  setTimeout(() => box.remove(), 5000);
}

// ---------- CONFIDENCE CALCULATION ----------
function calculateConfidence(matchCount, weight, isChildTargeted) {
  let base = 50;
  base += matchCount * 10;
  base += weight * 5;
  if (isChildTargeted) base += 10; // boost confidence if targeting children
  return Math.min(base, 95);
}

// ---------- SCAN PAGE ----------
const warnedElements = new WeakSet();

function scanPage() {
  const elements = document.querySelectorAll("div, section, aside, dialog");

  elements.forEach(el => {
    if (warnedElements.has(el)) return; // skip already warned

    const style = window.getComputedStyle(el);
    if (!["fixed", "sticky"].includes(style.position)) return;

    const text = el.innerText?.toLowerCase();
    if (!text) return;

    // Check if element targets children
    const isChildTargeted = ageIndicators.some(indicator => text.includes(indicator));

    darkPatterns.forEach(pattern => {
      if (!Array.isArray(pattern.keywords)) return;

      // Count keyword matches
      const matchCount = pattern.keywords.filter(word => text.includes(word.toLowerCase())).length;

      if (matchCount > 0) {
        const confidence = calculateConfidence(matchCount, pattern.weight, isChildTargeted);

        // Show warning
        showWarning(text, pattern, confidence);

        // Mark element as warned
        warnedElements.add(el);
      }
    });
  });
}

// ---------- RUN CONTINUOUSLY ----------
setInterval(scanPage, 1500);
