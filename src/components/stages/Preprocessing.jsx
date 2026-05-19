import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import usePipelineStore from '../../store/pipelineStore'
import StageCard from '../shared/StageCard'

function runPipeline(text) {
  const steps = [
    {
      id: 'original',
      label: 'Original input',
      description: 'Raw text as entered',
      transform: (t) => t,
    },
    {
      id: 'lowercase',
      label: 'Lowercase normalization',
      description: 'Some NLP pipelines normalise case. Note: real LLMs skip this.',
      transform: (t) => t.toLowerCase(),
    },
    {
      id: 'whitespace',
      label: 'Whitespace cleanup',
      description: 'Collapse runs of spaces/tabs. Leading/trailing spaces stripped.',
      transform: (t) => t.replace(/\s+/g, ' ').trim(),
    },
    {
      id: 'unicode',
      label: 'Unicode normalisation (NFC)',
      description: 'Compose unicode characters to canonical form.',
      transform: (t) => t.normalize('NFC'),
    },
    {
      id: 'punct',
      label: 'Punctuation handling (example)',
      description: 'Traditional NLP strips punctuation. LLMs keep it — this step is for comparison only.',
      transform: (t) => t.replace(/[.,!?;:'"()\[\]{}<>]/g, ''),
    },
  ]

  // Run the chain
  let current = text
  return steps.map((step) => {
    const output = step.transform(current)
    const changed = output !== current
    current = output
    return { ...step, output, changed }
  })
}

export default function Preprocessing() {
  const rawText = usePipelineStore((s) => s.rawText)
  const steps = useMemo(() => runPipeline(rawText), [rawText])

  return (
    <div className="max-w-3xl mx-auto">
      <StageCard
        title="Text preprocessing pipeline"
        subtitle="Shows common NLP transformations step-by-step. Green left border = this step changed the text."
      >
        {/* Pipeline breadcrumb */}
        <div className="flex items-center flex-wrap gap-1 text-[11px] mb-5 text-white/30">
          {steps.map((s, i) => (
            <React.Fragment key={s.id}>
              <span className={s.changed ? 'text-emerald-400/70' : ''}>{s.label}</span>
              {i < steps.length - 1 && <span className="text-white/15">→</span>}
            </React.Fragment>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06 }}
              className={`rounded-lg px-4 py-3 border-l-2 bg-[#0f0f12] ${
                step.changed
                  ? 'border-emerald-500/60'
                  : 'border-white/[0.06]'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-semibold text-white/50 uppercase tracking-wider">
                  {step.label}
                </span>
                {step.changed && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400">
                    changed
                  </span>
                )}
                {!step.changed && i > 0 && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-white/25">
                    no change
                  </span>
                )}
              </div>

              <div className="text-[11px] text-white/25 mb-2">{step.description}</div>

              <pre
                className="text-sm text-white/70 whitespace-pre-wrap break-all leading-relaxed"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {step.output.substring(0, 300)}
                {step.output.length > 300 && (
                  <span className="text-white/25">…</span>
                )}
              </pre>
            </motion.div>
          ))}
        </div>
      </StageCard>

      {/* Callout */}
      <StageCard title="Important note for students">
        <p className="text-sm text-white/55 leading-relaxed">
          Real LLMs like GPT-4, Claude, and Gemini{' '}
          <span className="text-white/80 font-medium">do not</span> strip punctuation
          or lowercase before tokenization. The BPE tokenizer operates directly on
          raw unicode bytes. The steps above model traditional NLP pipelines (e.g.
          scikit-learn, NLTK) to show the contrast — and to illustrate what each
          transformation does to the text.
        </p>
      </StageCard>
    </div>
  )
}