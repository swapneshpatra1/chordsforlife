import React from 'react'

const DIFFICULTIES = [
  {
    id: 'beginner',
    label: 'Beginner',
    description: 'Open chords, easy transitions',
    icon: '○',
  },
  {
    id: 'intermediate',
    label: 'Intermediate',
    description: 'Barre chords, 7ths, sus chords',
    icon: '◑',
  },
  {
    id: 'expert',
    label: 'Expert',
    description: 'Jazz, extended, neo-soul voicings',
    icon: '●',
  },
]

function DifficultySelector({ selected, onSelect }) {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">
        Difficulty
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {DIFFICULTIES.map((diff) => {
          const isSelected = selected === diff.id
          return (
            <button
              key={diff.id}
              onClick={() => onSelect(diff.id)}
              className={`
                flex flex-col gap-1 p-4 rounded-xl border text-left
                transition-all duration-150 cursor-pointer
                ${isSelected
                  ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-900/40'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200 hover:bg-zinc-800'
                }
              `}
            >
              <span className={`text-lg font-mono ${isSelected ? 'text-white' : 'text-indigo-400'}`}>
                {diff.icon}
              </span>
              <span className="text-sm font-semibold">{diff.label}</span>
              <span className={`text-xs leading-snug ${isSelected ? 'text-indigo-200' : 'text-zinc-600'}`}>
                {diff.description}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default DifficultySelector
