import React from 'react'

const STRING_NAMES = ['E', 'A', 'D', 'G', 'B', 'e']

function ChordDiagram({ chord }) {
  if (!chord) return null

  const { frets, barre, name, notes } = chord
  const validFrets = frets.filter(f => f > 0)
  const minFret = validFrets.length ? Math.min(...validFrets) : 1
  const maxFret = validFrets.length ? Math.max(...validFrets) : 4
  const startFret = maxFret > 4 ? minFret : 1
  const numFrets = 4

  const CELL_W = 30
  const CELL_H = 28
  const LEFT_PAD = 22
  const TOP_PAD = 30
  const NUT_H = 5
  const svgW = LEFT_PAD + CELL_W * 5 + 14
  const svgH = TOP_PAD + NUT_H + CELL_H * numFrets + 14

  const stringX = (stringIndex) => LEFT_PAD + stringIndex * CELL_W
  const fretY = (fret) => TOP_PAD + NUT_H + (fret - startFret) * CELL_H + CELL_H / 2

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-sm font-semibold text-zinc-300 text-center">{name}</div>

      <svg width={svgW} height={svgH} className="overflow-visible">
        {/* Nut or position marker */}
        {startFret === 1 ? (
          <rect
            x={LEFT_PAD - 1}
            y={TOP_PAD}
            width={CELL_W * 5 + 2}
            height={NUT_H}
            rx={2}
            fill="#a1a1aa"
          />
        ) : (
          <text
            x={LEFT_PAD - 4}
            y={TOP_PAD + NUT_H + CELL_H / 2}
            textAnchor="end"
            dominantBaseline="middle"
            fontSize={9}
            fill="#71717a"
          >
            {startFret}fr
          </text>
        )}

        {/* Fret lines */}
        {Array.from({ length: numFrets + 1 }).map((_, i) => (
          <line
            key={`fret-${i}`}
            x1={LEFT_PAD}
            y1={TOP_PAD + NUT_H + i * CELL_H}
            x2={LEFT_PAD + CELL_W * 5}
            y2={TOP_PAD + NUT_H + i * CELL_H}
            stroke="#3f3f46"
            strokeWidth={1}
          />
        ))}

        {/* String lines */}
        {frets.map((_, si) => (
          <line
            key={`str-${si}`}
            x1={stringX(si)}
            y1={TOP_PAD}
            x2={stringX(si)}
            y2={TOP_PAD + NUT_H + CELL_H * numFrets}
            stroke="#52525b"
            strokeWidth={1.2}
          />
        ))}

        {/* Barre */}
        {barre && barre.fret >= startFret && barre.fret < startFret + numFrets && (() => {
          const fromIdx = 6 - barre.fromString
          const toIdx = 6 - barre.toString
          const x1 = stringX(Math.min(fromIdx, toIdx))
          const x2 = stringX(Math.max(fromIdx, toIdx))
          const y = fretY(barre.fret)
          return (
            <rect
              key="barre"
              x={x1 - 7}
              y={y - 7}
              width={x2 - x1 + 14}
              height={14}
              rx={7}
              fill="#6366f1"
              opacity={0.85}
            />
          )
        })()}

        {/* Finger dots */}
        {frets.map((fret, si) => {
          if (fret <= 0) return null
          if (barre && fret === barre.fret) return null
          if (fret < startFret || fret >= startFret + numFrets) return null
          return (
            <circle
              key={`dot-${si}`}
              cx={stringX(si)}
              cy={fretY(fret)}
              r={7}
              fill="#6366f1"
            />
          )
        })}

        {/* Open / muted indicators above nut */}
        {frets.map((fret, si) => {
          if (fret > 0) return null
          const cx = stringX(si)
          const cy = TOP_PAD - 10
          if (fret === 0) {
            return (
              <circle
                key={`open-${si}`}
                cx={cx}
                cy={cy}
                r={5}
                fill="none"
                stroke="#a1a1aa"
                strokeWidth={1.5}
              />
            )
          }
          return (
            <text
              key={`mute-${si}`}
              x={cx}
              y={cy + 4}
              textAnchor="middle"
              fontSize={12}
              fill="#52525b"
              fontWeight="bold"
            >
              ×
            </text>
          )
        })}
      </svg>

      {/* Notes */}
      <div className="flex flex-wrap justify-center gap-1 mt-1">
        {notes.map((note) => (
          <span
            key={note}
            className="text-xs px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 font-mono"
          >
            {note}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ChordDiagram
