import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NestedButtons from './NestedButtons.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Event Propagation Demo</h1>
      <NestedButtons />


    </>
  )
}

export default App
