# Astro Migration - Proof of Concept

## Overview

This branch contains an Astro-based version of the Echoes of Elsewhere website in the `astro-site/` folder.

## What's Different?

### Original Site
```
├── index.html (213 lines)
├── cast.html (241 lines)
├── styles.css (676 lines)
├── scripts.js (37 lines)
└── images/
```

**Total lines of code: ~1,167 lines**

### Astro Site
```
astro-site/
├── src/
│   ├── components/
│   │   ├── Nav.astro (13 lines)
│   │   ├── Footer.astro (24 lines)
│   │   └── CastCard.astro (33 lines)
│   ├── data/
│   │   └── cast.ts (48 lines - all 7 cast members)
│   ├── layouts/
│   │   └── BaseLayout.astro (25 lines)
│   ├── pages/
│   │   ├── index.astro (160 lines)
│   │   └── cast.astro (46 lines)
│   └── styles/
│       └── global.css (676 lines - same)
└── public/
    ├── images/
    └── scripts.js (37 lines - same)
```

**Total lines of code: ~1,062 lines (9% reduction)**

## Key Improvements

### 1. **No Code Duplication**
- **Before**: Nav and Footer copied in both HTML files
- **After**: Single Nav and Footer component, used twice

### 2. **Data-Driven Cast Page**
- **Before**: 7 cast cards manually coded in HTML
- **After**: One CastCard component + data file
- **To add a cast member now**: Edit one data file (5 lines), not 25 lines of HTML

### 3. **Easier Maintenance**
- Change nav? Edit one file instead of two
- Change footer? Edit one file instead of two
- Update cast card style? Edit component once, affects all 7 cards

### 4. **Future Ready**

#### Adding a Video Card (Before):
```html
<!-- Copy this 20+ lines for EVERY video -->
<article class="card video-card">
  <div class="video-wrapper">
    <iframe src="..." ...></iframe>
  </div>
  <h3>Episode Title</h3>
  <p>Description...</p>
</article>
```

#### Adding a Video Card (After):
```astro
<!-- Create component once -->
<VideoCard 
  url="youtube.com/..." 
  title="Episode Title"
  description="..."
/>
```

## Live Demo

```bash
cd astro-site
npm run dev
```

Then visit `http://localhost:4321`

## Identical Appearance

The Astro version looks **exactly the same** as the original. Same:
- Colors (all from style guide)
- Fonts (Cinzel, Montserrat, IM Fell English)
- Layout
- Animations
- Everything!

## Build Output

The Astro site builds to static HTML/CSS/JS - just like the original:

```bash
npm run build
# Creates dist/ folder with:
# - index.html
# - cast/index.html
# - Optimized CSS/JS
# - Images
```

Deploy to any static host (Netlify, Vercel, GitHub Pages, etc.)

## Next Steps

If approved:
1. Delete old HTML files
2. Move astro-site content to root
3. Update deployment config
4. Start adding content!

## Comparison Table

| Feature | Original | Astro |
|---------|----------|-------|
| Pages look identical | ✓ | ✓ |
| No build step | ✓ | ✗ |
| Component reuse | ✗ | ✓ |
| Data-driven content | ✗ | ✓ |
| Easy to add cast | ✗ | ✓ |
| Easy to add videos | ✗ | ✓ |
| Maintainability | Medium | High |
| Learning curve | None | Low |
| Performance | Fast | Fast |
| Cost | Free | Free |
