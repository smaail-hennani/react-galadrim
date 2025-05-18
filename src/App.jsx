import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Bienvenue dans l'app React Galadrim</h1>
        <Counter />
      </div>
    </>
  )
}

export default App
