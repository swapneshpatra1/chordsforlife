# ChordMood

## Product Vision

ChordMood is a simple web application that helps beginner, intermediate, and advanced guitarists discover chord progressions based on the emotional feeling they want to create and the difficulty level they can comfortably play.

Most chord websites are built around music theory.

ChordMood is built around emotion.

The user should be able to select a mood, select a difficulty level, generate a progression, and start playing within 30 seconds.

---

# Problem Statement

Guitar players often:

* Play the same chord progressions repeatedly
* Struggle to translate emotions into chord choices
* Find music theory overwhelming
* Don't know which chords fit a specific mood
* Want inspiration without spending hours searching

Existing tools are often:

* Too technical
* Too complex
* Focused on scales and theory
* Missing clear visual chord diagrams

ChordMood simplifies this process.

---

# Target Audience

## Beginner Guitarists

Need:

* Easy progressions
* Open chords
* Visual chord diagrams

## Intermediate Guitarists

Need:

* More colorful harmony
* New chord vocabulary
* Better songwriting inspiration

## Advanced Guitarists

Need:

* Jazz harmony
* Neo-soul voicings
* Extended chords
* Sophisticated progressions

---

# Core Concept

The application works using:

**Mood + Difficulty = Chord Progression**

Examples:

### Dreamy + Beginner

Output:

C → G → Am → F

### Dreamy + Intermediate

Output:

Cmaj7 → Gadd9 → Em7 → D

### Dreamy + Expert

Output:

Cmaj9 → G13 → Em11 → Dmaj9

### Sad + Beginner

Output:

Am → F → C → G

### Sad + Intermediate

Output:

Am7 → Fmaj7 → C → Gsus2

### Sad + Expert

Output:

Am9 → Fmaj7#11 → Cmaj9 → G13

Difficulty should change the harmonic complexity.

Mood should change the emotional character.

Both inputs must influence the result.

---

# Supported Moods

* Happy
* Sad
* Melancholic
* Dreamy
* Hopeful
* Romantic
* Dark
* Energetic
* Nostalgic
* Ambient
* Cinematic
* Uplifting
* Lo-Fi
* Neo Soul
* Jazz Lounge
* Post-Rock

---

# Supported Difficulty Levels

## Beginner

Use:

* Open chords
* Common pop progressions
* Easy transitions
* No barre chords

Examples:

* C
* G
* D
* Em
* Am
* F

---

## Intermediate

Use:

* Barre chords
* Seventh chords
* Suspended chords
* Add9 chords
* More colorful harmony

Examples:

* Bm
* F#m
* Dadd9
* Cmaj7
* Asus2
* G7

---

## Expert

Use:

* Extended chords
* Jazz harmony
* Neo-soul voicings
* Chord substitutions
* Altered chords
* Modal interchange
* Sophisticated voice leading

Examples:

* Cmaj9
* Em11
* G13
* D7#9
* Bbmaj7#11
* A13
* F#m7b5
* E7alt

Expert progressions should sound rich, modern, cinematic, jazz-inspired, fusion-inspired, or neo-soul inspired.

---

# MVP Features

## Progression Generator

### Inputs

* Mood
* Difficulty

### Outputs

* Chord progression
* Chord diagrams
* Chord notes
* Suggested strumming pattern
* Explanation of why the progression matches the chosen mood

---

## Chord Diagram Viewer

Every generated chord should display:

* Chord name
* Fretboard diagram
* Notes within the chord

---

## Regenerate Progression

Generate a different progression while keeping the same mood and difficulty.

---

## Copy Progression

One-click copy functionality.

---

## Mobile Responsive

The application should be optimized for mobile-first use.

Many users will access the app while holding a guitar.

---

# Data Structure

Use a predefined progression library.

Example:

dreamy

* beginner
* intermediate
* expert

sad

* beginner
* intermediate
* expert

ambient

* beginner
* intermediate
* expert

Do not use AI generation in MVP.

Use curated progressions first.

AI generation can be introduced in a future version.

---

# Design Principles

The product should feel:

* Simple
* Fast
* Inspiring
* Modern
* Musician-focused

Avoid:

* Music theory overload
* Excessive settings
* Technical jargon

The experience should feel closer to Spotify than a music theory textbook.

---

# Technical Stack

Frontend:

* React
* Vite
* Tailwind CSS

Hosting:

* Vercel

Version 1:

* No backend required

Version 2:

* Firebase
* User accounts
* Saved progressions
* Favorites

---

# Success Metric

A user can discover a progression they enjoy and begin playing it within 30 seconds of landing on the website.
