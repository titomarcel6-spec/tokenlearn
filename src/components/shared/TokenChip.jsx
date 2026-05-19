import React, { useState } from 'react'

/**
 * TokenChip
 * A single colored token badge.
 * The nth-child CSS palette is handled in index.css via .tok-chip:nth-child rules,
 * but we also accept an explicit colorIndex prop for programmatic control.
 *
 * Props:
 *   token        — { id: number, text: string }
 *   showId       — boolean (default false)  show token ID below text
 *   colorIndex   — number (0-5) override for palette slot
 */

const BG  = ['#e0e7ff','#d1fae5','#fef3c7','#fce7f3','#dbeafe','#dcfce7']
const FG  = ['#3730a3','#065f46','#92400e','#9d174d','#1e40af','#14532d']

export default function TokenChip({ token, showId = false, colorIndex }) {
  const [hovered, setHovered] = useState(false)
  const ci = colorIndex !== undefined ? colorIndex % 6 : undefined

  return (
    <span
      className="tok-chip"
      style={
        ci !== undefined
          ? { background: BG[ci], color: FG[ci] }
          : undefined
      }
      title={`Token ID: ${token.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Render spaces visibly as a middle-dot */}
      {token.text.replace(/ /g, '·')}
      {(showId || hovered) && (
        <span className="tok-id ml-1">{token.id}</span>
      )}
    </span>
  )
}