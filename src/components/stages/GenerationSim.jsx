import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import StageCard from '../shared/StageCard'

const GENERATION_CORPUS = [
  "The", " model", " predicts", " each", " token", " one", " at", " a", " time",
  ",", " always", " conditioning", " on", " all", " previous", " context", ".",
  " This", " is", " called", " autoregressive", " generation", ".",
  " Temperature", " controls", " how", " random", " the", " sampling", " is",
  ":", " lower", " values", " make", " output", " more", " deterministic",
  ",", " higher", " values", " increase", " diversity", ".",
]

const TOKEN_COLORS = [
  { bg: '#e0e7ff', fg: '#3730a3' },
  { bg: '#d1fae5', fg: '#065f46' },
  { bg: '#fef3c7', fg: '#92400e' },
  { bg: '#fce7f3', fg: '#9d174d' },
  { bg: '#dbeafe', fg: '#1e40af' },
  { bg: '#dcfce7', fg: '#14532d' },
]

export default function GenerationSim() {
  const [temperature, setTemperature] = useState(0.7)
  const [generated, setGenerated] = useState([])
  const [running, setRunning] = useState(false)
  const intervalRef = useRef(null)
  const idxRef = useRef(0)

  function start() {
    if (running) return
    setRunning(true)
    idxRef.current = generated.length

    intervalRef.current = setInterval(() => {
      if (idxRef.current >= GENERATION_CORPUS.length) {
        clearInterval(intervalRef.current)
        setRunning(false)
        return
      }

      const tok = GENERATION_CORPUS[idxRef.current]
      // Simulate probability — randomness proportional to temperature
      const prob = Math.max(0.05, 1 - temperature * 0.4 + (Math.random() - 0.5) * temperature * 0.3)

      setGenerated((g) => [
        ...g,
        {
          text: tok,
          prob: Math.min(1, prob),
          id: idxRef.current,
        },
      ])
      idxRef.current++
    }, Math.max(60, 300 - temperature * 200))
  }

  function stop() {
    clearInterval(intervalRef.current)
    setRunning(false)
  }

  function reset() {
    stop()
    setGenerated([])
    idxRef.current = 0
  }

  useEffect(() => () => clearInterval(intervalRef.current), [])

  return (
    <div className="max-w-3xl mx-auto">
      {/* Controls */}
      <StageCard title="Generation settings">
        <div className="flex items-center gap-4">
          <label className="text-sm text-white/40 w-28 flex-shrink-0">
            Temperature
          </label>
          <input
            type="range"
            min={0}
            max={200}
            step={1}
            value={Math.round(temperature * 100)}
            onChange={(e) => setTemperature(Number(e.target.value) / 100)}
            className="flex-1 accent-indigo-400"
          />
          <span
            className="text-sm font-semibold text-white/70 w-12 text-right tabular-nums"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {temperature.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center gap-3 mt-1 text-[12px] text-white/30">
          <span>0.0 = deterministic</span>
          <span className="flex-1 border-t border-dashed border-white/10" />
          <span>2.0 = very random</span>
        </div>
      </StageCard>

      {/* Display */}
      <StageCard
        title="Token-by-token output"
        subtitle="Each token appears one at a time. Opacity reflects the model's confidence."
      >
        <div className="min-h-[100px] mb-4 flex flex-wrap gap-1 items-start content-start">
          <AnimatePresence>
            {generated.map((tok) => {
              const c = TOKEN_COLORS[tok.id % TOKEN_COLORS.length]
              return (
                <motion.span
                  key={tok.id}
                  initial={{ opacity: 0, y: 4, scale: 0.85 }}
                  animate={{ opacity: tok.prob, y: 0, scale: 1 }}
                  transition={{ duration: 0.15 }}
                  title={`Prob: ${(tok.prob * 100).toFixed(1)}%`}
                  className="tok-chip"
                  style={{ background: c.bg, color: c.fg, opacity: 0.4 + tok.prob * 0.6 }}
                >
                  {tok.text.replace(/ /g, '·')}
                </motion.span>
              )
            })}
          </AnimatePresence>

          {running && (
            <span className="inline-block w-2 h-4 bg-indigo-400 rounded-sm animate-pulse align-middle ml-0.5" />
          )}

          {generated.length === 0 && !running && (
            <span className="text-sm text-white/25 italic">Press generate to start…</span>
          )}
        </div>

        <div className="flex gap-2">
          <button
            onClick={running ? stop : start}
            className={`text-sm px-4 py-2 rounded-lg border transition-colors ${
              running
                ? 'bg-red-500/10 text-red-400 border-red-500/25 hover:bg-red-500/20'
                : 'bg-indigo-500/15 text-indigo-300 border-indigo-500/25 hover:bg-indigo-500/25'
            }`}
          >
            {running ? '⏸ Pause' : generated.length > 0 ? '▶ Continue' : '▶ Generate'}
          </button>
          <button
            onClick={reset}
            className="text-sm px-4 py-2 rounded-lg border border-white/[0.1] text-white/40 hover:text-white/70 transition-colors"
          >
            Reset
          </button>
          <span
            className="ml-auto text-[12px] text-white/30 self-center"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {generated.length} / {GENERATION_CORPUS.length} tokens
          </span>
        </div>
      </StageCard>

      {/* Explainer */}
      <StageCard title="How autoregressive generation works">
        <ol className="flex flex-col gap-3">
          {[
            'The model receives your input as a sequence of token IDs.',
            'It computes attention over all tokens, producing a probability distribution over the vocabulary (~100k entries).',
            'One token is sampled from this distribution. Temperature scales the logits before softmax — lower = peakier distribution.',
            'The new token is appended to the context, and the process repeats from step 2.',
            'Generation stops when the model outputs an end-of-sequence token, or a max-token limit is reached.',
          ].map((text, i) => (
            <li key={i} className="flex gap-3 text-sm text-white/55 leading-relaxed">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500/15 text-indigo-400 flex items-center justify-center text-[11px] font-semibold mt-0.5">
                {i + 1}
              </span>
              <span>{text}</span>
            </li>
          ))}
        </ol>
      </StageCard>
    </div>
  )
}