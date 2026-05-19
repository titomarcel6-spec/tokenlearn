/**
 * pipelineStore.js
 *
 * Global Zustand store. Single source of truth for the entire pipeline:
 *   rawText → tokens → selectedModel → cost state
 *
 * Components read from here; actions write back here.
 * This keeps every stage in sync without prop drilling.
 */

import { create } from 'zustand'
import { tokenize, isReady } from '../tokenizers/tiktokenWrapper'
import { MODELS, calcCost } from '../tokenizers/modelConfig'

const DEFAULT_TEXT = "Hello, world! 🌍 LLMs don't process words — they process token IDs."

const usePipelineStore = create((set, get) => ({
  // ── Input ──────────────────────────────────────────────────
  rawText: DEFAULT_TEXT,
  setRawText: (text) => {
    set({ rawText: text })
    get()._recompute(text)
  },

  // ── Tokenizer state ────────────────────────────────────────
  tokenizerReady: false,
  setTokenizerReady: (ready) => set({ tokenizerReady: ready }),

  // ── Tokens ────────────────────────────────────────────────
  // Array of { id: number, text: string }
  tokens: [],

  // ── Model ─────────────────────────────────────────────────
  selectedModelId: 'gpt4o',
  setSelectedModel: (id) => {
    set({ selectedModelId: id })
    // Recalculate costs for new model pricing
    get()._recomputeCosts(get().tokens.length)
  },

  // ── Cost ──────────────────────────────────────────────────
  outputTokenCount: 500,   // user-controlled slider in cost stage
  setOutputTokenCount: (n) => {
    set({ outputTokenCount: n })
    get()._recomputeCosts(get().tokens.length)
  },

  inputCostUSD: 0,
  outputCostUSD: 0,
  totalCostUSD: 0,

  // ── Context window ────────────────────────────────────────
  contextUsedPct: 0,

  // ── Internal recompute ────────────────────────────────────
  _recompute: (text) => {
    const tokens = isReady() ? tokenize(text) : []
    const tokenCount = tokens.length

    const { selectedModelId, outputTokenCount } = get()
    const model = MODELS[selectedModelId]
    const contextUsedPct = model
      ? Math.min(100, (tokenCount / model.contextWindow) * 100)
      : 0

    set({ tokens, contextUsedPct })
    get()._recomputeCosts(tokenCount)
  },

  _recomputeCosts: (inputCount) => {
    const { selectedModelId, outputTokenCount } = get()
    const model = MODELS[selectedModelId]
    if (!model) return

    const inputCostUSD  = calcCost(inputCount,       model.inputPricePer1M)
    const outputCostUSD = calcCost(outputTokenCount,  model.outputPricePer1M)
    set({
      inputCostUSD,
      outputCostUSD,
      totalCostUSD: inputCostUSD + outputCostUSD,
    })
  },
}))

export default usePipelineStore