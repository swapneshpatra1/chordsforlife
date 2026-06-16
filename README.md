# ChordsForLife

Discover chord progressions by mood. Built for guitarists who feel music first.

**Mood + Difficulty = Progression**

---

## What It Does

Select a mood (Happy, Dreamy, Dark, Jazz Lounge, etc.) and a difficulty level (Beginner, Intermediate, Expert). Click Generate. Instantly receive:

- A curated chord progression
- Visual fretboard diagrams for every chord
- Chord notes
- A suggested strumming pattern
- An explanation of why the progression matches the mood

---

## Folder Structure

```
chordsforlife/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ChordDiagram.jsx       # SVG fretboard visualizer
│   │   ├── DifficultySelector.jsx # Beginner / Intermediate / Expert picker
│   │   ├── MoodSelector.jsx       # 16-mood grid
│   │   └── ProgressionDisplay.jsx # Full result view (diagrams, strumming, explanation)
│   ├── data/
│   │   ├── chords.js              # Chord fingering database (59 chords)
│   │   └── progressions.js        # Curated library: 16 moods × 3 difficulties × 3 options
│   ├── utils/
│   │   └── getProgression.js      # Random selection with no-repeat logic
│   ├── App.jsx                    # Root component and state
│   ├── index.css                  # Tailwind directives + base styles
│   └── main.jsx                   # React entry point
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## Run Locally

```bash
# Install dependencies
npm install

# Start dev server (opens on http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Node 18+ required.

---

## Deploy to Vercel

### Option 1 — Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Vite and sets the build command to `npm run build` with output directory `dist`.

### Option 2 — Vercel Dashboard

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and click **Add New Project**
3. Import the GitHub repo
4. Framework Preset: **Vite** (auto-detected)
5. Click **Deploy**

No environment variables needed. No backend required.

---

## Supported Moods

Happy · Sad · Melancholic · Dreamy · Hopeful · Romantic · Dark · Energetic · Nostalgic · Ambient · Cinematic · Uplifting · Lo-Fi · Neo Soul · Jazz Lounge · Post-Rock

## Supported Difficulty Levels

| Level | What You Get |
|-------|-------------|
| Beginner | Open chords, no barre chords, easy transitions |
| Intermediate | Barre chords, 7ths, sus2/4, add9 voicings |
| Expert | Extended chords (9th, 11th, 13th), jazz harmony, neo-soul voicings, altered dominants |

---

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- No backend, no database, no AI APIs
