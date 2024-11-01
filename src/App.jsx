import { useState } from 'react'
import Icon from './components/Icon/Icon'
import './App.css'
import Card from './components/card/Card'
import Grid from './components/Grid/Grid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Grid numberOfCards={9}/>
    </>
  )
}

export default App
