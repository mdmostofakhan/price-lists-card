import { useState } from 'react'

import './App.css'
import Navber from './components/navber/Navber'
import Prices from './components/price/Prices'
import Deshboard from './components/deshboard/Deshboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navber></Navber>
      <h1 className='text-5xl text-rose-400 text-center'>Hello from tailwind</h1>
      <Prices></Prices>
      <Deshboard></Deshboard>
     
    </div>
  )
}

export default App
