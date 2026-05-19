import React from 'react'
import usePipelineStore from '../../store/pipelineStore'
import StageCard from '../shared/StageCard'
import { MODEL_LIST, MODELS, calcCost, formatCost } from '../../tokenizers/modelConfig'

export default function CostEstimator() {
  const tokens             = usePipelineStore((s) => s.tokens)
  const outputTokenCount   = usePipelineStore((s) => s.outputTokenCount)
  const setOutputTokenCount = usePipelineStore((s) => s.setOutputTokenCount)
  const selectedModelId    = usePipelineStore((s) => s.selectedModelId)

  const inputCount = tokens.length
  const model = MODELS[selectedModelId]

  return (
    <div className="max-w-3xl mx-auto">
      {/* Formula display */}
      <StageCard title="Billing formula">
        <div
          className="text-sm text-indigo-300/80 bg-[#0f0f12] rounded-lg p-4 leading-loose"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          <div>Input cost  = (input_tokens  / 1,000,000) × price_per_1M_input</div>
          <div>Output cost = (output_tokens / 1,000,000) × price_per_1M_output</div>
          <div className="mt-2 text-white/40">Total cost   = Input cost + Output cost</div>
        </div>
      </StageCard>

      {/* Output slider */}
      <StageCard
        title="Simulate output"
        subtitle="Drag to set expected output token count"
      >
        <div className="flex items-center gap-4">
          <input
            type="range"
            min={0}
            max={4096}
            step={1}
            value={outputTokenCount}
            onChange={(e) => setOutputTokenCount(Number(e.target.value))}
            className="flex-1 accent-indigo-400"
          />
          <span
            className="text-sm font-semibold text-white/70 w-20 text-right tabular-nums"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {outputTokenCount.toLocaleString()} tokens
          </span>
        </div>
      </StageCard>

      {/* Model comparison cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {MODEL_LIST.map((m) => {
          const iCost = calcCost(inputCount,       m.inputPricePer1M)
          const oCost = calcCost(outputTokenCount,  m.outputPricePer1M)
          const total = iCost + oCost
          const isSelected = m.id === selectedModelId

          return (
            <div
              key={m.id}
              className={`rounded-xl border p-4 ${
                isSelected
                  ? 'border-indigo-400/40 bg-indigo-500/5'
                  : 'border-white/[0.07] bg-[#16161a]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="text-sm font-semibold text-white/80">{m.name}</div>
                  <div className="text-[11px] text-white/30">{m.provider}</div>
                </div>
                {m.estimated && (
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/15">
                    ≈ est.
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1.5 text-[12px]">
                <CostRow
                  label={`Input (${inputCount.toLocaleString()} tokens)`}
                  value={formatCost(iCost)}
                  subValue={`$${m.inputPricePer1M}/1M`}
                />
                <CostRow
                  label={`Output (${outputTokenCount.toLocaleString()} tokens)`}
                  value={formatCost(oCost)}
                  subValue={`$${m.outputPricePer1M}/1M`}
                />
                <div className="border-t border-white/[0.07] pt-2 mt-1 flex justify-between">
                  <span className="text-white/60 font-medium">Total</span>
                  <span
                    className="text-emerald-400 font-semibold"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {formatCost(total)}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Scale callout */}
      <StageCard title="At scale" className="mt-3">
        <div className="grid grid-cols-3 gap-3 text-center">
          {[1000, 10000, 1000000].map((reqs) => {
            const cost = calcCost(inputCount, model.inputPricePer1M) * reqs
            return (
              <div key={reqs} className="bg-[#0f0f12] rounded-lg py-3 px-2">
                <div className="text-[11px] text-white/30 mb-1">
                  {reqs.toLocaleString()} requests
                </div>
                <div
                  className="text-base font-semibold text-white/70 tabular-nums"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {formatCost(cost)}
                </div>
              </div>
            )
          })}
        </div>
      </StageCard>
    </div>
  )
}

function CostRow({ label, value, subValue }) {
  return (
    <div className="flex justify-between items-baseline">
      <span className="text-white/40">{label}</span>
      <div className="text-right">
        <span className="text-white/70" style={{ fontFamily: 'var(--font-mono)' }}>
          {value}
        </span>
        <span className="text-white/25 ml-1.5">{subValue}</span>
      </div>
    </div>
  )
}