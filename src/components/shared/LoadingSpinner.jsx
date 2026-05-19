import React from 'react'

export default function LoadingSpinner({ label = 'Loading…' }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-3 text-white/30">
      <div className="w-6 h-6 border-2 border-white/20 border-t-indigo-400 rounded-full animate-spin" />
      <span className="text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
        {label}
      </span>
    </div>
  )
}