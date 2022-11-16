import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './pages/Login'
import { Routes, Route, Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App
