# TokenLearn

An interactive educational web app that teaches how LLMs process text —
from raw input through tokenization, context windows, cost estimation,
and autoregressive generation.

**Tech stack:** React + Vite + Tailwind CSS + Zustand + @dqbd/tiktoken (WASM)  
**Deployment:** GitHub Pages (static, no backend required)

---

## Quickstart

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (hot reload)
npm run dev
# → http://localhost:5173/tokenlearn/
```

---

## Deploy to GitHub Pages

### One-time setup

```bash
# 1. Create a GitHub repo named "tokenlearn" (or your preferred name)
git init
git remote add origin https://github.com/YOUR_USERNAME/tokenlearn.git

# 2. Make sure vite.config.js base matches your repo name:
#    base: '/tokenlearn/'

# 3. Install the deploy tool (already in devDependencies)
npm install
```

### Deploy

```bash
npm run deploy
```

This runs `vite build` then pushes the `dist/` folder to the `gh-pages`
branch of your repo.

### Enable GitHub Pages

1. Go to your repo → **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **gh-pages** / **(root)**
4. Save — your app will be live at `https://YOUR_USERNAME.github.io/tokenlearn/`

---

## Project structure

```
src/
├── main.jsx                    # Entry — boots tiktoken WASM
├── App.jsx                     # Root layout + HashRouter routes
├── store/
│   └── pipelineStore.js        # Zustand global state
├── tokenizers/
│   ├── tiktokenWrapper.js      # Real tiktoken WASM encoder
│   └── modelConfig.js          # Pricing tables & context limits
├── components/
│   ├── layout/
│   │   ├── Sidebar.jsx
│   │   └── TopBar.jsx
│   ├── stages/
│   │   ├── TextInput.jsx       # Stage 1
│   │   ├── Preprocessing.jsx   # Stage 2
│   │   ├── Tokenization.jsx    # Stage 3
│   │   ├── ContextWindow.jsx   # Stage 4
│   │   ├── CostEstimator.jsx   # Stage 5
│   │   └── GenerationSim.jsx   # Stage 6
│   └── shared/
│       ├── TokenChip.jsx
│       ├── StageCard.jsx
│       └── LoadingSpinner.jsx
└── styles/
    └── index.css
```

---

## Phase 2 ideas (next sprint)

- Token heatmap (frequency / cost per token)
- Prompt compression demo
- Multilingual tokenization comparison panel
- Real-time token streaming with WebSocket mock
- Embeddings visualisation (2D PCA of token vectors)

---

## Updating prices

Edit `src/tokenizers/modelConfig.js` — all pricing lives in the `MODELS`
object. Prices are in USD per 1M tokens.