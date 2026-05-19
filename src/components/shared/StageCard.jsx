import React from 'react'

/**
 * StageCard — consistent card wrapper for every pipeline stage.
 *
 * Props:
 *   title     string  — section heading
 *   subtitle  string  — optional muted subtitle
 *   children  node    — content
 *   className string  — extra tailwind classes on the outer div
 */
export default function StageCard({ title, subtitle, children, className = '' }) {
  return (
    <div
      className={`rounded-xl border border-white/[0.07] bg-[#16161a] p-5 mb-5 ${className}`}
    >
      {(title || subtitle) && (
        <div className="mb-4">
          {title && (
            <h2
              className="text-sm font-semibold text-white/80"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-[12px] text-white/35 mt-0.5 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </div>
  )
}