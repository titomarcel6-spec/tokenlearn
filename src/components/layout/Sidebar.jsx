import React from 'react'
import { NavLink } from 'react-router-dom'
import usePipelineStore from '../../store/pipelineStore'
import { BarChart3, DollarSign, Edit3, Puzzle, Settings, Zap } from 'lucide-react'

const STAGES = [
  { path: '/input',         label: 'Text input',      num: '01', icon: Edit3 },
  { path: '/preprocessing', label: 'Preprocessing',   num: '02', icon: Settings },
  { path: '/tokenization',  label: 'Tokenization',    num: '03', icon: Puzzle },
  { path: '/context',       label: 'Context window',  num: '04', icon: BarChart3 },
  { path: '/cost',          label: 'Cost estimator',  num: '05', icon: DollarSign },
  { path: '/generation',    label: 'Generation sim',  num: '06', icon: Zap },
]

export default function Sidebar() {
  const tokenCount = usePipelineStore((s) => s.tokens.length)
  const tokenizerReady = usePipelineStore((s) => s.tokenizerReady)

  return (
    <aside className="w-full md:w-52 flex-shrink-0 flex flex-col border-b border-white/[0.07] md:border-b-0 md:border-r bg-[#0b0b0e]">
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

      {/* Desktop navigation */}
      <nav className="hidden md:flex flex-1 flex-col py-3">
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
      <div className="hidden md:block px-4 py-4 border-t border-white/[0.07]">
        <p className="text-[11px] text-white/25 leading-relaxed">
          Text → Tokens → IDs → Context → Cost
        </p>
      </div>

      {/* Mobile bottom tab bar */}
      <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-white/[0.08] bg-[#0b0b0e]/95 backdrop-blur-md px-1 py-2 md:hidden">
        <div className="flex items-center justify-between gap-1 overflow-x-hidden px-1">
          {STAGES.map((stage) => (
            <NavLink
              key={stage.path}
              to={stage.path}
              className={({ isActive }) =>
                [
                  'flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2 text-[11px] transition-colors whitespace-nowrap',
                  isActive
                    ? 'bg-indigo-500/15 text-indigo-300'
                    : 'text-white/50 hover:text-white/80 hover:bg-white/[0.05]',
                ].join(' ')
              }
            >
              <stage.icon className="h-4 w-4" aria-hidden="true" />
              <span>{stage.num}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </aside>
  )
}