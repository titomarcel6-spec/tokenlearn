import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import usePipelineStore from '../../store/pipelineStore'
import StageCard from '../shared/StageCard'
import TokenChip from '../shared/TokenChip'
import { MODELS } from '../../tokenizers/modelConfig'

export default function Tokenization() {
  const tokens         = usePipelineStore((s) => s.tokens)
  const selectedModelId = usePipelineStore((s) => s.selectedModelId)
  const tokenizerReady  = usePipelineStore((s) => s.tokenizerReady)
  const model = MODELS[selectedModelId]

  const [showIds, setShowIds] = useState(false)

  // Build the integer ID array string for display
  const idArrayPreview = tokens
    .slice(0, 20)
    .map((t) => t.id)
    .join(', ')
  const hasMore = tokens.length > 20

  return (
    <div className="max-w-3xl mx-auto">
      {/* Controls */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-white/40">
          {tokens.length} tokens
          {model?.estimated && (
            <span className="ml-2 text-[11px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
              ≈ estimated for {model.name}
            </span>
          )}
        </div>
        <button
          onClick={() => setShowIds((v) => !v)}
          className="text-[12px] px-3 py-1.5 rounded-lg border border-white/[0.1] text-white/50 hover:text-white/80 hover:border-white/20 transition-colors"
        >
          {showIds ? 'Hide' : 'Show'} token IDs
        </button>
      </div>

      {/* Token chips */}
      <StageCard
        title="Token visualization"
        subtitle="Each colored badge is one token. Hover any badge to see its integer ID."
      >
        {tokens.length === 0 && (
          <p className="text-sm text-white/30 italic">No text entered yet.</p>
        )}
        <AnimatePresence mode="popLayout">
          <div className="flex flex-wrap gap-1.5">
            {tokens.map((tok, i) => (
              <motion.span
                key={`${tok.id}-${i}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.1, delay: Math.min(i * 0.005, 0.3) }}
              >
                <TokenChip token={tok} colorIndex={i} showId={showIds} />
              </motion.span>
            ))}
          </div>
        </AnimatePresence>
      </StageCard>

      {/* ID array */}
      <StageCard
        title="Token ID array"
        subtitle="What the model actually receives — a flat list of integers"
      >
        <div
          className="bg-[#0f0f12] rounded-lg p-4 text-sm text-indigo-300/80 leading-relaxed break-all"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          [&nbsp;
          {idArrayPreview}
          {hasMore && (
            <span className="text-white/25">
              {' '}… and {tokens.length - 20} more
            </span>
          )}
          &nbsp;]
        </div>
      </StageCard>

      {/* BPE explainer */}
      <StageCard title="How BPE tokenization works">
        <ol className="flex flex-col gap-3">
          {[
            { step: '1', text: 'Start with individual characters as the initial vocabulary.' },
            { step: '2', text: 'Count every adjacent pair of symbols in the training corpus.' },
            { step: '3', text: 'Merge the most frequent pair into a new single symbol.' },
            { step: '4', text: 'Repeat until the vocabulary reaches the target size (e.g. 100,276 for cl100k_base).' },
            { step: '5', text: 'At inference time, apply these learned merge rules greedily to encode any text.' },
          ].map((item) => (
            <li key={item.step} className="flex gap-3 text-sm text-white/55 leading-relaxed">
              <span
                className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500/15 text-indigo-400 flex items-center justify-center text-[11px] font-semibold mt-0.5"
              >
                {item.step}
              </span>
              <span>{item.text}</span>
            </li>
          ))}
        </ol>

        <div className="mt-4 text-[12px] text-white/30 border-t border-white/[0.06] pt-3">
          Result: common words like <code className="text-white/50" style={{fontFamily:'var(--font-mono)'}}>"the"</code> are a single token;
          rare words like <code className="text-white/50" style={{fontFamily:'var(--font-mono)'}}>
          "tokenization"</code> may split into 2–4 subword pieces.
        </div>
      </StageCard>
    </div>
  )
}