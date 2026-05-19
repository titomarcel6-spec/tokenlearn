/**
 * modelConfig.js
 * Central source of truth for model metadata, pricing, and context limits.
 * Prices are per 1M tokens (as of early 2025 — update as needed).
 */

export const MODELS = {
  gpt4o: {
    id: 'gpt4o',
    name: 'GPT-4o',
    provider: 'OpenAI',
    // Prices in USD per 1M tokens
    inputPricePer1M:  5.00,
    outputPricePer1M: 15.00,
    contextWindow: 128_000,
    // tiktoken encoding name (cl100k_base is shared by gpt-4, gpt-4o, claude approx)
    encoding: 'cl100k_base',
    estimated: false,
    color: '#10b981',  // emerald
  },
  gpt35: {
    id: 'gpt35',
    name: 'GPT-3.5 Turbo',
    provider: 'OpenAI',
    inputPricePer1M:  0.50,
    outputPricePer1M: 1.50,
    contextWindow: 16_385,
    encoding: 'cl100k_base',
    estimated: false,
    color: '#3b82f6',  // blue
  },
  claude35: {
    id: 'claude35',
    name: 'Claude 3.5 Sonnet',
    provider: 'Anthropic',
    inputPricePer1M:  3.00,
    outputPricePer1M: 15.00,
    contextWindow: 200_000,
    // Claude uses a similar BPE; cl100k_base is within ~3-5% for English
    encoding: 'cl100k_base',
    estimated: true,
    color: '#f59e0b',  // amber
  },
  gemini15: {
    id: 'gemini15',
    name: 'Gemini 1.5 Pro',
    provider: 'Google',
    inputPricePer1M:  1.25,
    outputPricePer1M: 5.00,
    contextWindow: 1_000_000,
    // Gemini uses SentencePiece — heuristic approximation used
    encoding: 'cl100k_base',
    estimated: true,
    color: '#8b5cf6',  // violet
  },
}

export const MODEL_LIST = Object.values(MODELS)

/**
 * Calculate cost for a given number of tokens.
 * @param {number} tokens
 * @param {number} pricePer1M  — USD per 1,000,000 tokens
 * @returns {number}           — cost in USD
 */
export function calcCost(tokens, pricePer1M) {
  return (tokens / 1_000_000) * pricePer1M
}

/**
 * Format a USD cost for display.
 * Very small values show more decimals to avoid showing "$0.000000".
 */
export function formatCost(usd) {
  if (usd === 0) return '$0.000000'
  if (usd < 0.000001) return `$${usd.toExponential(2)}`
  if (usd < 0.001)    return `$${usd.toFixed(6)}`
  if (usd < 1)        return `$${usd.toFixed(4)}`
  return `$${usd.toFixed(2)}`
}