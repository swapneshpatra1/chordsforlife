import React, { useState } from 'react'
import ChordDiagram from './ChordDiagram'
import { CHORDS } from '../data/chords'

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const el = document.createElement('textarea')
      el.value = text
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
        border transition-all duration-150
        ${copied
          ? 'bg-emerald-600/20 border-emerald-500/40 text-emerald-400'
          : 'bg-zinc-800 border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white'
        }
      `}
    >
      {copied ? (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Copied!
        </>
      ) : (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Copy
        </>
      )}
    </button>
  )
}

function ProgressionDisplay({ progression, onRegenerate, mood, difficulty }) {
  if (!progression) return null

  const { chords, key, strumming, explanation } = progression
  const progressionText = chords.join(' → ')
  const chordData = chords.map(name => CHORDS[name] || { name, frets: [], notes: [] })

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header row */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-medium text-indigo-400 uppercase tracking-widest">
              {mood} · {difficulty}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {progressionText}
          </h2>
          <p className="text-sm text-zinc-500 mt-1">Key of {key}</p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <CopyButton text={progressionText} />
          <button
            onClick={onRegenerate}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
              bg-indigo-600 hover:bg-indigo-500 text-white border border-indigo-500
              transition-all duration-150"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Regenerate
          </button>
        </div>
      </div>

      {/* Chord diagrams */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {chordData.map((chord, i) => (
          <div
            key={`${chord.name}-${i}`}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex flex-col items-center"
          >
            <ChordDiagram chord={chord} />
          </div>
        ))}
      </div>

      {/* Strumming pattern */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-2">
          <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Strumming Pattern
          </span>
        </div>
        <p className="font-mono text-lg text-indigo-300 tracking-widest">{strumming}</p>
        <p className="text-xs text-zinc-600 mt-1">D = Down strum · U = Up strum</p>
      </div>

      {/* Explanation */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-2">
          <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Why This Works
          </span>
        </div>
        <p className="text-zinc-300 text-sm leading-relaxed">{explanation}</p>
      </div>
    </div>
  )
}

export default ProgressionDisplay
