import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { initTokenizer } from './tokenizers/tiktokenWrapper'
import usePipelineStore from './store/pipelineStore'

// Boot: initialise WASM tokenizer, then trigger first tokenization
initTokenizer().then(() => {
  const store = usePipelineStore.getState()
  store.setTokenizerReady(true)
  store._recompute(store.rawText)
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)