import React, { useState } from 'react'
import MoodSelector from './components/MoodSelector'
import DifficultySelector from './components/DifficultySelector'
import ProgressionDisplay from './components/ProgressionDisplay'
import { getProgression } from './utils/getProgression'

const MOOD_LABELS = {
  happy: 'Happy', sad: 'Sad', melancholic: 'Melancholic', dreamy: 'Dreamy',
  hopeful: 'Hopeful', romantic: 'Romantic', dark: 'Dark', energetic: 'Energetic',
  nostalgic: 'Nostalgic', ambient: 'Ambient', cinematic: 'Cinematic', uplifting: 'Uplifting',
  lofi: 'Lo-Fi', neosoul: 'Neo Soul', jazzlounge: 'Jazz Lounge', postrock: 'Post-Rock',
}

const DIFF_LABELS = {
  beginner: 'Beginner', intermediate: 'Intermediate', expert: 'Expert',
}

export default function App() {
  const [mood, setMood] = useState(null)
  const [difficulty, setDifficulty] = useState(null)
  const [progression, setProgression] = useState(null)
  const [error, setError] = useState(null)

  const canGenerate = mood && difficulty

  const handleGenerate = () => {
    if (!canGenerate) return
    setError(null)
    const result = getProgression(mood, difficulty)
    if (!result) {
      setError('No progression found for this combination. Try a different mood or difficulty.')
      return
    }
    setProgression(result)
  }

  const handleRegenerate = () => {
    handleGenerate()
  }

  const handleMoodChange = (newMood) => {
    setMood(newMood)
    setProgression(null)
    setError(null)
  }

  const handleDifficultyChange = (newDiff) => {
    setDifficulty(newDiff)
    setProgression(null)
    setError(null)
  }

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Header */}
      <header className="border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-sm font-bold">
              ♪
            </div>
            <div>
              <span className="font-bold text-white text-lg tracking-tight">ChordsForLife</span>
              <span className="hidden sm:inline text-zinc-600 text-sm ml-2">— Play by mood</span>
            </div>
          </div>
          <div className="text-xs text-zinc-600 font-mono">
            Mood + Difficulty = Music
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Hero */}
        {!progression && (
          <div className="text-center py-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-tight">
              What do you want to feel?
            </h1>
            <p className="text-zinc-500 text-base">
              Pick a mood and difficulty. Get a progression. Start playing.
            </p>
          </div>
        )}

        {/* Selectors */}
        <div className="space-y-6">
          <MoodSelector selected={mood} onSelect={handleMoodChange} />
          <DifficultySelector selected={difficulty} onSelect={handleDifficultyChange} />
        </div>

        {/* Generate button */}
        <div className="flex justify-center">
          <button
            onClick={handleGenerate}
            disabled={!canGenerate}
            className={`
              px-8 py-4 rounded-2xl font-semibold text-base
              transition-all duration-200 border
              ${canGenerate
                ? 'bg-indigo-600 hover:bg-indigo-500 border-indigo-500 text-white shadow-xl shadow-indigo-900/30 hover:shadow-indigo-900/50 hover:scale-[1.02] active:scale-[0.98]'
                : 'bg-zinc-900 border-zinc-800 text-zinc-600 cursor-not-allowed'
              }
            `}
          >
            {canGenerate
              ? `Generate ${MOOD_LABELS[mood]} ${DIFF_LABELS[difficulty]} Progression`
              : 'Select a mood and difficulty'
            }
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-900/20 border border-red-800/40 rounded-xl p-4 text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Result */}
        {progression && (
          <div className="border-t border-zinc-800 pt-8">
            <ProgressionDisplay
              progression={progression}
              onRegenerate={handleRegenerate}
              mood={MOOD_LABELS[mood]}
              difficulty={DIFF_LABELS[difficulty]}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-4 py-8 mt-8 border-t border-zinc-900">
        <p className="text-center text-zinc-700 text-xs">
          ChordsForLife — Discover chord progressions by mood · Built for guitarists
        </p>
      </footer>
    </div>
  )
}
