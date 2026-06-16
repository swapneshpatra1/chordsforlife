import { PROGRESSIONS } from '../data/progressions'

const usedIndices = {}

export function getProgression(mood, difficulty) {
  const moodData = PROGRESSIONS[mood]
  if (!moodData) return null

  const diffData = moodData[difficulty]
  if (!diffData || !diffData.length) return null

  const key = `${mood}-${difficulty}`
  if (!usedIndices[key]) usedIndices[key] = []

  // Try to avoid repeating progressions until all have been shown
  let available = diffData
    .map((_, i) => i)
    .filter(i => !usedIndices[key].includes(i))

  if (!available.length) {
    usedIndices[key] = []
    available = diffData.map((_, i) => i)
  }

  const idx = available[Math.floor(Math.random() * available.length)]
  usedIndices[key].push(idx)

  return diffData[idx]
}

export function resetHistory(mood, difficulty) {
  const key = `${mood}-${difficulty}`
  usedIndices[key] = []
}
