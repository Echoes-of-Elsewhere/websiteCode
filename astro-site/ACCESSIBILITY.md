# Checking accessibility (ADA / WCAG)

Use any of these to catch critical issues. Running more than one gives better coverage.

## 1. Lighthouse (easiest, no install)

1. Build and preview the site: `npm run build && npm run preview` (or open your staging/production URL).
2. Open the site in **Chrome**.
3. Open DevTools (**F12** or right‑click → Inspect).
4. Go to the **Lighthouse** tab.
5. Select **Accessibility** only (or run all and check the Accessibility score).
6. Click **Analyze page load** (or **Analyze**).
7. Fix any **Critical** or **Serious** issues; use the report’s links and docs for guidance.

Lighthouse covers many WCAG 2.1 issues (contrast, labels, ARIA, focus, etc.) and is a good first pass.

## 2. axe DevTools (browser extension)

1. Install **[axe DevTools](https://www.deque.com/axe/devtools/)** (Chrome or Edge).
2. Open your site, open DevTools, go to the **axe DevTools** tab.
3. Click **Scan ALL of my page** (or scan a portion).
4. Review **Violations** (and **Passes** / **Incomplete** as needed). Fix violations, especially **Critical** and **Serious**.

axe is widely used and aligns with WCAG 2.1 Level A/AA.

## 3. WAVE (browser extension or web tool)

1. Install **[WAVE](https://wave.webaim.org/extension/)** or use the [web form](https://wave.webaim.org/) and enter your URL.
2. Run the evaluation and fix **Errors** first, then **Contrast errors** and **Alerts** as needed.

Good for visual feedback (icons on the page) and contrast/structural issues.

## 4. Automated check from the command line (optional)

After building and previewing the site, run Lighthouse (accessibility only) from the CLI. It uses its own browser, so no Chrome/ChromeDriver version issues.

**Single page (homepage only):**

```bash
# Terminal 1: serve the built site
npm run build && npm run preview

# Terminal 2
npm run check:a11y
```

Opens `a11y-report.html` (homepage only).

**All main pages (home, cast, contact):**

```bash
npm run check:a11y:all
```

(With `npm run preview` already running.) Writes:

- `a11y-report.html` — homepage
- `a11y-report-cast.html` — Meet the Cast
- `a11y-report-contact.html` — Contact

Open each in a browser to see the report. To test a live URL instead, run Lighthouse with that URL and `--only-categories=accessibility --output=html --output-path=./a11y-report.html`.

## Quick checklist (manual)

- [ ] All images have meaningful `alt` text (or `alt=""` when decorative).
- [ ] Page has a unique, descriptive `<title>` and one main `<h1>`.
- [ ] Form inputs have visible `<label>`s (or `aria-label`/`aria-labelledby` where appropriate).
- [ ] Focus order and focus visibility make sense (tab through the page, no keyboard traps).
- [ ] Color contrast meets WCAG AA (e.g. text and buttons); use Lighthouse or WAVE to verify.
- [ ] Interactive elements are keyboard-usable and have visible focus styles.
- [ ] Skip link or logical heading structure so screen‑reader users can navigate (we have nav and sections).

Running Lighthouse + axe (or WAVE) and fixing Critical/Serious issues will address most automated checks needed for a solid ADA-style review.
