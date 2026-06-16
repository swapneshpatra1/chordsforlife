import React from 'react'

const MOODS = [
  { id: 'happy', label: 'Happy', emoji: '☀️' },
  { id: 'sad', label: 'Sad', emoji: '🌧️' },
  { id: 'melancholic', label: 'Melancholic', emoji: '🌫️' },
  { id: 'dreamy', label: 'Dreamy', emoji: '🌙' },
  { id: 'hopeful', label: 'Hopeful', emoji: '🌅' },
  { id: 'romantic', label: 'Romantic', emoji: '🌹' },
  { id: 'dark', label: 'Dark', emoji: '🖤' },
  { id: 'energetic', label: 'Energetic', emoji: '⚡' },
  { id: 'nostalgic', label: 'Nostalgic', emoji: '📷' },
  { id: 'ambient', label: 'Ambient', emoji: '🌊' },
  { id: 'cinematic', label: 'Cinematic', emoji: '🎬' },
  { id: 'uplifting', label: 'Uplifting', emoji: '🚀' },
  { id: 'lofi', label: 'Lo-Fi', emoji: '📻' },
  { id: 'neosoul', label: 'Neo Soul', emoji: '🎷' },
  { id: 'jazzlounge', label: 'Jazz Lounge', emoji: '🎹' },
  { id: 'postrock', label: 'Post-Rock', emoji: '🏔️' },
]

function MoodSelector({ selected, onSelect }) {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">
        Mood
      </h2>
      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-2">
        {MOODS.map((mood) => {
          const isSelected = selected === mood.id
          return (
            <button
              key={mood.id}
              onClick={() => onSelect(mood.id)}
              className={`
                flex flex-col items-center justify-center gap-1.5 p-2.5 rounded-xl
                border text-center transition-all duration-150 cursor-pointer
                ${isSelected
                  ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-900/40'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200 hover:bg-zinc-800'
                }
              `}
            >
              <span className="text-xl leading-none">{mood.emoji}</span>
              <span className="text-xs font-medium leading-tight">{mood.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default MoodSelector
