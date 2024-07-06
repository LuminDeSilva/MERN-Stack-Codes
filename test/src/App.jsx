import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './welcome'
import Clock from './clock'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello Vite + React!</h1>
      <Welcome name="Sara" age="24"/>
      <Clock />
    </>
  )
}

export default App
