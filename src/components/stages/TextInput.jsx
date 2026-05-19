import React, { useCallback } from 'react'
import { motion } from 'framer-motion'
import usePipelineStore from '../../store/pipelineStore'
import StageCard from '../shared/StageCard'
import TokenChip from '../shared/TokenChip'
import { MODELS, formatCost } from '../../tokenizers/modelConfig'

const EXAMPLE_TEXTS = [
  { label: 'Simple sentence', text: "Hello, world! 🌍 Let's tokenize this." },
  { label: 'Contraction splitting', text: "Don't, can't, won't — contractions often split." },
  { label: 'Code snippet', text: 'def greet(name: str) -> str:\n    return f"Hello, {name}!"' },
  { label: 'Multilingual', text: 'English: Hello | Japanese: こんにちは | Arabic: مرحبا' },
  { label: 'Emojis', text: '🎉🚀🌈🦄 Emojis take multiple tokens!' },
]

export default function TextInput() {
  const rawText        = usePipelineStore((s) => s.rawText)
  const setRawText     = usePipelineStore((s) => s.setRawText)
  const tokens         = usePipelineStore((s) => s.tokens)
  const tokenizerReady = usePipelineStore((s) => s.tokenizerReady)
  const selectedModelId = usePipelineStore((s) => s.selectedModelId)
  const totalCostUSD   = usePipelineStore((s) => s.totalCostUSD)
  const contextUsedPct = usePipelineStore((s) => s.contextUsedPct)

  const model = MODELS[selectedModelId]

  const handleChange = useCallback(
    (e) => setRawText(e.target.value),
    [setRawText]
  )

  // Show at most 120 chips to keep DOM snappy
  const visibleTokens = tokens.slice(0, 120)
  const overflow = tokens.length - visibleTokens.length

  return (
    <div className="max-w-3xl mx-auto">
      {/* Stats row */}
      <div className="grid grid-cols-4 gap-3 mb-5">
        {[
          { label: 'Tokens',      value: tokens.length.toLocaleString() },
          { label: 'Characters',  value: rawText.length.toLocaleString() },
          { label: 'Context',     value: `${contextUsedPct.toFixed(3)}%` },
          { label: 'Input cost',  value: formatCost(totalCostUSD), accent: true },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-[#16161a] border border-white/[0.07] rounded-xl px-4 py-3"
          >
            <div className="text-[11px] text-white/30 mb-1">{stat.label}</div>
            <div
              className={`text-xl font-semibold tabular-nums ${stat.accent ? 'text-emerald-400' : 'text-white/80'}`}
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      {/* Text area */}
      <StageCard
        title="Your text"
        subtitle={
          tokenizerReady
            ? `Tokenized with tiktoken cl100k_base · ${model?.name ?? ''}`
            : 'Loading tiktoken WASM tokenizer…'
        }
      >
        <textarea
          value={rawText}
          onChange={handleChange}
          rows={6}
          placeholder="Type or paste any text…"
          className="w-full bg-[#0f0f12] border border-white/[0.07] rounded-lg px-4 py-3 text-sm text-white/80 resize-none outline-none focus:border-indigo-400/40 transition-colors leading-relaxed"
          style={{ fontFamily: 'var(--font-mono)' }}
          spellCheck={false}
        />

        {/* Example buttons */}
        <div className="flex flex-wrap gap-2 mt-3">
          {EXAMPLE_TEXTS.map((ex) => (
            <button
              key={ex.label}
              onClick={() => setRawText(ex.text)}
              className="text-[11px] px-3 py-1 rounded-full border border-white/[0.1] text-white/40 hover:text-white/70 hover:border-white/20 transition-colors"
            >
              {ex.label}
            </button>
          ))}
        </div>
      </StageCard>

      {/* Token preview */}
      <StageCard
        title="Token preview"
        subtitle="Each colored chip = 1 token. Hover to see the token ID. Spaces shown as ·"
      >
        {tokens.length === 0 && (
          <p className="text-sm text-white/30 italic">Start typing above…</p>
        )}

        <motion.div
          className="flex flex-wrap gap-1.5"
          layout
        >
          {visibleTokens.map((tok, i) => (
            <motion.span
              key={`${tok.id}-${i}`}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.12, delay: Math.min(i * 0.008, 0.4) }}
            >
              <TokenChip token={tok} colorIndex={i} />
            </motion.span>
          ))}
          {overflow > 0 && (
            <span className="text-[12px] text-white/30 self-center ml-1">
              +{overflow} more
            </span>
          )}
        </motion.div>

        {/* Key insight callout */}
        {tokens.length > 0 && (
          <div className="mt-4 rounded-lg bg-indigo-500/5 border border-indigo-500/20 px-4 py-3">
            <p className="text-[12px] text-indigo-300/80 leading-relaxed">
              <span className="font-semibold">Key insight: </span>
              The model never sees "{rawText.slice(0, 30)}
              {rawText.length > 30 ? '…' : ''}". It receives an integer array like{' '}
              <code
                className="text-indigo-200 text-[11px]"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                [{tokens.slice(0, 5).map((t) => t.id).join(', ')}
                {tokens.length > 5 ? ', …' : ''}]
              </code>
            </p>
          </div>
        )}
      </StageCard>
    </div>
  )
}