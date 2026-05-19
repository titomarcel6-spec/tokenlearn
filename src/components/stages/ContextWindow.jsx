import React, { useState } from 'react'
import { motion } from 'framer-motion'
import usePipelineStore from '../../store/pipelineStore'
import StageCard from '../shared/StageCard'
import { MODELS } from '../../tokenizers/modelConfig'

export default function ContextWindow() {
  const tokens          = usePipelineStore((s) => s.tokens)
  const selectedModelId = usePipelineStore((s) => s.selectedModelId)
  const contextUsedPct  = usePipelineStore((s) => s.contextUsedPct)
  const model = MODELS[selectedModelId]

  // Simulate conversation accumulation
  const [messages, setMessages] = useState([])
  const [simTokens, setSimTokens] = useState(tokens.length)

  const totalSimTokens = simTokens
  const simPct = Math.min(100, (totalSimTokens / model.contextWindow) * 100)
  const isOverflow = totalSimTokens > model.contextWindow

  function addMessage() {
    const msgTokens = Math.floor(Math.random() * 120) + 30
    setMessages((m) => [
      ...m,
      {
        role: m.length % 2 === 0 ? 'user' : 'assistant',
        tokens: msgTokens,
        id: Date.now(),
      },
    ])
    setSimTokens((n) => n + msgTokens)
  }

  function resetSim() {
    setMessages([])
    setSimTokens(tokens.length)
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Model comparison */}
      <div className="grid grid-cols-2 gap-3 mb-5 sm:grid-cols-4">
        {Object.values(MODELS).map((m) => {
          const pct = Math.min(100, (tokens.length / m.contextWindow) * 100)
          const isSelected = m.id === selectedModelId
          return (
            <div
              key={m.id}
              className={`rounded-xl border p-3 ${
                isSelected
                  ? 'border-indigo-400/40 bg-indigo-500/5'
                  : 'border-white/[0.07] bg-[#16161a]'
              }`}
            >
              <div className="text-[11px] text-white/40 mb-1">{m.name}</div>
              <div
                className="text-base font-semibold text-white/70 tabular-nums"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {(m.contextWindow / 1000).toFixed(0)}k
              </div>
              <div className="mt-2 h-1 rounded-full bg-white/[0.06] overflow-hidden">
                <div
                  className="h-full rounded-full bg-indigo-400"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <div className="text-[10px] text-white/25 mt-1">{pct.toFixed(3)}% used</div>
            </div>
          )
        })}
      </div>

      {/* Main bar */}
      <StageCard
        title={`Context window — ${model.name}`}
        subtitle={`Max: ${model.contextWindow.toLocaleString()} tokens · Currently: ${totalSimTokens.toLocaleString()} tokens used`}
      >
        <div className="mb-1 flex justify-between text-[11px] text-white/30">
          <span>0</span>
          <span>{(model.contextWindow / 2).toLocaleString()}</span>
          <span>{model.contextWindow.toLocaleString()}</span>
        </div>

        <div className="relative h-8 rounded-lg bg-[#0f0f12] border border-white/[0.07] overflow-hidden">
          <motion.div
            className={`h-full rounded-lg ${isOverflow ? 'bg-red-500/70' : 'bg-indigo-500/70'}`}
            animate={{ width: `${simPct}%` }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          />
          <div className="absolute inset-0 flex items-center justify-end pr-3">
            <span
              className="text-[12px] text-white/60"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {simPct.toFixed(2)}%
              {isOverflow && ' ⚠ overflow'}
            </span>
          </div>
        </div>

        <div className="mt-2 flex justify-between text-[11px] text-white/35">
          <span>{totalSimTokens.toLocaleString()} used</span>
          <span>{Math.max(0, model.contextWindow - totalSimTokens).toLocaleString()} remaining</span>
        </div>
      </StageCard>

      {/* Conversation simulator */}
      <StageCard
        title="Conversation accumulation"
        subtitle="Each message adds to the running total. Watch the bar fill up."
      >
        <div className="flex gap-2 mb-4">
          <button
            onClick={addMessage}
            className="text-sm px-4 py-2 rounded-lg bg-indigo-500/15 text-indigo-300 border border-indigo-500/25 hover:bg-indigo-500/25 transition-colors"
          >
            + Add message
          </button>
          <button
            onClick={resetSim}
            className="text-sm px-4 py-2 rounded-lg border border-white/[0.1] text-white/40 hover:text-white/70 transition-colors"
          >
            Reset
          </button>
        </div>

        {messages.length === 0 && (
          <p className="text-sm text-white/25 italic">
            Click "Add message" to simulate a multi-turn chat.
          </p>
        )}

        <div className="flex flex-col gap-2 max-h-60 overflow-y-auto pr-1">
          {messages.map((msg, i) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex justify-between items-center rounded-lg px-3 py-2 text-sm ${
                msg.role === 'user'
                  ? 'bg-indigo-500/8 border border-indigo-500/15'
                  : 'bg-white/[0.03] border border-white/[0.06]'
              }`}
            >
              <span className="text-white/50">
                {msg.role === 'user' ? '👤 User' : '🤖 Assistant'} msg {Math.ceil((i + 1) / 2)}
              </span>
              <span
                className="text-white/40"
                style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}
              >
                +{msg.tokens} tokens · total: {
                  tokens.length + messages.slice(0, i + 1).reduce((a, m) => a + m.tokens, 0)
                }
              </span>
            </motion.div>
          ))}
        </div>
      </StageCard>
    </div>
  )
}