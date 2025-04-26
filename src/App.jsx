import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Questions from './pages/Questions'
import Submit from './pages/Submit'
import Header from './pages/Header'

function App() {
  return (
    <div className="p-8 bg-red-50 bg-[url(./assets/tritonlogo.png)] min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Questions />} />
        <Route path="/submit" element={<Submit />} />
      </Routes>
    </div>
  )
}

export default App

/**
 * bg-[url(./assets/tritonlogo.png)]
 */