import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import usePipelineStore from '../../store/pipelineStore'

const STAGES = [
  { path: '/input',         label: 'Text input',      num: '01', icon: '✏️' },
  { path: '/preprocessing', label: 'Preprocessing',   num: '02', icon: '⚙️' },
  { path: '/tokenization',  label: 'Tokenization',    num: '03', icon: '🧩' },
  { path: '/context',       label: 'Context window',  num: '04', icon: '📊' },
  { path: '/cost',          label: 'Cost estimator',  num: '05', icon: '💰' },
  { path: '/generation',    label: 'Generation sim',  num: '06', icon: '⚡' },
]

export default function Sidebar() {
  const tokenCount = usePipelineStore((s) => s.tokens.length)
  const tokenizerReady = usePipelineStore((s) => s.tokenizerReady)

  return (
    <aside className="w-52 flex-shrink-0 flex flex-col border-r border-white/[0.07] bg-[#0b0b0e]">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-white/[0.07]">
        <span
          className="text-base font-semibold tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Token<span className="text-indigo-400">Learn</span>
        </span>
        <div className="text-[11px] text-white/30 mt-0.5">
          {tokenizerReady
            ? `tiktoken ready · ${tokenCount} tokens`
            : 'Loading tokenizer…'}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-3">
        <div className="px-4 mb-2 text-[10px] font-medium text-white/25 uppercase tracking-widest">
          Pipeline
        </div>
        {STAGES.map((stage) => (
          <NavLink
            key={stage.path}
            to={stage.path}
            className={({ isActive }) =>
              [
                'flex items-center gap-3 px-4 py-2.5 text-sm transition-colors',
                isActive
                  ? 'bg-indigo-500/10 text-indigo-300 border-l-2 border-indigo-400'
                  : 'text-white/50 hover:text-white/80 hover:bg-white/[0.03] border-l-2 border-transparent',
              ].join(' ')
            }
          >
            <span className="text-[10px] font-mono text-white/20 w-5 flex-shrink-0">
              {stage.num}
            </span>
            <span>{stage.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer hint */}
      <div className="px-4 py-4 border-t border-white/[0.07]">
        <p className="text-[11px] text-white/25 leading-relaxed">
          Text → Tokens → IDs → Context → Cost
        </p>
      </div>
    </aside>
  )
}