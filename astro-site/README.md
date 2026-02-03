# Echoes of Elsewhere - Astro Version

This is the Astro-based version of the Echoes of Elsewhere podcast website.

## What Changed?

### Benefits of Astro
- **No duplication**: Nav and Footer are components, used once
- **Easy content management**: Cast members stored in `src/data/cast.ts`
- **Component reusability**: CastCard component used for all 7 cast members
- **Same look**: Identical styling to the original HTML version
- **Ready for videos**: Easy to add VideoCard components in the future

### Project Structure

```
astro-site/
├── public/               # Static assets (images, scripts)
│   ├── images/
│   └── scripts.js
├── src/
│   ├── components/       # Reusable components
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   └── CastCard.astro
│   ├── data/            # Content data files
│   │   └── cast.ts
│   ├── layouts/         # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/           # Routes (become URLs)
│   │   ├── index.astro  → /
│   │   └── cast.astro   → /cast
│   └── styles/
│       └── global.css
```

## Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Adding Content

### Add a new cast member:
Edit `src/data/cast.ts` and add to the array:

```ts
{
  name: "New Person",
  role: "as Character Name",
  bio: "Optional bio",
  website: "https://...",
  social: "https://..."
}
```

### Add a video card (future):
Create `src/components/VideoCard.astro` and use it anywhere!

## Deployment

This builds to static HTML/CSS/JS - deploy anywhere:
- Netlify
- Vercel  
- GitHub Pages
- Any static host
