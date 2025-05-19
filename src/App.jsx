import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import TodoList from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Bienvenue dans l'app React Galadrim</h1>
        <Counter initial={10} />
        <TodoList />
      </div>
    </>
  )
}

export default App