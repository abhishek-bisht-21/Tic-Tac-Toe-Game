import { useState } from 'react'
import Icon from './components/Icon/Icon'
import './App.css'
import Card from './components/card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card />
    </>
  )
}

export default App
