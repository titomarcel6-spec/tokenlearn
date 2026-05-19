import React, { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/layout/Sidebar'
import TopBar from './components/layout/TopBar'
import LoadingSpinner from './components/shared/LoadingSpinner'

// Lazy-load each stage so the initial bundle stays small
const TextInput    = lazy(() => import('./components/stages/TextInput'))
const Preprocessing = lazy(() => import('./components/stages/Preprocessing'))
const Tokenization = lazy(() => import('./components/stages/Tokenization'))
const ContextWindow = lazy(() => import('./components/stages/ContextWindow'))
const CostEstimator = lazy(() => import('./components/stages/CostEstimator'))
const GenerationSim = lazy(() => import('./components/stages/GenerationSim'))

export default function App() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-[#0f0f12] text-[#e8e8f0] overflow-hidden">
      <Sidebar />

      <div className="flex flex-col flex-1 min-w-0">
        <TopBar />

        <main className="flex-1 overflow-y-auto p-6 pb-24 md:pb-6">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/"             element={<Navigate to="/input" replace />} />
              <Route path="/input"        element={<TextInput />} />
              <Route path="/preprocessing" element={<Preprocessing />} />
              <Route path="/tokenization" element={<Tokenization />} />
              <Route path="/context"      element={<ContextWindow />} />
              <Route path="/cost"         element={<CostEstimator />} />
              <Route path="/generation"   element={<GenerationSim />} />
              <Route path="*"             element={<Navigate to="/input" replace />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </div>
  )
}