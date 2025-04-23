import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Questions from './pages/Questions'
import Submit from './pages/Submit'
import Header from './pages/Header'

function App() {
  return (
    <div className="p-8 bg-indigo-200 min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Questions />} />
        <Route path="/submit" element={<Submit />} />
      </Routes>
    </div>
  )
}

export default App
