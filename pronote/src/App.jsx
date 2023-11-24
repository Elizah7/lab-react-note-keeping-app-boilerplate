import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputMirror from './Note'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<InputMirror/>
    </>
  )
}

export default App
