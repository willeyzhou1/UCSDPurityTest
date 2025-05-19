import { React, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Questions from './pages/Questions'
import Submit from './pages/Submit'
import Header from './pages/Header'
import Graph from './pages/Graph'

function App() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="p-8 bg-red-50 bg-[url(./assets/tritonlogo.png)] min-h-screen">
        <Header visible={visible}/>
        <Routes>
          <Route path="/" element={<Questions setVisible={setVisible}/>} />
          <Route path="/submit" element={<Submit setVisible={setVisible}/>} />
          <Route path="/analytics" element={<Graph setVisible={setVisible}/>} />
        </Routes>
    </div>
  )
}

export default App

/**
 * bg-[url(./assets/tritonlogo.png)]
 */

/**
 * use firebase to store data about responses
 */