import React from 'react'
import { useLocation } from 'react-router-dom'
import usePipelineStore from '../../store/pipelineStore'
import { MODEL_LIST, formatCost } from '../../tokenizers/modelConfig'

const STAGE_TITLES = {
  '/input':         { title: 'Text input',      subtitle: 'Type or paste text to start the pipeline' },
  '/preprocessing': { title: 'Preprocessing',   subtitle: 'Step-by-step text cleaning before tokenization' },
  '/tokenization':  { title: 'Tokenization',    subtitle: 'How raw text becomes token IDs' },
  '/context':       { title: 'Context window',  subtitle: 'How tokens accumulate across a conversation' },
  '/cost':          { title: 'Cost estimator',  subtitle: 'Real API billing formulas, live' },
  '/generation':    { title: 'Generation sim',  subtitle: 'Autoregressive next-token prediction' },
}

export default function TopBar() {
  const location = useLocation()
  const stage = STAGE_TITLES[location.pathname] || STAGE_TITLES['/input']

  const tokenCount      = usePipelineStore((s) => s.tokens.length)
  const selectedModelId = usePipelineStore((s) => s.selectedModelId)
  const setSelectedModel = usePipelineStore((s) => s.setSelectedModel)
  const totalCostUSD    = usePipelineStore((s) => s.totalCostUSD)
  const contextUsedPct  = usePipelineStore((s) => s.contextUsedPct)

  return (
    <header className="flex items-center justify-between px-6 py-3 border-b border-white/[0.07] bg-[#0f0f12]/80 backdrop-blur sticky top-0 z-10">
      {/* Stage info */}
      <div>
        <h1
          className="text-base font-semibold leading-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {stage.title}
        </h1>
        <p className="text-[12px] text-white/35 mt-0.5">{stage.subtitle}</p>
      </div>

      {/* Live stats + model selector */}
      <div className="flex items-center gap-4">
        {/* Mini stat pills */}
        <div className="hidden sm:flex items-center gap-3 text-[12px]">
          <Pill label="tokens" value={tokenCount.toLocaleString()} />
          <Pill label="context" value={`${contextUsedPct.toFixed(2)}%`} />
          <Pill label="est. cost" value={formatCost(totalCostUSD)} highlight />
        </div>

        {/* Model selector */}
        <select
          value={selectedModelId}
          onChange={(e) => setSelectedModel(e.target.value)}
          className="text-[12px] bg-slate-900/90 border border-white/[0.12] rounded-lg px-3 py-1.5 text-white cursor-pointer hover:bg-slate-900 transition-colors outline-none focus:border-indigo-400/60"
          style={{ fontFamily: 'var(--font-mono)' }}
        >

          {MODEL_LIST.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name}{m.estimated ? ' ~' : ''}
            </option>
          ))}
        </select>
      </div>
    </header>
  )
}

function Pill({ label, value, highlight }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-white/30">{label}</span>
      <span
        className={
          highlight
            ? 'font-medium text-emerald-400'
            : 'font-medium text-white/70'
        }
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        {value}
      </span>
    </div>
  )
}